# Contextualizando o projeto

Vamos começar o nosso primeiro projeto em Node mas antes de meter a mão no código, vamos dar uma olhada no problema, no que precisa resolver, é sempre o ponto de partida.

Vamos trabalhar no contexto de um blog de programação, como por exemplo, o blog da Alura, sessão de artigos do site da Alura, que hoje tem essa cara, amanhã pode estar com uma cara diferente, mas é um blog de programação que assim como esse, aceita posts, aceita cada um dos artigos desse blog, como arquivos no formato markdown, no formato .md.

Eu vou deixar o material extra sobre o que é o markdown, caso você ainda não tenha familiaridade, mas basicamente o markdown, é um formato de marcação para textos na web, para se escrever por exemplo, texto de blog, ou readme do GitHub, mas até aí tudo bem, qual que é o nosso problema?

Eu vou abrir aqui um artigo de programação, por exemplo, esse aqui sobre JDBC e normalmente quando escrevemos artigo de programação, artigo de tecnologia, colocamos muita referência, em links, então aqui nesse texto tem um link sobre o padrão ANSI, outro link sobre sistemas gerenciadores de bancos de dados, um assunto do SQL.

E o que acontece? Quando o blog começa a ficar grande, começa a ter muitos artigos, começamos a ter problemas do tipo, alguém reclamou que os artigos da Ju estão com links quebrados, ou seja, a pessoa, o usuário, clica no link e está errado, deu página 404.

E aí você lá que está fazendo a gestão do blog, o que você faz você? Você entra em cada um dos posts da Ju, ou esse aqui, por exemplo, o post do André, e vai clicando em cada um dos links para saber qual que está no ar, qual que não está no ar, não, não fazemos isso, esse é um trabalho que passamos para o computador fazer para nós.

Então é esse problema que vamos resolver, vamos pedir para que a nossa biblioteca acesse a arquivos escritos no formato markdown, acesse cada um dos links, faça uma listagem dos links e nos diga se o link ainda está no ar ou não, então ele vai acessar a página, essa página aqui por exemplo sobre SGBD e nos falar, esse link está, ele deu página 404, etc.

E como que vamos fazer isso? Acessando a sintaxe do markdown, então, por exemplo, se viermos aqui na forma como ele é escrita, como o markdown é escrito, podemos ver que ele tem um padrão para exibir links, então eu clico sobre o ANSI 2, a parte onde queremos que seja escrita, o texto que queremos que apareça ele vai entre colchetes, seguido da URL entre parênteses

Então todo link que escrevemos no formato markdown, ele tem essa cara aqui. Então o do sistema gerenciador de banco de dados igual, então estão entre colchetes o texto e entre parênteses a URL.


# Iniciando projeto

Então agora que já sabemos o que temos que resolver podemos passar para o projeto, eu vou deixar o link para vocês baixarem um arquivo inicial que eu já coloquei aqui na pasta do projeto, dentro de uma pasta arquivos, e ele tem aqui cinco links nesse formato que estávamos conversando, ele é um arquivo no formato ponto md .md, no formato markdown e aqui eu também eu já tenho um arquivo “index.js” com só um console.log que é sempre por onde começamos.

Então vamos, se eu rodar esse projeto no terminal, entrando na pasta dele, que eu chamei de lib, então estou aqui vou entrar, é cd lib-markdown, e dou o comando node index.js que é o nome do meu arquivo ele carregou aqui um comando Node, vamos só relembrar o que é esse comando Node.

## O que é node

O Node ele é um runtime, ele é, digamos assim, um ambiente com seus comandos especiais que permite que o JavaScript rode, seja executado fora do navegador, porque o navegador, por exemplo, o Chrome, o Firefox, etc., ele é o interpretador do JavaScript, ele é o interpretador nativo, ele é a casa onde o JavaScript mora, onde o JavaScript é executado.

Então o Node ele virou sinônimo de JavaScript no back-end, mas ele é o conjunto de comandos, o runtime que executamos para poder rodar arquivos JavaScript aqui fora do navegador, no terminal, então com esse comando Node avisamos o nosso sistema operacional, para que ele entre no ambiente do node e aí sim rode o arquivo, então ele consegue acessar o arquivo JS, interpretar o que tem nele e voltar para nós o console.log. Vamos começar, que foi o que eu já deixei pronto para nós aqui.

Agora que já relembramos o que é um Node, podemos começar com o esqueleto do nosso projeto, sempre que vamos começar um projeto em Node, um projeto que não é front-end, um projeto de back-end com JavaScript, temos que criar algumas pequenas estruturas que estão sempre presentes nos projetos em Node.

Uma delas é um arquivo de configuração que chama “package.json”, e criamos ele da seguinte forma, dando o comando npm init, ou seja, vamos iniciar, init, um novo projeto através do npm.

Eu vou colocar um comando extra aqui que é -y, que significa que vamos dar yes, vamos dar sim, resposta automática para todas as perguntas que o npm init precisa para criar este arquivo “package.json” inicialmente.

Então o que que ele fez aqui? Ele disse que ele escreveu, wrote to esse endereço, endereço do nosso projeto, criou um arquivo “package.json” com essas informações, não tem problema criarmos a princípio dando sim para tudo com esse -Y, porque podemos agora acessar esse arquivo “package.json” e fazer as modificações que queremos, ou que precise.


# O que é o NPM

O npm, vamos dar uma lembrada, o que é o npm, que usamos para tudo quando trabalhamos com node, o npm é um gerenciador de pacotes, literalmente é o Node package manager, o gerenciador de pacotes do Node.

O npm então ele é um repositório de código aberto, onde a comunidade dev, disponibiliza todas as bibliotecas, os frameworks, os códigos que ela desenvolve e deixa para a comunidade usar e tem desde projetos gigantes, como, por exemplo, o Express, que é um Framework grande de back-end para o JavaScript, como bibliotecas pequenas que são mais especializadas, que fazem apenas uma coisa, que é o caso da biblioteca que vamos desenvolver aqui.

Então uma biblioteca é, todos eles são pacotes de dados, pacote de dado é um conjunto de comandos que executa uma tarefa, então um pacote pode ser pequeno como uma biblioteca que faz aqui uma função muito específica, encontrar links no formato markdown como podem ser até muito grandes, frameworks que fazem muitas coisas, como por exemplo, o Express que você vai ver bem para frente na sua jornada como deve back-end com JavaScript.