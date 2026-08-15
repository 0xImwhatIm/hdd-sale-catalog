import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the HDD asset catalog", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /硬碟資產選購站/);
  assert.match(html, /HDD Sale Catalog/);
  assert.match(html, /DriveDx/);
  assert.match(html, /1TugJHh-sImRgufQYZ9kWZRaG59p75mHN/);
  assert.match(html, /檢測證據集中在 Google Drive/);
  assert.doesNotMatch(html, /app\.notion\.com/);
  assert.equal(
    html.match(/1TugJHh-sImRgufQYZ9kWZRaG59p75mHN/g)?.length,
    1,
  );
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
  assert.doesNotMatch(html, /react-loading-skeleton/);
});

test("keeps the catalog data-driven and the starter preview removed", async () => {
  const [page, catalog, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/data/catalog.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /catalogRecords\.filter/);
  assert.match(page, /catalogRecords\.map/);
  assert.match(page, /catalogRecords\.length/);
  assert.match(catalog, /export const catalogRecords/);
  assert.match(catalog, /driveFolderUrl/);
  assert.doesNotMatch(catalog, /notionUrl|app\.notion\.com/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  const previewEntries = await readdir(new URL("app/_sites-preview/", templateRoot));
  assert.deepEqual(previewEntries, []);
});
