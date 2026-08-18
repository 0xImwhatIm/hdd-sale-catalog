export type CatalogRecord = {
  id: string;
  brand: string;
  model: string;
  capacity: string;
  grade: string;
  gradeLabel: string;
  smartStatus: string;
  hours: number;
  powerCycle: number;
  reallocated: number;
  pending: number;
  offlineUncorrectable: number;
  crc: number;
  retailPrice: number;
  suggestedUse: string;
  notes: string;
  lastTested: string | null;
  serialSuffix: string | null;
  drivePhotoUrl: string | null;
  drivePhotoName: string | null;
  driveReportUrls: string[];
  driveReportNames: string[];
};

export const sourceMeta = {
  "driveFolderUrl": "https://drive.google.com/drive/folders/1TugJHh-sImRgufQYZ9kWZRaG59p75mHN?usp=sharing",
  "syncedAt": "2026-08-17T23:49:05.727Z",
  "driveEvidenceFileCount": 54
} as const;

const catalogRecordsSeed: CatalogRecord[] = [
  {
    "id": "001",
    "brand": "WD",
    "model": "WDC WD2002FAEX-007BA0",
    "capacity": "2.0 TB",
    "grade": "C",
    "gradeLabel": "C｜需注意",
    "smartStatus": "注意",
    "hours": 1397,
    "powerCycle": 323,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 166,
    "retailPrice": 450,
    "suggestedUse": "待整理",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 100%，但 UDMA CRC Error Count 166 並列為 1 項警告。CRC 通常與線材、外接盒或傳輸介面有關；建議更換介面後重新檢測並做完整讀寫測試，再決定用途。",
    "lastTested": "2026-08-15",
    "serialSuffix": "6228",
    "drivePhotoUrl": "https://drive.google.com/file/d/1RYl7qiTl_rjEuWGBt_V9WxWai0Om0RqC/view?usp=drivesdk",
    "drivePhotoName": "001.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1CXhZyThXLOwu12zpmMtuy3PvsMdSuhgQ/view?usp=drivesdk",
      "https://drive.google.com/file/d/1WFZKwN2bITRDpiZ9Hgj-yzfc_p2G2YIM/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2002FAEX-007BA0_2026-08-15_11-22-29-281.txt",
      "DriveDxReport_WDC WD2002FAEX-007BA0_2026-08-15_11-13-25-875.txt"
    ]
  },
  {
    "id": "002",
    "brand": "WD",
    "model": "WDC WD2003FZEX-00Z4SA0",
    "capacity": "2.0 TB",
    "grade": "B",
    "gradeLabel": "B｜可用",
    "smartStatus": "正常",
    "hours": 392,
    "powerCycle": 86,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 8,
    "retailPrice": 1100,
    "suggestedUse": "一般資料",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 95.3%，05／C5／C6 均為 0。CRC=8 為歷史傳輸錯誤記錄，應確認線材與外接盒後持續觀察。適合一般資料或次要用途，重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "K3HD",
    "drivePhotoUrl": "https://drive.google.com/file/d/1ivNtBwku3wsI2l3E5hZ8tVKdWGDy_u57/view?usp=drivesdk",
    "drivePhotoName": "002.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1caWaNULSVi-8EpINEBsninVDtU1DJN2S/view?usp=drivesdk",
      "https://drive.google.com/file/d/15WOxV0KQk64nMyQdBJqCF9QPXde4LwSM/view?usp=drivesdk",
      "https://drive.google.com/file/d/1yk6eL6Ddvl_CiS1oUOeV9WxQvGJ586-s/view?usp=drivesdk",
      "https://drive.google.com/file/d/1lyLimFQbAkEGEIDbppryfObMT8jxyF2r/view?usp=drivesdk",
      "https://drive.google.com/file/d/15e4AUV-BvsQvH0HSPH285amixvq5pDhp/view?usp=drivesdk",
      "https://drive.google.com/file/d/1oRppcIHAIAglYxMxgmBhmimkx8aQS31y/view?usp=drivesdk",
      "https://drive.google.com/file/d/1wkVnJkdMd1zLGP0sY0QPK-IJGKWG2dY3/view?usp=drivesdk",
      "https://drive.google.com/file/d/1OrBozXZZB9RfmWdmRa0LWiff0Olvi8db/view?usp=drivesdk",
      "https://drive.google.com/file/d/1gVbtmgQuv2lviKStIm7bK6UiBdxhQtvh/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DnY4SOTASJ07m2_QSD2mtUgin0lWcGTz/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-09-23-331.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-04-25-169.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-03-08-626.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-01-47-955.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-57-40-181.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-56-05-470.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-52-41-551.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-46-32-001.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-44-39-605.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-30-24-260.txt"
    ]
  },
  {
    "id": "003",
    "brand": "WD",
    "model": "WDC WD1002FAEX-00Z3A0",
    "capacity": "1.0 TB",
    "grade": "D",
    "gradeLabel": "D｜不建議使用",
    "smartStatus": "異常",
    "hours": 44,
    "powerCycle": 18,
    "reallocated": 663,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 2,
    "retailPrice": 100,
    "suggestedUse": "不建議使用",
    "notes": "DriveDx：Advanced SMART FAILED／Overall Health BAD 0%。關鍵值：05=663、C5=0、C6=0、CRC=2。已列為不建議使用；若仍有資料應先移出，不可作唯一備份或重要用途。",
    "lastTested": "2026-08-15",
    "serialSuffix": "0471",
    "drivePhotoUrl": "https://drive.google.com/file/d/1Pb6ehRQ6HA9eo2J1wLApvzgCkQqlP8ui/view?usp=drivesdk",
    "drivePhotoName": "003.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1KPn5Eb4kfNPE31-TkVDZCIkhdyhfkh9Z/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Dpe66eL9ig9W3erFaxacNscHZaca6PYd/view?usp=drivesdk",
      "https://drive.google.com/file/d/1me7RmLX1XlF0qjcKYHngm5e0iTWutnwD/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD1002FAEX-00Z3A0_2026-08-15_11-10-55-832.txt",
      "DriveDxReport_WDC WD1002FAEX-00Z3A0_2026-08-15_10-54-32-143.txt",
      "DriveDxReport_WDC WD1002FAEX-00Z3A0_2026-08-15_10-48-51-802.txt"
    ]
  },
  {
    "id": "004",
    "brand": "WD",
    "model": "WDC WD1003FZEX-00MK2A0",
    "capacity": "1.0 TB",
    "grade": "A",
    "gradeLabel": "A｜良好",
    "smartStatus": "正常",
    "hours": 199,
    "powerCycle": 31,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 0,
    "retailPrice": 900,
    "suggestedUse": "剪輯／工作暫存",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 97.5%，Issues found 0；05／C5／C6／CRC 均為 0。依本次檢測列為 A｜良好，可作工作暫存或一般用途；重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "RUY3",
    "drivePhotoUrl": "https://drive.google.com/file/d/1V-DMHW9iao9iFlV599AzHA-JeUBQ4QRJ/view?usp=drivesdk",
    "drivePhotoName": "004.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/11fn5RNmfT3NTlv2sYQ2-T82z8NdmGmH1/view?usp=drivesdk",
      "https://drive.google.com/file/d/1-ihfplaWdCEte446YmR6jV-c9llGM5B8/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD1003FZEX-00MK2A0_2026-08-15_11-08-08-942.txt",
      "DriveDxReport_WDC WD1003FZEX-00MK2A0_2026-08-15_11-07-03-804.txt"
    ]
  },
  {
    "id": "005",
    "brand": "WD",
    "model": "WDC WD2000F9YZ-09N20L0",
    "capacity": "2.0 TB",
    "grade": "B",
    "gradeLabel": "B｜可用",
    "smartStatus": "正常",
    "hours": 2180,
    "powerCycle": 216,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 0,
    "retailPrice": 900,
    "suggestedUse": "一般資料",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 98.0%，05／C5／C6 均為 0。通電 2180 小時，依使用時數列為 B｜可用。適合一般資料或次要用途，重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "0339",
    "drivePhotoUrl": "https://drive.google.com/file/d/1EfFb-QLnEtTozvB-ZtN8XrEO11nX9gw6/view?usp=drivesdk",
    "drivePhotoName": "005.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1kpzEnOXcyKdC929i3H7MWRwwK8BgJ69z/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2000F9YZ-09N20L0_2026-08-15_11-05-53-569.txt"
    ]
  },
  {
    "id": "006",
    "brand": "WD",
    "model": "WDC WD1003FZEX-00MK2A0",
    "capacity": "1.0 TB",
    "grade": "A",
    "gradeLabel": "A｜良好",
    "smartStatus": "正常",
    "hours": 58,
    "powerCycle": 10,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 0,
    "retailPrice": 900,
    "suggestedUse": "剪輯／工作暫存",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 96.9%，Issues found 0；05／C5／C6／CRC 均為 0。依本次檢測列為 A｜良好，可作工作暫存或一般用途；重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "K1NE",
    "drivePhotoUrl": "https://drive.google.com/file/d/1OWrEcO0EPkktf_G13n7bbdtCWEilniE4/view?usp=drivesdk",
    "drivePhotoName": "006.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/11fn5RNmfT3NTlv2sYQ2-T82z8NdmGmH1/view?usp=drivesdk",
      "https://drive.google.com/file/d/1-ihfplaWdCEte446YmR6jV-c9llGM5B8/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD1003FZEX-00MK2A0_2026-08-15_11-08-08-942.txt",
      "DriveDxReport_WDC WD1003FZEX-00MK2A0_2026-08-15_11-07-03-804.txt"
    ]
  },
  {
    "id": "007",
    "brand": "WD",
    "model": "WDC WD2003FZEX-00Z4SA0",
    "capacity": "2.0 TB",
    "grade": "B",
    "gradeLabel": "B｜可用",
    "smartStatus": "正常",
    "hours": 1174,
    "powerCycle": 176,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 0,
    "retailPrice": 1150,
    "suggestedUse": "一般資料",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 96.6%，05／C5／C6 均為 0。通電 1174 小時，依使用時數列為 B｜可用。適合一般資料或次要用途，重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "23H0",
    "drivePhotoUrl": "https://drive.google.com/file/d/1MiARRHYuOkLC4jvY1YUoRpOUtVrRCnoq/view?usp=drivesdk",
    "drivePhotoName": "007.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1caWaNULSVi-8EpINEBsninVDtU1DJN2S/view?usp=drivesdk",
      "https://drive.google.com/file/d/15WOxV0KQk64nMyQdBJqCF9QPXde4LwSM/view?usp=drivesdk",
      "https://drive.google.com/file/d/1yk6eL6Ddvl_CiS1oUOeV9WxQvGJ586-s/view?usp=drivesdk",
      "https://drive.google.com/file/d/1lyLimFQbAkEGEIDbppryfObMT8jxyF2r/view?usp=drivesdk",
      "https://drive.google.com/file/d/15e4AUV-BvsQvH0HSPH285amixvq5pDhp/view?usp=drivesdk",
      "https://drive.google.com/file/d/1oRppcIHAIAglYxMxgmBhmimkx8aQS31y/view?usp=drivesdk",
      "https://drive.google.com/file/d/1wkVnJkdMd1zLGP0sY0QPK-IJGKWG2dY3/view?usp=drivesdk",
      "https://drive.google.com/file/d/1OrBozXZZB9RfmWdmRa0LWiff0Olvi8db/view?usp=drivesdk",
      "https://drive.google.com/file/d/1gVbtmgQuv2lviKStIm7bK6UiBdxhQtvh/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DnY4SOTASJ07m2_QSD2mtUgin0lWcGTz/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-09-23-331.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-04-25-169.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-03-08-626.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-01-47-955.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-57-40-181.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-56-05-470.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-52-41-551.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-46-32-001.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-44-39-605.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-30-24-260.txt"
    ]
  },
  {
    "id": "008",
    "brand": "WD",
    "model": "WDC WD2003FZEX-00Z4SA0",
    "capacity": "2.0 TB",
    "grade": "A",
    "gradeLabel": "A｜良好",
    "smartStatus": "正常",
    "hours": 764,
    "powerCycle": 169,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 0,
    "retailPrice": 1300,
    "suggestedUse": "剪輯／工作暫存",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 95.3%，Issues found 0；05／C5／C6／CRC 均為 0。依本次檢測列為 A｜良好，可作工作暫存或一般用途；重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "SSX6",
    "drivePhotoUrl": "https://drive.google.com/file/d/1Bo_dDuuL1F0UcyVdEIyaVU1LlJZ-OIkF/view?usp=drivesdk",
    "drivePhotoName": "008.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1caWaNULSVi-8EpINEBsninVDtU1DJN2S/view?usp=drivesdk",
      "https://drive.google.com/file/d/15WOxV0KQk64nMyQdBJqCF9QPXde4LwSM/view?usp=drivesdk",
      "https://drive.google.com/file/d/1yk6eL6Ddvl_CiS1oUOeV9WxQvGJ586-s/view?usp=drivesdk",
      "https://drive.google.com/file/d/1lyLimFQbAkEGEIDbppryfObMT8jxyF2r/view?usp=drivesdk",
      "https://drive.google.com/file/d/15e4AUV-BvsQvH0HSPH285amixvq5pDhp/view?usp=drivesdk",
      "https://drive.google.com/file/d/1oRppcIHAIAglYxMxgmBhmimkx8aQS31y/view?usp=drivesdk",
      "https://drive.google.com/file/d/1wkVnJkdMd1zLGP0sY0QPK-IJGKWG2dY3/view?usp=drivesdk",
      "https://drive.google.com/file/d/1OrBozXZZB9RfmWdmRa0LWiff0Olvi8db/view?usp=drivesdk",
      "https://drive.google.com/file/d/1gVbtmgQuv2lviKStIm7bK6UiBdxhQtvh/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DnY4SOTASJ07m2_QSD2mtUgin0lWcGTz/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-09-23-331.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-04-25-169.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-03-08-626.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-01-47-955.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-57-40-181.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-56-05-470.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-52-41-551.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-46-32-001.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-44-39-605.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-30-24-260.txt"
    ]
  },
  {
    "id": "009",
    "brand": "WD",
    "model": "WDC WD2003FZEX-00Z4SA0",
    "capacity": "2.0 TB",
    "grade": "B",
    "gradeLabel": "B｜可用",
    "smartStatus": "正常",
    "hours": 733,
    "powerCycle": 201,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 1,
    "retailPrice": 1100,
    "suggestedUse": "一般資料",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 96.6%，05／C5／C6 均為 0。CRC=1 為歷史傳輸錯誤記錄，應確認線材與外接盒後持續觀察。適合一般資料或次要用途，重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "3987",
    "drivePhotoUrl": "https://drive.google.com/file/d/1fvNOVXJj2kXd5F1UucVq5x2U88UajLhG/view?usp=drivesdk",
    "drivePhotoName": "009.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1caWaNULSVi-8EpINEBsninVDtU1DJN2S/view?usp=drivesdk",
      "https://drive.google.com/file/d/15WOxV0KQk64nMyQdBJqCF9QPXde4LwSM/view?usp=drivesdk",
      "https://drive.google.com/file/d/1yk6eL6Ddvl_CiS1oUOeV9WxQvGJ586-s/view?usp=drivesdk",
      "https://drive.google.com/file/d/1lyLimFQbAkEGEIDbppryfObMT8jxyF2r/view?usp=drivesdk",
      "https://drive.google.com/file/d/15e4AUV-BvsQvH0HSPH285amixvq5pDhp/view?usp=drivesdk",
      "https://drive.google.com/file/d/1oRppcIHAIAglYxMxgmBhmimkx8aQS31y/view?usp=drivesdk",
      "https://drive.google.com/file/d/1wkVnJkdMd1zLGP0sY0QPK-IJGKWG2dY3/view?usp=drivesdk",
      "https://drive.google.com/file/d/1OrBozXZZB9RfmWdmRa0LWiff0Olvi8db/view?usp=drivesdk",
      "https://drive.google.com/file/d/1gVbtmgQuv2lviKStIm7bK6UiBdxhQtvh/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DnY4SOTASJ07m2_QSD2mtUgin0lWcGTz/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-09-23-331.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-04-25-169.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-03-08-626.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-01-47-955.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-57-40-181.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-56-05-470.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-52-41-551.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-46-32-001.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-44-39-605.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-30-24-260.txt"
    ]
  },
  {
    "id": "010",
    "brand": "Toshiba",
    "model": "TOSHIBA MG04ACA300E",
    "capacity": "3.0 TB",
    "grade": "A",
    "gradeLabel": "A｜良好",
    "smartStatus": "正常",
    "hours": 362,
    "powerCycle": 61,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 0,
    "retailPrice": 1800,
    "suggestedUse": "剪輯／工作暫存",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 96.2%，Issues found 0；05／C5／C6／CRC 均為 0。依本次檢測列為 A｜良好，可作工作暫存或一般用途；重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "FJNA",
    "drivePhotoUrl": "https://drive.google.com/file/d/1Q6g2g2Z2aZnc0JdwqU87I4nfSMaifpYW/view?usp=drivesdk",
    "drivePhotoName": "010.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1QFzLRsHrmwBKkB-AA_KZfLoUsz4ibMaF/view?usp=drivesdk",
      "https://drive.google.com/file/d/1igVCZZoPJ_GH9G_S8B3IC2YeRUNZrkWR/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_TOSHIBA MG04ACA300E_2026-08-15_11-19-07-488.txt",
      "DriveDxReport_TOSHIBA MG04ACA300E_2026-08-15_10-59-41-572.txt"
    ]
  },
  {
    "id": "011",
    "brand": "WD",
    "model": "WDC WD2003FZEX-00Z4SA0",
    "capacity": "2.0 TB",
    "grade": "A",
    "gradeLabel": "A｜良好",
    "smartStatus": "正常",
    "hours": 399,
    "powerCycle": 112,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 0,
    "retailPrice": 1300,
    "suggestedUse": "剪輯／工作暫存",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 95.6%，Issues found 0；05／C5／C6／CRC 均為 0。依本次檢測列為 A｜良好，可作工作暫存或一般用途；重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "JKPS",
    "drivePhotoUrl": "https://drive.google.com/file/d/13p-xEQpISWb5yobI_gkqEv_jvHrM8RXt/view?usp=drivesdk",
    "drivePhotoName": "011.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1caWaNULSVi-8EpINEBsninVDtU1DJN2S/view?usp=drivesdk",
      "https://drive.google.com/file/d/15WOxV0KQk64nMyQdBJqCF9QPXde4LwSM/view?usp=drivesdk",
      "https://drive.google.com/file/d/1yk6eL6Ddvl_CiS1oUOeV9WxQvGJ586-s/view?usp=drivesdk",
      "https://drive.google.com/file/d/1lyLimFQbAkEGEIDbppryfObMT8jxyF2r/view?usp=drivesdk",
      "https://drive.google.com/file/d/15e4AUV-BvsQvH0HSPH285amixvq5pDhp/view?usp=drivesdk",
      "https://drive.google.com/file/d/1oRppcIHAIAglYxMxgmBhmimkx8aQS31y/view?usp=drivesdk",
      "https://drive.google.com/file/d/1wkVnJkdMd1zLGP0sY0QPK-IJGKWG2dY3/view?usp=drivesdk",
      "https://drive.google.com/file/d/1OrBozXZZB9RfmWdmRa0LWiff0Olvi8db/view?usp=drivesdk",
      "https://drive.google.com/file/d/1gVbtmgQuv2lviKStIm7bK6UiBdxhQtvh/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DnY4SOTASJ07m2_QSD2mtUgin0lWcGTz/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-09-23-331.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-04-25-169.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-03-08-626.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-01-47-955.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-57-40-181.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-56-05-470.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-52-41-551.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-46-32-001.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-44-39-605.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-30-24-260.txt"
    ]
  },
  {
    "id": "012",
    "brand": "WD",
    "model": "WDC WD2003FZEX-00Z4SA0",
    "capacity": "2.0 TB",
    "grade": "B",
    "gradeLabel": "B｜可用",
    "smartStatus": "正常",
    "hours": 647,
    "powerCycle": 99,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 4,
    "retailPrice": 1100,
    "suggestedUse": "一般資料",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 98.7%，05／C5／C6 均為 0。CRC=4 為歷史傳輸錯誤記錄，應確認線材與外接盒後持續觀察。適合一般資料或次要用途，重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "7LAD",
    "drivePhotoUrl": "https://drive.google.com/file/d/185ASbpV5T8X6sR5MFh--Aq1I9QRF5ApJ/view?usp=drivesdk",
    "drivePhotoName": "012.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1caWaNULSVi-8EpINEBsninVDtU1DJN2S/view?usp=drivesdk",
      "https://drive.google.com/file/d/15WOxV0KQk64nMyQdBJqCF9QPXde4LwSM/view?usp=drivesdk",
      "https://drive.google.com/file/d/1yk6eL6Ddvl_CiS1oUOeV9WxQvGJ586-s/view?usp=drivesdk",
      "https://drive.google.com/file/d/1lyLimFQbAkEGEIDbppryfObMT8jxyF2r/view?usp=drivesdk",
      "https://drive.google.com/file/d/15e4AUV-BvsQvH0HSPH285amixvq5pDhp/view?usp=drivesdk",
      "https://drive.google.com/file/d/1oRppcIHAIAglYxMxgmBhmimkx8aQS31y/view?usp=drivesdk",
      "https://drive.google.com/file/d/1wkVnJkdMd1zLGP0sY0QPK-IJGKWG2dY3/view?usp=drivesdk",
      "https://drive.google.com/file/d/1OrBozXZZB9RfmWdmRa0LWiff0Olvi8db/view?usp=drivesdk",
      "https://drive.google.com/file/d/1gVbtmgQuv2lviKStIm7bK6UiBdxhQtvh/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DnY4SOTASJ07m2_QSD2mtUgin0lWcGTz/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-09-23-331.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-04-25-169.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-03-08-626.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-01-47-955.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-57-40-181.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-56-05-470.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-52-41-551.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-46-32-001.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-44-39-605.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-30-24-260.txt"
    ]
  },
  {
    "id": "013",
    "brand": "WD",
    "model": "WDC WD2003FZEX-00Z4SA0",
    "capacity": "2.0 TB",
    "grade": "D",
    "gradeLabel": "D｜不建議使用",
    "smartStatus": "異常",
    "hours": 1115,
    "powerCycle": 173,
    "reallocated": 0,
    "pending": 1171,
    "offlineUncorrectable": 0,
    "crc": 3,
    "retailPrice": 100,
    "suggestedUse": "不建議使用",
    "notes": "DriveDx：Advanced SMART FAILING／Overall Health N/A 98.7%。關鍵值：05=0、C5=1171、C6=0、CRC=3。已列為不建議使用；若仍有資料應先移出，不可作唯一備份或重要用途。",
    "lastTested": "2026-08-15",
    "serialSuffix": "0LWX",
    "drivePhotoUrl": "https://drive.google.com/file/d/1fZVC-RIEusJveS6YWYRktgApWRHwhgUR/view?usp=drivesdk",
    "drivePhotoName": "013.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1caWaNULSVi-8EpINEBsninVDtU1DJN2S/view?usp=drivesdk",
      "https://drive.google.com/file/d/15WOxV0KQk64nMyQdBJqCF9QPXde4LwSM/view?usp=drivesdk",
      "https://drive.google.com/file/d/1yk6eL6Ddvl_CiS1oUOeV9WxQvGJ586-s/view?usp=drivesdk",
      "https://drive.google.com/file/d/1lyLimFQbAkEGEIDbppryfObMT8jxyF2r/view?usp=drivesdk",
      "https://drive.google.com/file/d/15e4AUV-BvsQvH0HSPH285amixvq5pDhp/view?usp=drivesdk",
      "https://drive.google.com/file/d/1oRppcIHAIAglYxMxgmBhmimkx8aQS31y/view?usp=drivesdk",
      "https://drive.google.com/file/d/1wkVnJkdMd1zLGP0sY0QPK-IJGKWG2dY3/view?usp=drivesdk",
      "https://drive.google.com/file/d/1OrBozXZZB9RfmWdmRa0LWiff0Olvi8db/view?usp=drivesdk",
      "https://drive.google.com/file/d/1gVbtmgQuv2lviKStIm7bK6UiBdxhQtvh/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DnY4SOTASJ07m2_QSD2mtUgin0lWcGTz/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-09-23-331.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-04-25-169.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-03-08-626.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-01-47-955.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-57-40-181.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-56-05-470.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-52-41-551.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-46-32-001.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-44-39-605.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-30-24-260.txt"
    ]
  },
  {
    "id": "014",
    "brand": "WD",
    "model": "WDC WD1002FAEX-00Z3A0",
    "capacity": "1.0 TB",
    "grade": "B",
    "gradeLabel": "B｜可用",
    "smartStatus": "正常",
    "hours": 480,
    "powerCycle": 124,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 2,
    "retailPrice": 650,
    "suggestedUse": "一般資料",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 98.1%，05／C5／C6 均為 0。CRC=2 為歷史傳輸錯誤記錄，應確認線材與外接盒後持續觀察。適合一般資料或次要用途，重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "3896",
    "drivePhotoUrl": "https://drive.google.com/file/d/1JrvME9eBfUAn5O5FqWRgriL_TmV1ArG0/view?usp=drivesdk",
    "drivePhotoName": "014.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1KPn5Eb4kfNPE31-TkVDZCIkhdyhfkh9Z/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Dpe66eL9ig9W3erFaxacNscHZaca6PYd/view?usp=drivesdk",
      "https://drive.google.com/file/d/1me7RmLX1XlF0qjcKYHngm5e0iTWutnwD/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD1002FAEX-00Z3A0_2026-08-15_11-10-55-832.txt",
      "DriveDxReport_WDC WD1002FAEX-00Z3A0_2026-08-15_10-54-32-143.txt",
      "DriveDxReport_WDC WD1002FAEX-00Z3A0_2026-08-15_10-48-51-802.txt"
    ]
  },
  {
    "id": "015",
    "brand": "WD",
    "model": "WDC WD1002FAEX-00Z3A0",
    "capacity": "1.0 TB",
    "grade": "C",
    "gradeLabel": "C｜需注意",
    "smartStatus": "注意",
    "hours": 118,
    "powerCycle": 43,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 43,
    "retailPrice": 350,
    "suggestedUse": "待整理",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 98.1%，但列出 1 項警告；CRC=43。建議先檢查線材、外接盒與介面並重新檢測，完成完整讀寫測試後再決定用途。",
    "lastTested": "2026-08-15",
    "serialSuffix": "4657",
    "drivePhotoUrl": "https://drive.google.com/file/d/1TlUgGQQTF9uYr-UdD-sOvLCj7x8QZ5sC/view?usp=drivesdk",
    "drivePhotoName": "015.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1KPn5Eb4kfNPE31-TkVDZCIkhdyhfkh9Z/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Dpe66eL9ig9W3erFaxacNscHZaca6PYd/view?usp=drivesdk",
      "https://drive.google.com/file/d/1me7RmLX1XlF0qjcKYHngm5e0iTWutnwD/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD1002FAEX-00Z3A0_2026-08-15_11-10-55-832.txt",
      "DriveDxReport_WDC WD1002FAEX-00Z3A0_2026-08-15_10-54-32-143.txt",
      "DriveDxReport_WDC WD1002FAEX-00Z3A0_2026-08-15_10-48-51-802.txt"
    ]
  },
  {
    "id": "016",
    "brand": "WD",
    "model": "WDC WD2003FZEX-00Z4SA0",
    "capacity": "2.0 TB",
    "grade": "A",
    "gradeLabel": "A｜良好",
    "smartStatus": "正常",
    "hours": 883,
    "powerCycle": 59,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 0,
    "retailPrice": 1300,
    "suggestedUse": "剪輯／工作暫存",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 95.3%，Issues found 0；05／C5／C6／CRC 均為 0。依本次檢測列為 A｜良好，可作工作暫存或一般用途；重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "YRJA",
    "drivePhotoUrl": "https://drive.google.com/file/d/1hJ8USt9yL5c8geoQ31zr4HDnv7F8ydiQ/view?usp=drivesdk",
    "drivePhotoName": "016.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1caWaNULSVi-8EpINEBsninVDtU1DJN2S/view?usp=drivesdk",
      "https://drive.google.com/file/d/15WOxV0KQk64nMyQdBJqCF9QPXde4LwSM/view?usp=drivesdk",
      "https://drive.google.com/file/d/1yk6eL6Ddvl_CiS1oUOeV9WxQvGJ586-s/view?usp=drivesdk",
      "https://drive.google.com/file/d/1lyLimFQbAkEGEIDbppryfObMT8jxyF2r/view?usp=drivesdk",
      "https://drive.google.com/file/d/15e4AUV-BvsQvH0HSPH285amixvq5pDhp/view?usp=drivesdk",
      "https://drive.google.com/file/d/1oRppcIHAIAglYxMxgmBhmimkx8aQS31y/view?usp=drivesdk",
      "https://drive.google.com/file/d/1wkVnJkdMd1zLGP0sY0QPK-IJGKWG2dY3/view?usp=drivesdk",
      "https://drive.google.com/file/d/1OrBozXZZB9RfmWdmRa0LWiff0Olvi8db/view?usp=drivesdk",
      "https://drive.google.com/file/d/1gVbtmgQuv2lviKStIm7bK6UiBdxhQtvh/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DnY4SOTASJ07m2_QSD2mtUgin0lWcGTz/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-09-23-331.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-04-25-169.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-03-08-626.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-01-47-955.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-57-40-181.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-56-05-470.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-52-41-551.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-46-32-001.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-44-39-605.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-30-24-260.txt"
    ]
  },
  {
    "id": "017",
    "brand": "WD",
    "model": "WDC WD2003FZEX-00Z4SA0",
    "capacity": "2.0 TB",
    "grade": "C",
    "gradeLabel": "C｜需注意",
    "smartStatus": "注意",
    "hours": 591,
    "powerCycle": 136,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 44,
    "retailPrice": 600,
    "suggestedUse": "待整理",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 99.3%，但列出 1 項警告；CRC=44。建議先檢查線材、外接盒與介面並重新檢測，完成完整讀寫測試後再決定用途。",
    "lastTested": "2026-08-15",
    "serialSuffix": "UDL8",
    "drivePhotoUrl": "https://drive.google.com/file/d/18VMPn24SYzq5h2YU3wK8ukWBo-tXzbXl/view?usp=drivesdk",
    "drivePhotoName": "017.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1caWaNULSVi-8EpINEBsninVDtU1DJN2S/view?usp=drivesdk",
      "https://drive.google.com/file/d/15WOxV0KQk64nMyQdBJqCF9QPXde4LwSM/view?usp=drivesdk",
      "https://drive.google.com/file/d/1yk6eL6Ddvl_CiS1oUOeV9WxQvGJ586-s/view?usp=drivesdk",
      "https://drive.google.com/file/d/1lyLimFQbAkEGEIDbppryfObMT8jxyF2r/view?usp=drivesdk",
      "https://drive.google.com/file/d/15e4AUV-BvsQvH0HSPH285amixvq5pDhp/view?usp=drivesdk",
      "https://drive.google.com/file/d/1oRppcIHAIAglYxMxgmBhmimkx8aQS31y/view?usp=drivesdk",
      "https://drive.google.com/file/d/1wkVnJkdMd1zLGP0sY0QPK-IJGKWG2dY3/view?usp=drivesdk",
      "https://drive.google.com/file/d/1OrBozXZZB9RfmWdmRa0LWiff0Olvi8db/view?usp=drivesdk",
      "https://drive.google.com/file/d/1gVbtmgQuv2lviKStIm7bK6UiBdxhQtvh/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DnY4SOTASJ07m2_QSD2mtUgin0lWcGTz/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-09-23-331.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-04-25-169.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-03-08-626.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-01-47-955.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-57-40-181.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-56-05-470.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-52-41-551.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-46-32-001.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-44-39-605.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-30-24-260.txt"
    ]
  },
  {
    "id": "018",
    "brand": "WD",
    "model": "WDC WD2003FZEX-00Z4SA0",
    "capacity": "2.0 TB",
    "grade": "A",
    "gradeLabel": "A｜良好",
    "smartStatus": "正常",
    "hours": 745,
    "powerCycle": 120,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 0,
    "retailPrice": 1300,
    "suggestedUse": "剪輯／工作暫存",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 98.7%，Issues found 0；05／C5／C6／CRC 均為 0。依本次檢測列為 A｜良好，可作工作暫存或一般用途；重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "2Y9Y",
    "drivePhotoUrl": "https://drive.google.com/file/d/1LioHZm5ZA2oMSUSql624y6NKCltRaJsN/view?usp=drivesdk",
    "drivePhotoName": "018.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1caWaNULSVi-8EpINEBsninVDtU1DJN2S/view?usp=drivesdk",
      "https://drive.google.com/file/d/15WOxV0KQk64nMyQdBJqCF9QPXde4LwSM/view?usp=drivesdk",
      "https://drive.google.com/file/d/1yk6eL6Ddvl_CiS1oUOeV9WxQvGJ586-s/view?usp=drivesdk",
      "https://drive.google.com/file/d/1lyLimFQbAkEGEIDbppryfObMT8jxyF2r/view?usp=drivesdk",
      "https://drive.google.com/file/d/15e4AUV-BvsQvH0HSPH285amixvq5pDhp/view?usp=drivesdk",
      "https://drive.google.com/file/d/1oRppcIHAIAglYxMxgmBhmimkx8aQS31y/view?usp=drivesdk",
      "https://drive.google.com/file/d/1wkVnJkdMd1zLGP0sY0QPK-IJGKWG2dY3/view?usp=drivesdk",
      "https://drive.google.com/file/d/1OrBozXZZB9RfmWdmRa0LWiff0Olvi8db/view?usp=drivesdk",
      "https://drive.google.com/file/d/1gVbtmgQuv2lviKStIm7bK6UiBdxhQtvh/view?usp=drivesdk",
      "https://drive.google.com/file/d/1DnY4SOTASJ07m2_QSD2mtUgin0lWcGTz/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-09-23-331.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-04-25-169.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-03-08-626.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-01-47-955.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-57-40-181.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-56-05-470.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-52-41-551.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-46-32-001.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-44-39-605.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-30-24-260.txt"
    ]
  },
  {
    "id": "019",
    "brand": "WD",
    "model": "WDC WD2003FZEX-00Z4SA0",
    "capacity": "2.0 TB",
    "grade": "B",
    "gradeLabel": "B｜可用",
    "smartStatus": "正常",
    "hours": 474,
    "powerCycle": 140,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 1,
    "retailPrice": 1100,
    "suggestedUse": "一般資料",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 97.6%，Issues found 0；05／C5／C6 均為 0，CRC=1 為歷史傳輸錯誤記錄。建議確認線材、外接盒與介面後持續觀察；可作一般資料或次要用途，重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "SXRN",
    "drivePhotoUrl": "https://drive.google.com/file/d/1T8TsMUfWEkn82II0FabJRsQZgM0gngSC/view?usp=drivesdk",
    "drivePhotoName": "019.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1aK1QDgLzY5dqm3h9CQTgKk2GuRAW6LUB/view?usp=drivesdk",
      "https://drive.google.com/file/d/1w5fIsMTrLs8u3Dfzoeu0guYVMlt_GKwp/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_20-42-13-278.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_15-39-47-197.txt"
    ]
  },
  {
    "id": "020",
    "brand": "WD",
    "model": "WDC WD2003FZEX-00Z4SA0",
    "capacity": "2.0 TB",
    "grade": "B",
    "gradeLabel": "B｜可用",
    "smartStatus": "正常",
    "hours": 114,
    "powerCycle": 37,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 1,
    "retailPrice": 1100,
    "suggestedUse": "一般資料",
    "notes": "DriveDx：SMART OK／Overall Health GOOD 98.7%，Issues found 0；05／C5／C6 均為 0，CRC=1 為歷史傳輸錯誤記錄。建議確認線材、外接盒與介面後持續觀察；可作一般資料或次要用途，重要資料仍需另有備份。",
    "lastTested": "2026-08-15",
    "serialSuffix": "E2M0",
    "drivePhotoUrl": "https://drive.google.com/file/d/1KDLgvq9Ywg-D3M8XSLtfH5PaMsJK7Aya/view?usp=drivesdk",
    "drivePhotoName": "020.png",
    "driveReportUrls": [
      "https://drive.google.com/file/d/1VwHoklcFdeSzsoFsb4os0LDQAYD1V_KB/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_15-33-17-610.txt"
    ]
  },
  {
    "id": "021",
    "brand": "WD",
    "model": "WDC WD1002FAEX-00Z3A0",
    "capacity": "1.0 TB",
    "grade": "C",
    "gradeLabel": "C｜需注意",
    "smartStatus": "注意",
    "hours": 515,
    "powerCycle": 44,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 1,
    "crc": 0,
    "retailPrice": 350,
    "suggestedUse": "待整理",
    "notes": "清理流程 PASS。smartctl SMART 自我評估 PASSED，短測試完成且無錯誤；05=0、C5=0、C6=1、CRC=0。C6 Offline Uncorrectable=1，列為 C｜需注意，待補 DriveDx AFTER 報告與複測後再決定用途。",
    "lastTested": "2026-08-17",
    "serialSuffix": "5539",
    "drivePhotoUrl": "https://drive.google.com/file/d/1NWTMg9xMwPaLyh7zQUQk4SANoxIaaY1D/view?usp=drivesdk",
    "drivePhotoName": "021 SMART.png",
    "driveReportUrls": [],
    "driveReportNames": []
  },
  {
    "id": "022",
    "brand": "WD",
    "model": "WDC WD1003FZEX-00MK2A0",
    "capacity": "1.0 TB",
    "grade": "A",
    "gradeLabel": "A｜良好",
    "smartStatus": "正常",
    "hours": 173,
    "powerCycle": 23,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 0,
    "retailPrice": 900,
    "suggestedUse": "剪輯／工作暫存",
    "notes": "清理流程 PASS。smartctl SMART overall-health PASSED；05／C5／C6／CRC 均為 0，無錯誤紀錄。通電 173 小時、Power Cycle 23 次，列為 A｜良好，可作工作暫存或一般用途；重要資料仍需另有備份。",
    "lastTested": "2026-08-17",
    "serialSuffix": "0LJ5",
    "drivePhotoUrl": null,
    "drivePhotoName": null,
    "driveReportUrls": [
      "https://drive.google.com/file/d/1umb53hIuDsaRttaUjY7gmAXdpOaGLvtJ/view?usp=drivesdk",
      "https://drive.google.com/file/d/18quv3s_qvHb-ThyaXK96f_9pi-nhCB6N/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "022_SMART_AFTER.txt",
      "022_SUMMARY.txt"
    ]
  },
  {
    "id": "023",
    "brand": "WD",
    "model": "WDC WD1002FAEX-00Z3A0",
    "capacity": "1.0 TB",
    "grade": "D",
    "gradeLabel": "D｜不建議使用",
    "smartStatus": "異常",
    "hours": 1042,
    "powerCycle": 145,
    "reallocated": 0,
    "pending": 100,
    "offlineUncorrectable": 100,
    "crc": 1,
    "retailPrice": 100,
    "suggestedUse": "不建議使用",
    "notes": "SMART_BEFORE：SMART overall-health PASSED，但 05=0、C5/197=100、C6/198=100、CRC/199=1，列為 D｜不建議使用。清理流程結果 FAIL；SMART AFTER 在目前外接盒無法讀取（SMART PENDING／SMART Status Not Supported）。需更換相容外接盒重新檢測，暫不列入詢價。",
    "lastTested": "2026-08-18",
    "serialSuffix": "0832",
    "drivePhotoUrl": null,
    "drivePhotoName": null,
    "driveReportUrls": [
      "https://drive.google.com/file/d/12Plh6Wle87khLSdUYsvKiZMTLKyt0tlz/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AQQ0Z8Qqqm5Q2ZcSIbH3Uo2C4advezbv/view?usp=drivesdk",
      "https://drive.google.com/file/d/1BnzaZEyQH5W_07kCflfDNXo8YV5xjwRO/view?usp=drivesdk",
      "https://drive.google.com/file/d/1uF7jIvy0cBd1QKjPWxl7OHo0mW9jgzxZ/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "023_SMART_BEFORE.txt",
      "023_SMART_AFTER.txt",
      "023_SUMMARY.txt",
      "023_diskutil_AFTER.txt"
    ]
  },
  {
    "id": "024",
    "brand": "WD",
    "model": "WDC WD1003FZEX-00MK2A0",
    "capacity": "1.0 TB",
    "grade": "A",
    "gradeLabel": "A｜良好",
    "smartStatus": "正常",
    "hours": 568,
    "powerCycle": 69,
    "reallocated": 0,
    "pending": 0,
    "offlineUncorrectable": 0,
    "crc": 0,
    "retailPrice": 900,
    "suggestedUse": "剪輯／工作暫存",
    "notes": "清理流程 PASS。SMART AFTER overall-health PASSED；05／C5／C6／CRC 均為 0，SMART Error Log 顯示 No Errors Logged。通電 568 小時、Power Cycle 69 次，列為 A｜良好，可作工作暫存或一般用途；重要資料仍需另有備份。diskutil AFTER 在目前外接盒顯示 SMART Status Not Supported，但 smartctl AFTER 已成功讀取 SMART，並以該報告作為本次健康判定依據。",
    "lastTested": "2026-08-18",
    "serialSuffix": "8965",
    "drivePhotoUrl": null,
    "drivePhotoName": null,
    "driveReportUrls": [
      "https://drive.google.com/file/d/17QxcL0pCGpGb7wrWTEH3RAPbemWQtBy3/view?usp=drivesdk",
      "https://drive.google.com/file/d/1r8gcUcSnobW7325WnM2sH5LntCvMM3bO/view?usp=drivesdk",
      "https://drive.google.com/file/d/1GXQzdBAV4hUCO0bdWeNTV7twe-jP1dsb/view?usp=drivesdk",
      "https://drive.google.com/file/d/1VEL7lkiwXpA97pzeCBBUMUgsDKwU_GzA/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "024_SMART_BEFORE.txt",
      "024_SMART_AFTER.txt",
      "024_SUMMARY.txt",
      "024_diskutil_AFTER.txt"
    ]
  }
];

const driveEvidenceById: Record<string, Pick<CatalogRecord, "driveReportUrls" | "driveReportNames">> = {
  "001": {
    "driveReportUrls": [
      "https://drive.google.com/file/d/1CXhZyThXLOwu12zpmMtuy3PvsMdSuhgQ/view?usp=drivesdk",
      "https://drive.google.com/file/d/1WFZKwN2bITRDpiZ9Hgj-yzfc_p2G2YIM/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2002FAEX-007BA0_2026-08-15_11-22-29-281.txt",
      "DriveDxReport_WDC WD2002FAEX-007BA0_2026-08-15_11-13-25-875.txt"
    ]
  },
  "002": {
    "driveReportUrls": ["https://drive.google.com/file/d/1caWaNULSVi-8EpINEBsninVDtU1DJN2S/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-09-23-331.txt"]
  },
  "003": {
    "driveReportUrls": ["https://drive.google.com/file/d/1KPn5Eb4kfNPE31-TkVDZCIkhdyhfkh9Z/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD1002FAEX-00Z3A0_2026-08-15_11-10-55-832.txt"]
  },
  "004": {
    "driveReportUrls": ["https://drive.google.com/file/d/11fn5RNmfT3NTlv2sYQ2-T82z8NdmGmH1/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD1003FZEX-00MK2A0_2026-08-15_11-08-08-942.txt"]
  },
  "005": {
    "driveReportUrls": ["https://drive.google.com/file/d/1kpzEnOXcyKdC929i3H7MWRwwK8BgJ69z/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD2000F9YZ-09N20L0_2026-08-15_11-05-53-569.txt"]
  },
  "006": {
    "driveReportUrls": ["https://drive.google.com/file/d/1-ihfplaWdCEte446YmR6jV-c9llGM5B8/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD1003FZEX-00MK2A0_2026-08-15_11-07-03-804.txt"]
  },
  "007": {
    "driveReportUrls": ["https://drive.google.com/file/d/1lyLimFQbAkEGEIDbppryfObMT8jxyF2r/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-01-47-955.txt"]
  },
  "008": {
    "driveReportUrls": ["https://drive.google.com/file/d/1yk6eL6Ddvl_CiS1oUOeV9WxQvGJ586-s/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-03-08-626.txt"]
  },
  "009": {
    "driveReportUrls": ["https://drive.google.com/file/d/15WOxV0KQk64nMyQdBJqCF9QPXde4LwSM/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_11-04-25-169.txt"]
  },
  "010": {
    "driveReportUrls": [
      "https://drive.google.com/file/d/1igVCZZoPJ_GH9G_S8B3IC2YeRUNZrkWR/view?usp=drivesdk",
      "https://drive.google.com/file/d/1QFzLRsHrmwBKkB-AA_KZfLoUsz4ibMaF/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_TOSHIBA MG04ACA300E_2026-08-15_10-59-41-572.txt",
      "DriveDxReport_TOSHIBA MG04ACA300E_2026-08-15_11-19-07-488.txt"
    ]
  },
  "011": {
    "driveReportUrls": ["https://drive.google.com/file/d/1oRppcIHAIAglYxMxgmBhmimkx8aQS31y/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-56-05-470.txt"]
  },
  "012": {
    "driveReportUrls": ["https://drive.google.com/file/d/15e4AUV-BvsQvH0HSPH285amixvq5pDhp/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-57-40-181.txt"]
  },
  "013": {
    "driveReportUrls": ["https://drive.google.com/file/d/1wkVnJkdMd1zLGP0sY0QPK-IJGKWG2dY3/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-52-41-551.txt"]
  },
  "014": {
    "driveReportUrls": ["https://drive.google.com/file/d/1Dpe66eL9ig9W3erFaxacNscHZaca6PYd/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD1002FAEX-00Z3A0_2026-08-15_10-54-32-143.txt"]
  },
  "015": {
    "driveReportUrls": ["https://drive.google.com/file/d/1me7RmLX1XlF0qjcKYHngm5e0iTWutnwD/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD1002FAEX-00Z3A0_2026-08-15_10-48-51-802.txt"]
  },
  "016": {
    "driveReportUrls": ["https://drive.google.com/file/d/1DnY4SOTASJ07m2_QSD2mtUgin0lWcGTz/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-30-24-260.txt"]
  },
  "017": {
    "driveReportUrls": ["https://drive.google.com/file/d/1gVbtmgQuv2lviKStIm7bK6UiBdxhQtvh/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-44-39-605.txt"]
  },
  "018": {
    "driveReportUrls": ["https://drive.google.com/file/d/1OrBozXZZB9RfmWdmRa0LWiff0Olvi8db/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_10-46-32-001.txt"]
  },
  "019": {
    "driveReportUrls": [
      "https://drive.google.com/file/d/1aK1QDgLzY5dqm3h9CQTgKk2GuRAW6LUB/view?usp=drivesdk",
      "https://drive.google.com/file/d/1w5fIsMTrLs8u3Dfzoeu0guYVMlt_GKwp/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_20-42-13-278.txt",
      "DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_15-39-47-197.txt"
    ]
  },
  "020": {
    "driveReportUrls": ["https://drive.google.com/file/d/1VwHoklcFdeSzsoFsb4os0LDQAYD1V_KB/view?usp=drivesdk"],
    "driveReportNames": ["DriveDxReport_WDC WD2003FZEX-00Z4SA0_2026-08-15_15-33-17-610.txt"]
  },
  "021": {
    "driveReportUrls": [],
    "driveReportNames": []
  },
  "022": {
    "driveReportUrls": [
      "https://drive.google.com/file/d/1umb53hIuDsaRttaUjY7gmAXdpOaGLvtJ/view?usp=drivesdk",
      "https://drive.google.com/file/d/18quv3s_qvHb-ThyaXK96f_9pi-nhCB6N/view?usp=drivesdk"
    ],
    "driveReportNames": ["022_SMART_AFTER.txt", "022_SUMMARY.txt"]
  },
  "023": {
    "driveReportUrls": [
      "https://drive.google.com/file/d/12Plh6Wle87khLSdUYsvKiZMTLKyt0tlz/view?usp=drivesdk",
      "https://drive.google.com/file/d/1AQQ0Z8Qqqm5Q2ZcSIbH3Uo2C4advezbv/view?usp=drivesdk",
      "https://drive.google.com/file/d/1BnzaZEyQH5W_07kCflfDNXo8YV5xjwRO/view?usp=drivesdk",
      "https://drive.google.com/file/d/1uF7jIvy0cBd1QKjPWxl7OHo0mW9jgzxZ/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "023_SMART_BEFORE.txt",
      "023_SMART_AFTER.txt",
      "023_SUMMARY.txt",
      "023_diskutil_AFTER.txt"
    ]
  },
  "024": {
    "driveReportUrls": [
      "https://drive.google.com/file/d/17QxcL0pCGpGb7wrWTEH3RAPbemWQtBy3/view?usp=drivesdk",
      "https://drive.google.com/file/d/1r8gcUcSnobW7325WnM2sH5LntCvMM3bO/view?usp=drivesdk",
      "https://drive.google.com/file/d/1GXQzdBAV4hUCO0bdWeNTV7twe-jP1dsb/view?usp=drivesdk",
      "https://drive.google.com/file/d/1VEL7lkiwXpA97pzeCBBUMUgsDKwU_GzA/view?usp=drivesdk"
    ],
    "driveReportNames": [
      "024_SMART_BEFORE.txt",
      "024_SMART_AFTER.txt",
      "024_SUMMARY.txt",
      "024_diskutil_AFTER.txt"
    ]
  }
};

export const catalogRecords: CatalogRecord[] = catalogRecordsSeed.map((record) => {
  const evidence = driveEvidenceById[record.id];
  return evidence ? { ...record, ...evidence } : record;
});
