var form = document.getElementById('form');
form.addEventListener('submit', validar);

var btenviar = document.getElementById('btenviar');
btenviar.addEventListener('click', validar);

//Como ainda não aprendemos sobre a validação de botões, pesquisei na internet e achei o seguinte site:
//https://pt.stackoverflow.com/questions/82968/pegar-valor-de-um-button-radio
//que utilizei para fazer a seguinte:
var linksite = document.getElementsByName('opcoes');


function validar(a){ //variavel que recebe qual objeto que gerou o evento
    if(valinome()==false){
        a.preventDefault(); //cancela a submissão do formulário
    } else {
        //form.setAttribute("action", "grifinoria.html");
    }
}

function valinome(){
    var nome = document.getElementById('insnome');
    localStorage.setItem('name', nome);
    return true;

}

function valiemail(){
    return true;
}

function valisenha(){
    return true;
}

function validatanasc(){
    return false;
}

function valinotas(){
    return true;
}

function valicasa(){

}

function valianimal(){

}

function valibio(){

}