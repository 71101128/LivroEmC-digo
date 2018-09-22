var Pessoa = function (nome, idade, sexo, carregando) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
  this.carregando = carregando || [];
}