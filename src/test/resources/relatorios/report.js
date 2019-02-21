$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/automacaoWeb.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de Usuario",
  "description": "Sendo eu um aluno de curso de BDD com cucumber\r\nquero automatizar o cadastro de usuario\r\npara treinar meu BDD e minha automação",
  "id": "cadastro-de-usuario",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Cadastrar usuário válido",
  "description": "",
  "id": "cadastro-de-usuario;cadastrar-usuário-válido",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 12,
  "name": "que tenho \u003cnome\u003e, \u003cultimo nome\u003e e \u003cemail\u003e validos",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "faco o cadastro",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "eu vejo a mensagem \"Usuário Criado com sucesso\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "cadastro-de-usuario;cadastrar-usuário-válido;",
  "rows": [
    {
      "cells": [
        "nome",
        "ultimo nome",
        "email"
      ],
      "line": 17,
      "id": "cadastro-de-usuario;cadastrar-usuário-válido;;1"
    },
    {
      "cells": [
        "\"Paulo\"",
        "\"Junior\"",
        "\"paulojunior@gmail.com\""
      ],
      "line": 18,
      "id": "cadastro-de-usuario;cadastrar-usuário-válido;;2"
    },
    {
      "cells": [
        "\"Paulo2\"",
        "\"junior2\"",
        "\"teste@junio.com.br\""
      ],
      "line": 19,
      "id": "cadastro-de-usuario;cadastrar-usuário-válido;;3"
    },
    {
      "cells": [
        "\"Paulo3\"",
        "\"Junior3\"",
        "\"teste3@teste.com.be\""
      ],
      "line": 20,
      "id": "cadastro-de-usuario;cadastrar-usuário-válido;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que estou no site \"https://automacaocombatista.herokuapp.com/users/new\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "https://automacaocombatista.herokuapp.com/users/new",
      "offset": 19
    }
  ],
  "location": "AutomacaoWebStep.queEstouNoSite(String)"
});
