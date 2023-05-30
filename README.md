<h2> Organization Chart Application - React: desenvolvendo com JavaScript no projeto de organograma. </h2>

Comentários:

Um hook é um gancho. É algo que o React nos entrega para que seja possível manter um estado dentro de uma função. O hook utilizado é o useState. Sempre que encontrar um o use, saibam que é um hook. O React já importa ele direto.
O useState será uma string vazia '', queremos usar um estado de uma string que é um valor digitado no input. Porém, queremos guardar uma referência para ele.
 Ele vai nos retornar dois valores, o valor em si e uma função que é nosso setter. Quando queremos alterar esse valor, vamos chamar essa função, não podemos alterar o valor direto por atribuição. Então temos as variáveis valor e setValor. Essa sintaxe significa "quero desestruturar o meu array e pegar a primeira e a segunda posição do array" (JavaScript).
Sempre que queremos que o componente reaja a alguma alteração no valor de uma variável e se renderize novamente, precisamos indicar isto utilizando o useState. Do contrário, o valor vai ser alterado mas o DOM não será atualizado.
