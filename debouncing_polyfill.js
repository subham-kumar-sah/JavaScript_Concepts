const input = document.getElementById("inputBox");
const debounceText = document.getElementById("debounceText");

input.addEventListener("input", (event) => {
  debounceText.textContent = event.target.value;
});
