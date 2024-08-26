/*1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma
mensagem caso o valor seja inválido e continue pedindo até que o usuário
informe um valor válido. (fácil)*/
function Atividade01(){
    let nota = prompt("Digite uma nota")
        while(nota<0 || nota>10){
            nota = prompt("Digite uma nota")
        }
        alert("OK, sua nota é valida")
}

/*2. Faça um programa que leia um nome de usuário e a sua
senha e não aceite a senha igual ao nome do usuário, mostrando uma
mensagem de erro e voltando a pedir as informações.
(fácil)*/
function Atividade02(){
    let username = prompt("Digite seu Username")
    let pasword = prompt("Digite sua senha")
    while(username == pasword){
        alert("Erro, Digite uma senha diferente do username")
            username = prompt("Digite seu Username")
            pasword = prompt("Digite sua senha")
    }alert("OK, seu usuario e senha são diferentes")
}

/*3.Faça um programa que calcule o mostre a média aritmética de N notas. (N deve ser digitado pelo usuário)
(fácil)*/
function Atividade03() {
    let Dividendo = parseInt(prompt("Digite quantos números você quer usar para calcular a média:"))
    let soma = 0
    let x = 0

    while (x < Dividendo) {
        let numTemp = parseFloat(prompt("Digite um número:"))
        soma += numTemp
        x++
    }

    let media = soma / Dividendo
    alert("A média aritmética é: " + media)
}

/*4.Um número primo é aquele que é divisível apenas por um e por ele mesmo.
Faça um programa que peça um número inteiro e determine se ele é ou não
um número primo. (médio)*/
function Atividade04() {
    let numero = parseInt(prompt("Digite o número que você quer ver se é primo ou não"))
    let primo = true
    let dividendo = 3

    if (numero <= 1 || numero % 2 == 0) {
        primo = false
    } else if (numero == 2) {
        primo = true
    } else {
        while (dividendo * dividendo <= numero) {
            if (numero % dividendo == 0) {
                primo = false
            }
            dividendo += 2
        }
    }

    if (primo == true) {
        alert("É primo")
    }else{
        alert("Não é primo")
    }
    
}




