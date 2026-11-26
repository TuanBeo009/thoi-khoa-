
/*
 * script.js — Thời khóa biểu 12A6, 12A7, 12A8
 * Dùng với một phần tử <div id="schedule"></div>.
 */
(() => {
  "use strict";

  const title =
    "THỜI KHÓA BIỂU HỌC KỲ 1 - TRUNG TÂM GDNN - GDTX KHU VỰC TRẢNG BÀNG - PHÂN HIỆU GÒ DẦU - NĂM HỌC 2026-2027";

  const applied = "Áp dụng từ: 16/11/2026 - Tuần 11";

  const days = [
    "THỨ HAI", "THỨ BA", "THỨ TƯ",
    "THỨ NĂM", "THỨ SÁU", "THỨ BẢY",
    "CHỦ NHẬT"
  ];

  const times = [
    "7g00-7g45",
    "7g45-8g30",
    "8g45-9g30",
    "9g30-10g15",
    "10g15-11g00",
    "13g00-13g45",
    "13g45-14g30",
    "14g45-15g30",
    "15g30-16g15",
    "16g15-17g00"
  ];

  // DỮ LIỆU THỜI KHÓA BIỂU
  const schedules = [
    {
      className: "12A6",
      data: {
        "THỨ HAI": [
          "SHDC", "HĐTN - T Tri", "HĐTN - T Tri",
          "BD Toán - T Tú", "BD Toán - T Tú",
          "Văn - T Thắng", "Văn - T Thắng",
          "Tin - T Thành", "Tin - T Thành", ""
        ],

        "THỨ BA": [
          "Sử - T Tiến", "Sử - T Tiến", "Sử - T Tiến",
          "HĐTN - T Tri", "",
          "Văn - T Thắng", "Văn - T Thắng",
          "Hoá - T Hồ", "Hoá - T Hồ", ""
        ],

        "THỨ TƯ": [
          "Sinh - T Thịnh", "Sinh - T Thịnh",
          "BD Địa - C Hoài", "BD Địa - C Hoài",
          "SHCN - C Hoài",
          "BD Sử - T Tiến", "BD Sử - T Tiến",
          "Toán - T Tú", "Toán - T Tú", "Toán - T Tú"
        ],

        "THỨ NĂM": [
          "", "", "", "", "",
          "Địa - C Hoài", "Địa - C Hoài",
          "Địa - C Hoài", "BD Văn - T Thắng",
          "BD Văn - T Thắng"
        ],

        "THỨ SÁU": ["", "", "", "", "", "", "", "", "", ""],
        "THỨ BẢY": ["", "", "", "", "", "", "", "", "", ""],
        "CHỦ NHẬT": ["", "", "", "", "", "", "", "", "", ""]
      }
    },

    {
      className: "12A7",
      data: {
        "THỨ HAI": [
          "SHDC", "BD Sử - T Thắng", "BD Sử - T Thắng",
          "Văn - C Đào", "Văn - C Đào",
          "Toán - T Phúc", "Toán - T Phúc",
          "Toán - T Phúc", "", ""
        ],

        "THỨ BA": [
          "SHCN - T Tri", "Vật lí - T Giàu",
          "BD Toán - T Phúc", "BD Toán - T Phúc", "",
          "BD Địa - C Hoài", "BD Địa - C Hoài",
          "Địa - C Hoài", "Tin - T Thành", "Tin - T Thành"
        ],

        "THỨ TƯ": [
          "HĐTN - T Tri", "HĐTN - T Tri", "HĐTN - T Tri",
          "GDKT&PL - C Thoa", "GDKT&PL - C Thoa",
          "Địa - C Hoài", "Địa - C Hoài",
          "Vật lí - T Giàu", "BD Văn - C Đào",
          "BD Văn - C Đào"
        ],

        "THỨ NĂM": [
          "", "", "", "", "",
          "Sử - T Thắng", "Sử - T Thắng",
          "Sử - T Thắng", "Văn - C Đào", "Văn - C Đào"
        ],

        "THỨ SÁU": [
          "", "", "", "", "",
          "Tin - T Thành (Bù)", "Tin - T Thành (Bù)",
          "", "", ""
        ],

        "THỨ BẢY": ["", "", "", "", "", "", "", "", "", ""],
        "CHỦ NHẬT": ["", "", "", "", "", "", "", "", "", ""]
      }
    },

    {
      className: "12A8",
      data: {
        "THỨ HAI": [
          "SHDC", "Văn - C Đào", "Văn - C Đào",
          "HĐTN - T Tri", "",
          "SHCN - T Thành", "Tin - T Thành",
          "GDKT&PL - C Thoa", "", ""
        ],

        "THỨ BA": [
          "", "HĐTN - T Tri", "HĐTN - T Tri",
          "BD Sử - T Tiến", "BD Sử - T Tiến",
          "Toán - T Phương", "Toán - T Phương",
          "Toán - T Phương", "BD Văn - C Đào",
          "BD Văn - C Đào"
        ],

        "THỨ TƯ": [
          "Địa - C Hoài", "Địa - C Hoài",
          "GDKT&PL - C Thoa", "", "",
          "", "", "Sử - T Tiến",
          "Sử - T Tiến", "Sử - T Tiến"
        ],

        "THỨ NĂM": [
          "", "", "", "", "",
          "Tin - T Thành", "Văn - C Đào",
          "Văn - C Đào", "BD Toán - T Phương",
          "BD Toán - T Phương"
        ],

        "THỨ SÁU": ["", "", "", "", "", "", "", "", "", ""],

        "THỨ BẢY": [
          "", "", "", "", "",
          "Địa - C Hoài", "BD Địa - C Hoài",
          "BD Địa - C Hoài", "Vật lí - T Giàu",
          "Vật lí - T Giàu"
        ],

        "CHỦ NHẬT": ["", "", "", "", "", "", "", "", "", ""]
      }
    }
  ];

  // ĐỊNH DẠNG GIAO DIỆN
  const style = document.createElement("style");

  style.textContent = `
    #schedule, .timetable-page {
      width: 100%;
      color: #111;
      font-family: "Times New Roman", serif;
    }

    .timetable-page {
      box-sizing: border-box;
    }

    .timetable-title {
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      margin: 4px 0 2px;
    }

    .timetable-date {
      text-align: center;
      font-weight: bold;
      font-size: 14px;
      margin: 0 0 8px;
    }

    .timetable {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      margin: 0 0 2px;
    }

    .timetable th,
    .timetable td {
      border: 1px solid #111;
      text-align: center;
      vertical-align: middle;
      padding: 2px 3px;
      font-size: 13px;
      line-height: 1.15;
      overflow-wrap: anywhere;
    }

    .timetable thead th {
      background: #dedede;
      font-weight: bold;
      height: 20px;
    }

    .timetable .col-class {
      width: 4%;
    }

    .timetable .col-session {
      width: 7%;
    }

    .timetable .col-period {
      width: 3%;
    }

    .timetable .col-time {
      width: 7%;
    }

    .timetable .col-day {
      width: 11.285%;
    }

    .timetable .class-name,
    .timetable .session-name {
      font-weight: bold;
    }

    .timetable .class-name {
      font-size: 13px;
    }

    .timetable .session-name {
      font-size: 13px;
    }

    .timetable tbody tr {
      height: 20px;
    }

    .timetable .period-cell {
      width: 3%;
    }

    .timetable .time-cell {
      white-space: nowrap;
    }

    .timetable .no-school {
      background: #fff000;
    }

    @media print {
      @page {
        size: A4 landscape;
        margin: 7mm;
      }

      .timetable-title {
        font-size: 14px;
      }

      .timetable-date {
        font-size: 12px;
      }

      .timetable th,
      .timetable td {
        font-size: 10px;
        padding: 1px 2px;
      }

      .timetable tbody tr {
        height: 17px;
      }

      .timetable {
        page-break-inside: avoid;
      }
    }
  `;

  document.head.appendChild(style);

  // TẠO VÙNG HIỂN THỊ
  let root = document.querySelector("#schedule");

  if (!root) {
    root = document.createElement("div");
    root.id = "schedule";
    document.body.appendChild(root);
  }

  // CHỐNG LỖI KHI HIỂN THỊ KÝ TỰ HTML
  const escapeHTML = value =>
    String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);

  // TÔ MÀU CÁC Ô NGHỈ
  function isYellowCell(className, day, period) {
    if (day === "CHỦ NHẬT") return true;

    if (className === "12A6" && day === "THỨ BẢY") {
      return true;
    }

    if (
      period < 5 &&
      (day === "THỨ NĂM" || day === "THỨ BẢY")
    ) {
      return true;
    }

    return false;
  }

  // TẠO BẢNG CHO TỪNG LỚP
  function renderClass(item) {
    let html = `
      <table class="timetable"
        aria-label="Thời khóa biểu ${escapeHTML(item.className)}">

        <colgroup>
          <col class="col-class">
          <col class="col-session">
          <col class="col-period">
          <col class="col-time">
          ${days.map(() => '<col class="col-day">').join("")}
        </colgroup>

        <thead>
          <tr>
            <th>LỚP</th>
            <th>BUỔI</th>
            <th>TIẾT</th>
            <th>Thời gian</th>

            ${days.map(day => `
              <th class="${day === "CHỦ NHẬT" ? "no-school" : ""}">
                ${day}
              </th>
            `).join("")}
          </tr>
        </thead>

        <tbody>
    `;

    for (let period = 0; period < 10; period++) {
      const morning = period < 5;

      html += "<tr>";

      if (period === 0) {
        html += `
          <td class="class-name" rowspan="10">
            ${escapeHTML(item.className)}
          </td>
        `;
      }

      if (period === 0) {
        html += `
          <td class="session-name" rowspan="5">SÁNG</td>
        `;
      }

      if (period === 5) {
        html += `
          <td class="session-name" rowspan="5">CHIỀU</td>
        `;
      }

      html += `
        <td class="period-cell">
          ${morning ? period + 1 : period - 4}
        </td>

        <td class="time-cell">
          ${times[period]}
        </td>
      `;

      for (const day of days) {
        const subject =
          (item.data[day] && item.data[day][period]) || "";

        const yellow = isYellowCell(
          item.className,
          day,
          period
        );

        const keepWhite =
          item.className === "12A8" &&
          day === "THỨ BẢY" &&
          period >= 5;

        const classAttr =
          yellow && !keepWhite
            ? ' class="no-school"'
            : "";

        html += `
          <td${classAttr}>
            ${escapeHTML(subject)}
          </td>
        `;
      }

      html += "</tr>";
    }

    html += `
        </tbody>
      </table>
    `;

    return html;
  }

  // HIỂN THỊ TOÀN BỘ THỜI KHÓA BIỂU
  root.innerHTML = `
    <div class="timetable-page">

      <div class="timetable-title">
        ${escapeHTML(title)}
      </div>

      <div class="timetable-date">
        ${escapeHTML(applied)}
      </div>

      ${schedules.map(renderClass).join("")}

    </div>
  `;

})();
