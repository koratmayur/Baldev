const modelSelect = document.getElementById("modelSelect");
const speedSelect = document.getElementById("speedSelect");
const modal = document.getElementById("modal");
const saveBtn = document.getElementById("saveField");

let orniArr = JSON.parse(localStorage.getItem("fields") || "[]");
let incArr = JSON.parse(localStorage.getItem("fields") || "[]");
let fieldId = "";
let fieldName = "";

function renderFields() {
  fields.forEach((f, i) => {
    const div = document.createElement("option");
    div.className = "list-item";
    div.innerHTML = `
          <span>${f.name}</span>
          <span>${f.value}</span>
          <button onclick="selectField(${i})">Select</button>
        `;
    document.getElementById(fieldName).appendChild(div);
  });

  const data = JSON.parse(localStorage.getItem(fieldName) || "[]");

    localStorage.setItem(fieldName, JSON.stringify(data));
    }

modelSelect.addEventListener("change", (e) => {
  fieldName = e.target.id;
  if (modelSelect.value === "add") {
    modal.classList.add("active");

    modelSelect.value = "";
  }
});
speedSelect.addEventListener("change", (e) => {
  fieldName = e.target.id;
  if (speedSelect.value === "add") {
    modal.classList.add("active");
    speedSelect.value = "";
  }
});

saveBtn.addEventListener("click", () => {
  const name = document.getElementById("fieldName").value.trim();
  const value = document.getElementById("fieldValue").value.trim();
  if (name && value) {
    fields.push({ name, value });
    renderFields();
    modal.classList.remove("active");
    document.getElementById("fieldName").value = "";
    document.getElementById("fieldValue").value = "";
  }
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});

renderFields();
