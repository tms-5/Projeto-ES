<h1>Funcionamentos e benefícios do Null Object</h1>

Na programação orientada a objetos, o padrão Null Object permite que possamos trabalhar com objetos que não possuem ação ou realizam ações padrão. 

O que isso significa?

Repare no seguinte código (retirado do livro: Agile Principles, Patterns, and Practices in C#, de Robert C. Martin e Micah Martin.):

`Funcionario e = DB.GetFuncionario("Bob");`\
`if (e != null && e.DiaDePagamento(hoje))`\
  `e.Pagar();`
  
<p>Nesse exemplo, podemos reparar que há um primeiro teste para verificar se o funcionário existe no banco de dados, e então faz-se a checagem do dia de pagamento. </p>
<p>Há uma certa inclinação ao erro nesse exemplo, pois se extrapolarmos o código e considerarmos que ele tenha 2 mil linhas, e que esse mesmo tipo de checagem(“e != null”) 
será realizada em diversas outras situações durante o código. Caso esse teste para funcionário nulo seja esquecido em algum momento, o código funcionará, 
porém irá executar uma ação que não deveria estar sendo executada.</p>
Poderíamos tratar esses casos com blocos de try/catch, porém isso iria inflar o código e seria contraproducente, em alguns casos. 

<h3>Nesse ponto entra o padrão Null Object</h3>

A ideia é criar uma classe com um objeto (funcionário, no exemplo) nulo, que chamará ações vazias ou padrão.
 
Algo parecido com o diagrama a seguir:

![teste](https://reactiveprogramming.io/books/patterns/img/patterns-articles/null-object-diagram.png)



	Dessa forma, a verificação de segurança seria dispensada, já que o tipo nulo seria um tipo esperado pelo código.


<h4>Quando não utilizar o padrão Null Object:</h4>

<ul>
  <li>Quando a sua implementação pode influenciar na performance do sistema, nos casos em que a verificação do valor nulo é menos custosa em número de linhas.</li>
  <li>Há a possibilidade de que alguns erros de programação sejam “escondidos”, devido ao fato de não utilizar o valor nulo (que seria seria um tipo incompatível, em alguns casos).</li>
  <li>Caso a utilização do padrão não seja explícita, outros desenvolvedores podem acabar criando checagem de valores nulos em outras partes do código.</li>
</ul>

<h4>Quando é aconselhável utilizar o padrão Null Object:</h4>

<ul>
  <li>Assim como outros padrões de projeto, o Null Object facilita o entendimento e a leitura do código por outros programadores.</li>
  <li>Remove a necessidade lógica específica para a checagem de valor nulo, reduzindo a complexidade e o tamanho do código.</li>
  <li>Reduz a chance de exceções de ponteiro nulo (NullPointerException).</li>
  <li>Ajuda a não quebrar o polimorfismo e violar o LSP (princípio da substituição de Liskov) do SOLID causado pelos valores nulos.</li>
</ul>

<h3>Conclusão</h3>
	
  <p>Às vezes, temos a necessidade de trabalhar com o valor nulo, porém, em outros casos, esse valor nulo pode ter efeitos negativos no código e dessa forma,
torna-se viável a implementação do Null Object onde um valor padrão possa ser retornado ou uma simples ação padrão seja tomada.</p>
  <p>Dessa forma, utilizando esse padrão, nós podemos assegurar que as funções do sistema sempre irão retornar objetos válidos, mesmo que elas falhem.
O padrão Null Object não substitui completamente o valor nulo, o seu real objetivo é remover o trabalho com um valor nulo, caso um Objeto Nulo já seja o suficiente.
Pois, em alguns casos, se faz necessária a utilização do valor nulo como resposta, para controlarmos algum tipo de saída.</p>
  <p>É importante analisar se o seu código pode ou não trabalhar com valores vazios ou padrão. Caso sim, o padrão Null Object é provavelmente uma melhor escolha.</p>
