export var el = document.querySelector(".myclass");


let tik = 0;
const intervalId = setInterval(() => {
    el.innerHTML = tik;
  tik ++;

}, 1000);