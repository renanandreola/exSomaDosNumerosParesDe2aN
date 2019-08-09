//3) Ler um número inteiro n. Escrever a soma de todos os números
//pares de 2 até n.

var num = parseInt(prompt("Digite um número aqui:"));
var soma = 2;

while (soma < num) {

  if(num%2 == 0) {
    soma = num + 2
    soma++
    document.write(soma)
  }
}
