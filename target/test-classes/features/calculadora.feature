# language: pt
Funcionalidade: Calculadora básica
  Tendo uma calculadora básica
  quero efetuar contas simples
  para treinar meu BDD

  Esquema do Cenário: Validar Soma
    Dado que tenho o número <numero1>
    Quando eu adiciono <numero2>
    Então o resultado é igual a <total>

    Exemplos: 
      | numero1 | numero2 | total |
      |      10 |      20 |    30 |
      |       1 |       5 |     6 |
      |      11 |      20 |    31 |
      |      20 |      20 |    40 |
      |      70 |      20 |    90 |
      |     110 |      20 |   131 |
      
      
      
      
