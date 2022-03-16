let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

const increment = () => {
  count += 1
  countEl.textContent = count
};

const save = () => {
  let total = count + " - "
  saveEl.textContent += total
  countEl.textContent = 0
  count = 0
};

const reset = () => {
  count = 0
  saveEl.textContent = ""
};
