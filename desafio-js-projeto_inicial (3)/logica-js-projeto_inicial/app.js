//Exercício 1 - Criar uma função que exibe "Olá, mundo!" no console.
function apresentação(){
    console.log("Olá, mundo!");
}
apresentação();

//Exercício 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function cumprimentar(nome){
    console.log(`Olá, ${nome} `);
}
cumprimentar("Gustavo");

//Exercício 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero){
    return numero*2;
}
console.log(dobro(parseInt(Math.random()*10)));


//Exercício 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(a, b, c){
     a = 4;
     b = 4;
     c = 16;
    return (a+b+c)/3;
}
console.log(media());



//Exercício 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numeroMaior(a, b){
    return a>b? a: b;
}
let resultado = numeroMaior(104, 107);
console.log(`O maior número é ${resultado}`)


//Exercício 6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação 
// desse número por ele mesmo.
function quadrado(x){
    x = 12;
    return x * x;
}
console.log(quadrado());