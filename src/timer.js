import { formatError } from "./utils.js"; 

    let val = document.getElementById('time');
    let el = document.querySelector(".myclass");
    let tik = 0;
export  function clearTimer() {
        clearInterval(intervalId);
        el.innerHTML = tik;
        tik = 0;
        };
export function intervalId (){ setTimeout( function tick () {
      
        if (+val.value > tik) {
            el.innerHTML = tik;
            tik ++;
            intervalId = setTimeout(tick, 1000);
           
        } else if(+val.value < 0 ) {  
            el.innerHTML =  formatError("введите положительное число")
        } else if(+val.value <= tik ) {
          
            clearInterval(intervalId);
            el.innerHTML =  `<p>Время истекло!</p>`;
            new Audio('src/sound/din.mp3').play()
            tik = 0;
        };

    }, 1000);

 } ;
