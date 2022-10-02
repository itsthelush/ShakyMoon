const element = document.querySelector('.TeamLogo');


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  
  while (0==0){
    element.style.opacity='1.0';
    sleep(3000);
    element.style.opacity='0.7';
    sleep(2000);
  }