var dado;
var limiteJSON;

window.onload = LeituraJSON();


/* JSON data reader */
function LeituraJSON(){
    fetch("https://raw.githubusercontent.com/itsthelush/ShakyMoon/main/Resources/JS/testejson.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => dado = data)
      .then((data) => limiteJSON = data.length);
}

function consultaCaracteristica(index,Tipo){
    var consultaDado = eval("dado" + "[" + index + "]" + "." + Tipo );
    return consultaDado;
}

function consulta(index){
    return dado[index];
}

/* Event Classification function*/
var dadosMeteorito="[";
var dadosArtificial = "[";
var dadosRaso = "[";
var dadosProfundo = "[";
var dadosSemIdentificacao = "[";


function classificacao(){

    var i;

    for (i = 0; i < limiteJSON; i++) {
        var info = consultaCaracteristica(i,'Event');
        if(info == "Meteorito"){
            dadosMeteorito = dadosMeteorito + JSON.stringify(consulta(i)) + ","; 
        }
        else if(info == "Raso"){
            dadosRaso = dadosRaso + JSON.stringify(consulta(i)) + ",";
        }
        else if(info == "Profundo"){
            dadosProfundo = dadosProfundo + JSON.stringify(consulta(i)) + ",";
        }
        else{
            dadosArtificial = dadosArtificial + JSON.stringify(consulta(i)) + ",";
        }
    }


    dadosMeteorito = dadosMeteorito.slice(0, -1);
    dadosMeteorito = dadosMeteorito + "]";
    dadosMeteorito = JSON.parse(dadosMeteorito);

    dadosRaso = dadosRaso.slice(0, -1);
    dadosRaso = dadosRaso + "]";
    dadosRaso = JSON.parse(dadosRaso);

    dadosProfundo = dadosProfundo.slice(0, -1);
    dadosProfundo = dadosProfundo + "]";
    dadosProfundo = JSON.parse(dadosProfundo);

    dadosArtificial = dadosArtificial.slice(0, -1);
    dadosArtificial = dadosArtificial + "]";
    dadosArtificial = JSON.parse(dadosArtificial);

    function consultaCaracteristicaPorGrupo(index,Tipo,Grupo){
        if(Grupo == "Meteorito"){
            var consultaGrupo = dadosMeteorito(index,Tipo);
            return consultaGrupo;
        }
        else if(Grupo == "Raso"){
            var consultaGrupo = dadosRaso(index,Tipo);
            return consultaGrupo;
        }
        else if(Grupo == "Profundo"){
            var consultaGrupo = dadosProfundo(index,Tipo);
            return consultaGrupo;
        }
        else if(Grupo == "Artificial"){
            var consultaGrupo = dadosArtificial(index,Tipo);
            return consultaGrupo;
        }
        else{
            console.log("Informação não encontrada");
        }
    }
}   
/* Create a timer to run classification function */
setTimeout(function (){window.onload = classificacao()},500);