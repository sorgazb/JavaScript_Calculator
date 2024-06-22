let operando1=0;
let operando1Aux=0;
let operando2=0;
let operando2Aux=0;
let operacion;
let resultado=0;
let cadenaOperacion=0;

function actualizarPantalla(){
    document.getElementById('valores').value=cadenaOperacion;
}

function introducirNumero(numero){
    if(operando1==0 && operando1!=='0.' && cadenaOperacion==0){
        operando1=numero;
        cadenaOperacion=operando1;
    }else if(cadenaOperacion!=0 && operando1==0){
        operando1=numero;
        cadenaOperacion+=operando1;
    }else if(cadenaOperacion!=0 && operando1!=0){
        operando1+=numero;
        cadenaOperacion=operando1;
    }
    else{
        operando1+=numero;
        cadenaOperacion+=operando1;
    }
    actualizarPantalla();
}

function introducirComa(){
    if(operando1==0){
        operando1='0.';
        cadenaOperacion=operando1;
    }else{
        operando1+='.';
        cadenaOperacion+=operando1;
    }
    
    actualizarPantalla();
}

function resetearPantalla(){
    operando1=0;
    operando2=0;
    cadenaOperacion=0;
    actualizarPantalla();
}

function realizarOperacion(valor){
    if(operando1==0){
        operando1=parseFloat(document.getElementById('valores').value);
    }
    operando1Aux=parseFloat(operando1);
    operacion=valor;
    cadenaOperacion+=operacion;
    actualizarPantalla();
    operando1=0; 
}

function resolverOperacion(){
    operando2Aux=parseFloat(operando1);
    operando2=operando2Aux;
    operando1=operando1Aux;
    cadenaOperacion+=operando2;
    actualizarPantalla();
    switch (operacion) {
        case '+':
            resultado=(operando1+operando2);
            break;
        case '-':
            resultado=(operando1-operando2);
            break;
        case 'x':
            resultado=(operando1*operando2);
            break;
        case '/':
            resultado=(operando1/operando2);
            break;
        case '^':
            resultado=Math.pow(operando1,operando2);
            break;
    }
    cadenaOperacion=resultado;
    actualizarPantalla();
    operando2=parseFloat(operando1);
    operando1=0;
}