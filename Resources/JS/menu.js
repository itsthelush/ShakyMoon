/*var dados = JSON.parse(testejson.json);*/
/*import json from 'JS/testejson.json';*/

fetch("testjson.json")
  .then(response => response.json())
  .then(json => console.log(json));


const element = document.querySelector('.Meteorito');

function Meteorito(){
    console.log("Meteorito Clicado");
    console.log(json, 'the json obj');
}
function ImpactoArtificial(){
    console.log("ImpactoArtificial Clicado");
}

function ImpactoRaso(){
    console.log("ImpactoRaso Clicado");
}

function ImpactoProfundo(){
    console.log("ImpactoProfundo Clicado");
}

/*const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true */

/*function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  window.onload = sleep(3000);
  while (0==0){
    element.style.opacity='1.0';
    sleep(3000);
    element.style.opacity='0.7';
    sleep(2000);
  }*/