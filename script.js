function Atividade01(){
    let nota = prompt("Digite uma nota")
        while(nota<0 || nota>10){
            nota = prompt("Digite uma nota")
        }alert("Funciona")
}
function Atividade02(){
    let username = prompt("Digite seu Username")
    let pasword = prompt("Digite sua senha")
    while(username == pasword){
        alert("Erro, Digite uma senha diferente do username")
            username = prompt("Digite seu Username")
            pasword = prompt("Digite sua senha")
    }alert("Ok")
}