"use client";

import { useMemo, useState } from "react";
import { catalogRecords, sourceMeta, type CatalogRecord } from "./data/catalog";

const gradeOrder = ["A", "B", "C", "D"];

function formatPrice(value: number) {
  return new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatHours(value: number) {
  return new Intl.NumberFormat("zh-TW").format(value);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
}

function gradeClass(grade: string) {
  return `grade grade-${grade.toLowerCase()}`;
}

function matchesSearch(record: CatalogRecord, search: string) {
  if (!search.trim()) return true;
  const haystack = [
    record.id,
    record.brand,
    record.model,
    record.capacity,
    record.suggestedUse,
    record.notes,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(search.trim().toLowerCase());
}

function RecordCard({
  record,
  selected,
  onToggle,
}: {
  record: CatalogRecord;
  selected: boolean;
  onToggle: (record: CatalogRecord) => void;
}) {
  const selectable = record.grade === "A" || record.grade === "B";

  return (
    <article className={`drive-card ${selectable ? "" : "drive-card-muted"}`}>
      <div className="drive-card-topline">
        <span className="asset-id">#{record.id}</span>
        <span className={gradeClass(record.grade)}>{record.gradeLabel}</span>
      </div>

      <div className="drive-card-heading">
        <div className="drive-mark" aria-hidden="true">
          HD
        </div>
        <div>
          <h3>{record.brand} · {record.capacity}</h3>
          <p>{record.model}</p>
        </div>
        <strong className="drive-price">{formatPrice(record.retailPrice)}</strong>
      </div>

      <div className="metric-grid" aria-label={`硬碟 ${record.id} 檢測摘要`}>
        <div>
          <span>Power-On Hours</span>
          <strong>{formatHours(record.hours)} h</strong>
        </div>
        <div>
          <span>SMART</span>
          <strong>{record.smartStatus}</strong>
        </div>
        <div>
          <span>05 / C5 / C6</span>
          <strong>{record.reallocated} / {record.pending} / {record.offlineUncorrectable}</strong>
        </div>
        <div>
          <span>CRC</span>
          <strong className={record.crc > 0 ? "metric-warning" : ""}>{record.crc}</strong>
        </div>
      </div>

      <p className="use-note"><span>建議用途</span>{record.suggestedUse}</p>

      <details className="drive-details">
        <summary>查看健康履歷與證據</summary>
        <div className="details-body">
          <div className="detail-pairs">
            <div><span>Power Cycle</span><strong>{formatHours(record.powerCycle)}</strong></div>
            <div><span>序號末四碼</span><strong>{record.serialSuffix ?? "未提供"}</strong></div>
            <div><span>最後檢測</span><strong>{record.lastTested ? formatDate(record.lastTested) : "未提供"}</strong></div>
            <div><span>型號報告候選</span><strong>{record.driveReportUrls.length ? `${record.driveReportUrls.length} 份` : "待補"}</strong></div>
          </div>
          <p className="record-note">{record.notes}</p>
          <div className="evidence-links">
            {record.drivePhotoUrl ? <a href={record.drivePhotoUrl} target="_blank" rel="noreferrer">查看 {record.drivePhotoName ?? "DriveDx 截圖"}（Google Drive）↗</a> : null}
          </div>
        </div>
      </details>

      {selectable ? (
        <label className={`select-row ${selected ? "is-selected" : ""}`}>
          <input
            type="checkbox"
            checked={selected}
            onChange={() => onToggle(record)}
            aria-label={`將 ${record.id} 加入詢價單`}
          />
          <span>{selected ? "已加入詢價單" : "加入詢價單"}</span>
          <span className="select-row-price">{formatPrice(record.retailPrice)}</span>
        </label>
      ) : (
        <div className="not-selectable">暫不列入正常詢價 · 需複測或零件處理</div>
      )}
    </article>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("全部品牌");
  const [capacity, setCapacity] = useState("全部容量");
  const [grade, setGrade] = useState("全部分級");
  const [showIssues, setShowIssues] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const brands = useMemo(() => Array.from(new Set(catalogRecords.map((record) => record.brand))).sort(), []);
  const capacities = useMemo(() => Array.from(new Set(catalogRecords.map((record) => record.capacity))).sort(), []);

  const filteredRecords = useMemo(() => catalogRecords.filter((record) => {
    const matchesBrand = brand === "全部品牌" || record.brand === brand;
    const matchesCapacity = capacity === "全部容量" || record.capacity === capacity;
    const matchesGrade = grade === "全部分級" || record.grade === grade;
    const matchesIssues = showIssues || (record.grade === "A" || record.grade === "B");
    return matchesBrand && matchesCapacity && matchesGrade && matchesIssues && matchesSearch(record, search);
  }), [brand, capacity, grade, search, showIssues]);

  const availableRecords = filteredRecords.filter((record) => record.grade === "A" || record.grade === "B");
  const issueRecords = filteredRecords.filter((record) => record.grade === "C" || record.grade === "D");
  const selectedRecords = catalogRecords.filter((record) => selectedIds.includes(record.id));
  const subtotal = selectedRecords.reduce((sum, record) => sum + record.retailPrice, 0);
  const availableCount = catalogRecords.filter((record) => record.grade === "A" || record.grade === "B").length;
  const issueCount = catalogRecords.length - availableCount;
  const gradeCounts = gradeOrder.map((item) => ({ grade: item, count: catalogRecords.filter((record) => record.grade === item).length }));

  function toggleSelection(record: CatalogRecord) {
    setSelectedIds((current) => current.includes(record.id)
      ? current.filter((id) => id !== record.id)
      : [...current, record.id]);
    setCopied(false);
  }

  function clearFilters() {
    setSearch("");
    setBrand("全部品牌");
    setCapacity("全部容量");
    setGrade("全部分級");
    setShowIssues(true);
  }

  async function copyQuote() {
    if (!selectedRecords.length) return;
    const ids = selectedRecords.map((record) => record.id).join("、");
    const text = `我想詢價：${ids}，共${selectedRecords.length}顆。網頁參考總額 ${formatPrice(subtotal)}，請提供多顆採購報價。`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
  }

  return (
    <main className="catalog-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="回到硬碟資產選購站首頁">
          <span className="brand-symbol">HD</span>
          <span><strong>硬碟資產選購站</strong><small>HDD SALE CATALOG</small></span>
        </a>
        <nav className="header-nav" aria-label="主要導覽">
          <a href="#catalog">型錄</a>
          <a href="#how-it-works">如何詢價</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />PRIVATE CATALOG · EVIDENCE FIRST</p>
          <h1>把每一顆硬碟的證據，整理成一張可詢價的清單。</h1>
          <p className="hero-description">二手硬碟健康履歷、品項比較與詢價清單。先看 SMART 與檢測證據，再決定哪些值得帶回去。</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#catalog">開始挑選 <span>↓</span></a>
            <a className="button button-quiet" href="#how-it-works">查看證據來源 <span>↓</span></a>
          </div>
        </div>
        <div className="hero-ledger" aria-label="資料來源摘要">
          <div className="ledger-top"><span>LIVE INVENTORY SNAPSHOT</span><span>{formatDate(sourceMeta.syncedAt)}</span></div>
          <div className="ledger-number">{catalogRecords.length.toString().padStart(2, "0")}</div>
          <div className="ledger-label">顆硬碟已完成盤點</div>
          <div className="ledger-rule" />
          <div className="ledger-lines">
            <span><b>A / B</b> 可列入詢價 <strong>{availableCount}</strong></span>
            <span><b>C / D</b> 待複測／零件 <strong>{issueCount}</strong></span>
            <span><b>Drive</b> 證據檔案 <strong>{sourceMeta.driveEvidenceFileCount}</strong></span>
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="型錄統計">
        <div><span>證據來源</span><strong>Google Drive</strong></div>
        <div><span>顯示筆數</span><strong>{filteredRecords.length} / {catalogRecords.length}</strong></div>
        <div><span>已選詢價</span><strong>{selectedRecords.length} 顆</strong></div>
        <div><span>參考小計</span><strong>{formatPrice(subtotal)}</strong></div>
      </section>

      <section className="catalog-layout" id="catalog">
        <div className="catalog-main">
          <div className="section-heading">
            <div><p className="eyebrow">01 / CATALOG</p><h2>逐顆查看，按證據挑選。</h2></div>
            <span className="result-count">{filteredRecords.length} 筆結果</span>
          </div>

          <div className="filter-panel">
            <label className="search-field"><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="搜尋編號、型號、用途…" aria-label="搜尋硬碟" /></label>
            <label><span>品牌</span><select value={brand} onChange={(event) => setBrand(event.target.value)}><option>全部品牌</option>{brands.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label><span>容量</span><select value={capacity} onChange={(event) => setCapacity(event.target.value)}><option>全部容量</option>{capacities.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label><span>健康分級</span><select value={grade} onChange={(event) => setGrade(event.target.value)}><option>全部分級</option>{gradeOrder.filter((item) => catalogRecords.some((record) => record.grade === item)).map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="issue-toggle"><input type="checkbox" checked={showIssues} onChange={(event) => setShowIssues(event.target.checked)} /><span>顯示 C / D</span></label>
            <button className="clear-button" type="button" onClick={clearFilters}>清除</button>
          </div>

          <div className="grade-summary">{gradeCounts.map(({ grade: item, count }) => <span key={item} className={gradeClass(item)}>{item} <b>{count}</b></span>)}</div>

          <div className="catalog-group">
            <div className="group-heading"><div><span className="group-kicker">READY TO QUOTE</span><h3>A / B 級 · 可列入詢價</h3></div><span>{availableRecords.length} 筆</span></div>
            {availableRecords.length ? <div className="card-grid">{availableRecords.map((record) => <RecordCard key={record.id} record={record} selected={selectedIds.includes(record.id)} onToggle={toggleSelection} />)}</div> : <div className="empty-state">找不到符合條件的可詢價硬碟。<button type="button" onClick={clearFilters}>清除篩選</button></div>}
          </div>

          {showIssues ? <div className="catalog-group issue-group"><div className="group-heading"><div><span className="group-kicker">RETEST / PARTS ONLY</span><h3>C / D 級 · 待複測與零件品</h3></div><span>{issueRecords.length} 筆</span></div>{issueRecords.length ? <div className="card-grid">{issueRecords.map((record) => <RecordCard key={record.id} record={record} selected={false} onToggle={toggleSelection} />)}</div> : <div className="empty-state">目前沒有符合條件的 C / D 級品項。</div>}</div> : null}
        </div>

        <aside className="quote-rail" aria-label="詢價清單">
          <div className="quote-card">
            <div className="quote-card-top"><span className="eyebrow">02 / QUOTE LIST</span><span className="quote-count">{selectedRecords.length.toString().padStart(2, "0")}</span></div>
            <h2>你的詢價清單</h2>
            <p>只先選想比較或詢價的 A／B 級品項，最後價格與交付方式再確認。</p>
            {selectedRecords.length ? <div className="selected-list">{selectedRecords.map((record) => <div key={record.id} className="selected-item"><div><b>#{record.id}</b><span>{record.capacity} · {record.model}</span></div><strong>{formatPrice(record.retailPrice)}</strong><button type="button" onClick={() => toggleSelection(record)} aria-label={`移除 ${record.id}`}>×</button></div>)}</div> : <div className="quote-empty"><span>＋</span><p>從型錄勾選品項<br />這裡會自動整理小計</p></div>}
            <div className="quote-total"><span>牌價參考小計</span><strong>{formatPrice(subtotal)}</strong></div>
            <button className="button button-primary full-button" type="button" disabled={!selectedRecords.length} onClick={copyQuote}>{copied ? "已複製詢價文字 ✓" : "複製詢價文字"}</button>
            <p className="quote-footnote">多顆採購可依數量及品項組合另行報價。</p>
          </div>

          <div className="source-card" id="how-it-works"><p className="eyebrow">03 / EVIDENCE SOURCE</p><h3>檢測證據集中在 Google Drive。</h3><p>照片與 DriveDx 原始報告固定放在同一個資料夾；開啟後可查看完整截圖與文字報告。</p><a href={sourceMeta.driveFolderUrl} target="_blank" rel="noreferrer">開啟 Google Drive 證據資料夾 ↗</a><div className="source-meta"><span>最後同步</span><strong>{formatDate(sourceMeta.syncedAt)}</strong><span>資料列</span><strong>{catalogRecords.length}</strong></div></div>
        </aside>
      </section>

      <footer className="site-footer"><span>硬碟資產選購站 · HDD Sale Catalog</span><span>僅供詢價參考，不構成庫存、保固或成交承諾。</span></footer>
    </main>
  );
}
