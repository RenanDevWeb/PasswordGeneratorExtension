let senha  
let alfabetoCompleto = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "|", "\\"
  ];
let tamanhoDaSenha 
let resultado = document.getElementById("resultado")



document.getElementById("gerarSenha").addEventListener("click", () => {
    let inputQuantidadeDeCaracteres = document.getElementById('quantidadeDeCaracteres').value
    console.log(inputQuantidadeDeCaracteres);
    if(inputQuantidadeDeCaracteres !== ' '){
       let senha = gerarSenha(inputQuantidadeDeCaracteres)
       console.log(senha);
       resultado.innerHTML = senha;
    }else{
      alert('Digite a quantidade de caracteres');
    }
  });



  function gerarSenha(tamanhoDaSenha){
    senha= ''
    for(let index = 1; index <= tamanhoDaSenha; index++){
        let randonNumber = Math.floor(Math.random() * alfabetoCompleto.length)
        senha += alfabetoCompleto[randonNumber]
    }
    return senha
}

function copyCode(text){
    navigator.clipboard.writeText(text)
    .then(() => {
        alert("Senha copiado!")
    }).catch(err => {
        alert("Erro ao copiar a Senha")
    })
}

resultado.addEventListener('click', function(){
    let senharesultado   = resultado.innerHTML
    console.log(senharesultado);
    copyCode(senharesultado)
})