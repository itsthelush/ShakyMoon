const element = document.querySelector('.TeamLogo');

/*while (0==0) {
    element.style.opacity='1.0';
    setInterval(function(){element.style.opacity='0.7';}, 2000);
  }*/
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  
  console.log("Hello");
  sleep(2000);
  console.log("World!");