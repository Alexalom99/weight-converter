// Buena suerte
const input = document.querySelector("#input");
const result = document.querySelector("#result");

input.addEventListener("input", function() {
    result.textContent = parseFloat(input.value*0.453592).toFixed(2);
})