/*let okarun_txt_btn = document.getElementById('okarun_txt_btn');
let okarun_txt = document.getElementById('okarun_txt')

okarun_txt_btn.addEventListener('click', toggleText);
const buttons = document.querySelectorAll('.readmore_btn');
const textElements = document.querySelectorAll('.okarun btn-1');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('show');
  });
});*/
const buttons = document.querySelectorAll('.readmore_btn');
const textElements = document.querySelectorAll('.okarun');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('show');

  });
});