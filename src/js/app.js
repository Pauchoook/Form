import "../scss/style.scss";
import modal from "./files/modal.js";
import "./files/inputmask.js";

modal();
const inputs = document.querySelectorAll("input[type='tel']");

if (inputs.length) {
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputs);
}