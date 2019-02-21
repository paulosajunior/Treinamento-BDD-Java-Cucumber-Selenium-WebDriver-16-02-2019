# language: pt
Funcionalidade: Cadastro de Usuario
  Sendo eu um aluno de curso de BDD com cucumber
  quero automatizar o cadastro de usuario
  para treinar meu BDD e minha automação

Contexto: 
    Dado que estou no site "https://automacaocombatista.herokuapp.com/users/new"


  Esquema do Cenário: Cadastrar usuário válido
    E que tenho <nome>, <ultimo nome> e <email> validos
    Quando faco o cadastro
    Então eu vejo a mensagem "Usuário Criado com sucesso"

    Exemplos: 
      | nome     | ultimo nome | email                   |
      | "Paulo"  | "Junior"    | "paulojunior@gmail.com" |
      | "Paulo2" | "junior2"   | "teste@junio.com.br"    |
      | "Paulo3" | "Junior3"   | "teste3@teste.com.be"   |
