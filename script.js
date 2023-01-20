const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const hex = document.querySelector("#hex");
const inputs = document.querySelectorAll("input");

for (i = 0; i < inputs.length; i++) {
  inputs[i].step = 1;
  inputs[i].min = 0;
  inputs[i].max = 255;
}

red.value = 255;
green.value = 105;
blue.value = 180;

function changeBGColor() {
  // value = string, daher +
  const redbg = (+red.value).toString(16);
  const greenbg = (+green.value).toString(16);
  const bluebg = (+blue.value).toString(16);

  const bgcolor = `#${redbg}${greenbg}${bluebg}`;
  document.body.style.backgroundColor = bgcolor;
  hex.innerText = bgcolor;
}
changeBGColor();
document.addEventListener("input", changeBGColor);
