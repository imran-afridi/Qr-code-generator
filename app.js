console.clear();

("use strict");

let input = document.querySelector("input");
let btn = document.getElementById("btn");
let qrImg = document.getElementById("qr-img");

btn.addEventListener("click", () => {
  if (!input.value) return;
  btn.innerText = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
  input.value = " ";
});

qrImg.addEventListener("load", () => {
  btn.innerText = "Generate";
});
