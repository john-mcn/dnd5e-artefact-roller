const API_BASE =
  "https://dnd-worker.ablx799.workers.dev/";

const out = document.getElementById("out");

document.getElementById("rollBtn").addEventListener("click", roll);

async function roll() {
  out.innerHTML = "Rolling...";

  const url = new URL(API_BASE + "artifact");

  url.searchParams.set("minorBeneficial", getVal("minorBen"));
  url.searchParams.set("majorBeneficial", getVal("majorBen"));
  url.searchParams.set("minorDetrimental", getVal("minorDet"));
  url.searchParams.set("majorDetrimental", getVal("majorDet"));

  const res = await fetch(url);
  const data = await res.json();

  out.innerHTML = format(data);
}

function getVal(id) {
  return document.getElementById(id).value || 0;
}

function format(data) {
  const wrap = (title, items) => {
    if (!items?.length) return "";

    return `
      <h2>${title}</h2>
      <ul>
        ${items
          .map(r => `<li><strong>[${r.roll}]</strong> ${r.result}</li>`)
          .join("")}
      </ul>
    `;
  };

  return `
    ${wrap("Minor Beneficial", data.minorBeneficial)}
    ${wrap("Major Beneficial", data.majorBeneficial)}
    ${wrap("Minor Detrimental", data.minorDetrimental)}
    ${wrap("Major Detrimental", data.majorDetrimental)}
  `;
}