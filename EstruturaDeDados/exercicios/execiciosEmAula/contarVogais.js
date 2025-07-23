function contarVogais(string){
  let vogais = string.match(/[aeiou]/gi)
  return vogais ? vogais.length : 0  // podemos usar o split e utilizar um if verficando se a caractere no indice x é uma vogal
}
console.log(contarVogais("Sport campeao"))