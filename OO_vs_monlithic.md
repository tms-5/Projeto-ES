<h1>Vantagens das soluções OO sobre as monolíticas</h1>

<p> Neste artigo, iremos analisar as diferenças entre a abordagem monolítica e a Orientação a Objetos. 
O problema gira em torno de separar palavra por palavra em um arquivo .txt. Os códigos para cada uma das soluções estão disponíveis nos seguintes repositórios:</p>

Solução monolítica:
https://github.com/mtov/exercises-in-programming-style/blob/master/04-monolith/tf-04.py

Solução OO:
https://github.com/mtov/exercises-in-programming-style/blob/master/11-things/tf-11.py

<p> Ambos os códigos são bastante simples, não ultrapassam 100 linhas. Porém, se observarmos com atenção, 
o código monolítico apresenta muito mais comentários em relação ao código com Orientação a Objetos. 
Mesmo assim, ao “bater o olho”, conseguimos identificar com muito mais facilidade o que está acontecendo no segundo (mesmo sem uma grande quantidade de comentários).</p>

<p>Essa facilidade de compreensão, implica no interesse de quem está desenvolvendo o software. Para um caso simples, como o do exemplo,
em que apenas uma pessoa sozinha consegue implementar o código e desenvolver a solução, sem ajuda de outros programadores, a solução monolítica parece ser bastante viável.</p>

<p>Em projetos curtos, há certas vantagens em se usar a solução monolítica, como por exemplo:</p>
<ul>
<li>Por ser “uma coisa só”, um processo único, apresenta facilidade em realizar o design, deploy e também alguns tipos de teste específicos como o system test ou o end-to-end test.</li>
<li>Por ter poucas subdivisões, possui uma “área” menor de vulnerabilidade a ataques.</li>
<li>Complexidade baixa.</li>
</ul>

<p>Neste caso, não há muitos problemas neste exemplo de código para solucionar o problema. Porém, se considerarmos que esse código é apenas parte de uma aplicação maior e
que outros desenvolvedores terão que interagir com este mesmo pedaço de código, nesse ponto, a escalabilidade do código monolítico deixa a desejar, pois:</p>

<ul>
<li>Dificuldade na paralelização dos trabalhos com outros programadores, o que torna a escalabilidade do desenvolvimento terrível.</li>
<li>Códigos monolíticos muito longos levam a uma complexidade cognitiva imensa, para quem for analisar o código.</li>
<li>No caso de trabalhos em paralelo, caso uma única variável seja declarada de maneira diferente um mínimo erro de sintaxe, compromete toda a aplicação (natureza do Tudo ou nada).
Escalamento granular (aperfeiçoamento de pequenas partes do código) é quase impossível.</li>
<li>Modernização da aplicação é complicada, devido à natureza “Tudo ou nada” da programação monolítica.</li>
</ul>

<h2>Concluindo</h2>

<p>Na versão monolítica é inviável várias pessoas trabalharem no mesmo código. 
Existe a possibilidade de erros como por exemplo: uma mesma variável ser declarada de formas diferentes. </p>
<p>Entretanto, no código com OO fica mais fácil o trabalho de modo que, cada  desenvolvedor fica responsável por uma classe o que facilitaria a implementação do mesmo. 
Apesar dos graves problemas de escalabilidade, não podemos declarar o fim da programação monolítica, pois ela ainda pode ser útil em alguns casos.</p>
