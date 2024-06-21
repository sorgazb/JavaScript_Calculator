let operando1=0;
let operando1Aux=0;
let operando2=0;
let operando2Aux=0;
let operacion;
let resultado=0;

function actualizarPantalla(){
    document.getElementById('valores').value=operando1;
}

function introducirNumero(numero){
    if(operando1==0 && operando1!=='0.'){
        operando1=numero;
    }else{
        operando1+=numero;
    }
    actualizarPantalla();
}

function introducirComa(){
    if(operando1==0){
        operando1='0.';
    }else{
        operando1+='.';
    }
    actualizarPantalla();
}

function resetearPantalla(){
    operando1=0;
    operando2=0;
    actualizarPantalla();
}

function realizarOperacion(valor){
    if(operando1==0){
        operando1=parseFloat(document.getElementById('valores').value);
    }
    operando1Aux=parseFloat(operando1);
    operacion=valor;
    actualizarPantalla();
    operando1=0;
    
}

function resolverOperacion(){
    operando2Aux=parseFloat(operando1);
    operando2=operando2Aux;
    operando1=operando1Aux;
    switch (operacion) {
        case '+':
            resultado=(operando1+operando2);
            break;
        case '-':
            resultado=(operando1-operando2);
            break;
        case '*':
            resultado=(operando1*operando2);
            break;
        case '/':
            resultado=(operando1/operando2);
            break;
        case '^':
            resultado=Math.pow(operando1,operando2);
            break;
    }
    operando1=resultado;
    actualizarPantalla();
    operando2=parseFloat(operando1);
    operando1=0;
}