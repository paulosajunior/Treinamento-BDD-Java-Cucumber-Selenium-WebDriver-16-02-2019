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
formatter.result({
  "duration": 9691928891,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Cadastrar usuário válido",
  "description": "",
  "id": "cadastro-de-usuario;cadastrar-usuário-válido;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 12,
  "name": "que tenho \"Paulo\", \"Junior\" e \"paulojunior@gmail.com\" validos",
  "matchedColumns": [
    0,
    1,
    2
  ],
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
formatter.match({
  "arguments": [
    {
      "val": "Paulo",
      "offset": 11
    },
    {
      "val": "Junior",
      "offset": 20
    },
    {
      "val": "paulojunior@gmail.com",
      "offset": 31
    }
  ],
  "location": "AutomacaoWebStep.queTenhoEValidos(String,String,String)"
});
formatter.result({
  "duration": 827633235,
  "status": "passed"
});
formatter.match({
  "location": "AutomacaoWebStep.facoOCadastro()"
});
formatter.result({
  "duration": 1737280974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Usuário Criado com sucesso",
      "offset": 20
    }
  ],
  "location": "AutomacaoWebStep.euVejoAMensagem(String)"
});
formatter.result({
  "duration": 154387083,
  "status": "passed"
});
formatter.after({
  "duration": 347886713,
  "status": "passed"
});
formatter.after({
  "duration": 2821967624,
  "status": "passed"
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
formatter.result({
  "duration": 8247976729,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Cadastrar usuário válido",
  "description": "",
  "id": "cadastro-de-usuario;cadastrar-usuário-válido;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 12,
  "name": "que tenho \"Paulo2\", \"junior2\" e \"teste@junio.com.br\" validos",
  "matchedColumns": [
    0,
    1,
    2
  ],
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
formatter.match({
  "arguments": [
    {
      "val": "Paulo2",
      "offset": 11
    },
    {
      "val": "junior2",
      "offset": 21
    },
    {
      "val": "teste@junio.com.br",
      "offset": 33
    }
  ],
  "location": "AutomacaoWebStep.queTenhoEValidos(String,String,String)"
});
formatter.result({
  "duration": 785851186,
  "status": "passed"
});
formatter.match({
  "location": "AutomacaoWebStep.facoOCadastro()"
});
formatter.result({
  "duration": 1997590274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Usuário Criado com sucesso",
      "offset": 20
    }
  ],
  "location": "AutomacaoWebStep.euVejoAMensagem(String)"
});
formatter.result({
  "duration": 71496212,
  "status": "passed"
});
formatter.after({
  "duration": 318747607,
  "status": "passed"
});
formatter.after({
  "duration": 2825786106,
  "status": "passed"
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
formatter.result({
  "duration": 7760300993,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Cadastrar usuário válido",
  "description": "",
  "id": "cadastro-de-usuario;cadastrar-usuário-válido;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 12,
  "name": "que tenho \"Paulo3\", \"Junior3\" e \"teste3@teste.com.be\" validos",
  "matchedColumns": [
    0,
    1,
    2
  ],
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
formatter.match({
  "arguments": [
    {
      "val": "Paulo3",
      "offset": 11
    },
    {
      "val": "Junior3",
      "offset": 21
    },
    {
      "val": "teste3@teste.com.be",
      "offset": 33
    }
  ],
  "location": "AutomacaoWebStep.queTenhoEValidos(String,String,String)"
});
formatter.result({
  "duration": 736753115,
  "status": "passed"
});
formatter.match({
  "location": "AutomacaoWebStep.facoOCadastro()"
});
formatter.result({
  "duration": 1987010060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Usuário Criado com sucesso",
      "offset": 20
    }
  ],
  "location": "AutomacaoWebStep.euVejoAMensagem(String)"
});
formatter.result({
  "duration": 53970007,
  "status": "passed"
});
formatter.after({
  "duration": 354205541,
  "status": "passed"
});
formatter.after({
  "duration": 2867292143,
  "status": "passed"
});
});