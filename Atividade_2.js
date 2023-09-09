// Jhones Bonifácio da Silva //
function executar(fn, num1 = 0, num2 = 0) {
    if (typeof fn == 'function') {
        console.log(fn(num1, num2));
    };
};

function somar(a, b) {
    return a + b;
};

function subtrair(a, b) {
    return a - b;
};

function multi(a, b) {
    return a * b;
};

const numeros = [10, 20, 50]
numeros.forEach((valor) => { 
    executar(somar, valor, valor);
     executar(subtrair, valor, valor); 
     executar(multi, valor, valor) 
    console.log('----------------------------------------')

});
