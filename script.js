function allCells() {
  const a = [];
  for (let i = 1; i <= 9; i++) a.push(document.getElementById(String(i)));
  return a;
}

function resetCells() {
  allCells().forEach((c) => (c.style.backgroundColor = "transparent"));
}

document.getElementById("change_button").addEventListener("click", function () {
  const id = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();
  resetCells();
  const cell = document.getElementById(id);
  if (cell && color) cell.style.backgroundColor = color;
});

document.getElementById("Reset").addEventListener("click", resetCells);
