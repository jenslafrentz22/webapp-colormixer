const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");
const colorValue = document.querySelector("#color-value");

function setBackgroundColor() {
  // 1. RGB-Wert z. B. 255
  const red = rangeValueToHex(redSlider.value);
  // 1. RGB-Wert in Hex: ff
  const green = rangeValueToHex(greenSlider.value);
  const blue = rangeValueToHex(blueSlider.value);
  // alle drei Werte zum Hex-Farbwert konkatenieren
  const color = "#" + red + green + blue;
  // body-bg-color setzen
  document.body.style.backgroundColor = color;
  // Hex-Wert als Text setzen/anzeigen
  colorValue.innerText = color;
}
setBackgroundColor();

function rangeValueToHex(value) {
  value = Number.parseInt(value);
  return value.toString(16);
  // .toString(16) wandelt Zahl (value) zu Hexadezimalwert:
  // z. B. weiß: 0ff0ff0ff (9-stellig, RGB: 255.255.255)
  // .toString(8) = Oktalwert, toString(2) = Binärwert (011011011)
}

document.body.addEventListener("input", setBackgroundColor);
