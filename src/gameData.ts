export interface QuestionAnswer {
  question: string;
  answer: string;
}

export interface GameCard {
  theme: string;
  items: QuestionAnswer[];
}

export const gameCards: GameCard[] = [
  {
    theme: "Conhecimentos Gerais",
    items: [
      { question: "O país que mais produz café no mundo", answer: "Brasil" },
      { question: "Qual o oceano mais profundo do planeta", answer: "Pacífico" },
      { question: "Em que país nasceu o pintor Pablo Picasso", answer: "Espanha" },
      { question: "Qual é a capital do Brasil", answer: "Brasília" },
      { question: "Qual elemento químico tem o símbolo 'O'", answer: "Oxigênio" },
    ],
  },
  {
    theme: "Matemática Básica",
    items: [
      { question: "Quanto é 7 × 8", answer: "56" },
      { question: "Quanto é 150 + 250", answer: "400" },
      { question: "Qual é a metade de 74", answer: "37" },
      { question: "Quanto é 9 × 9", answer: "81" },
      { question: "Quanto é 120 dividido por 4", answer: "30" },
    ],
  },
  {
    theme: "Animais e Natureza",
    items: [
      { question: "Qual é o mamífero que bota ovo", answer: "Ornitorrinco" },
      { question: "Quantos corações tem o polvo", answer: "Três" },
      { question: "Onde vivem os ursos-polares", answer: "Ártico" },
      { question: "Qual é o réptil mais longo do mundo", answer: "Piton-reticulada" },
      { question: "Qual pássaro consegue voar para trás", answer: "Beija-flor" },
    ],
  },
  {
    theme: "Desenhos Animados",
    items: [
      { question: "Quem mora em uma fofoca de abacaxi", answer: "Bob Esponja" },
      { question: "Qual é o nome do rato amigo do Mickey", answer: "Morty" },
      { question: "Marinheiro que fica forte com espinafre", answer: "Popeye" },
      { question: "Passarinho amarelo perseguido pelo Frajola", answer: "Piu-piu" },
      { question: "Cãozinho medroso que caça fantasmas", answer: "Scooby-Doo" },
    ],
  },
  {
    theme: "Cores e Misturas",
    items: [
      { question: "Mistura de azul com amarelo resulta em", answer: "Verde" },
      { question: "Mistura de vermelho com branco resulta em", answer: "Rosa" },
      { question: "Mistura de azul com vermelho resulta em", answer: "Roxo" },
      { question: "Cor que representa a paz", answer: "Branco" },
      { question: "Cor resultante da mistura de todas as cores de luz", answer: "Branco" },
    ],
  },
  {
    theme: "Frutas e Plantas",
    items: [
      { question: "Fruta que é a casa do Bob Esponja", answer: "Abacaxi" },
      { question: "Árvore que dá maçã", answer: "Macieira" },
      { question: "Processo que as plantas usam para produzir energia", answer: "Fotossíntese" },
      { question: "Maior floresta tropical do mundo", answer: "Amazônica" },
      { question: "Fruta conhecida por ter muita vitamina C", answer: "Laranja" },
    ],
  },
  {
    theme: "Personagens do Folclore Brasileiro",
    items: [
      { question: "Menino de uma perna só que usa gorro vermelho", answer: "Saci-Pererê" },
      { question: "Cobra de fogo que protege as matas", answer: "Boitatá" },
      { question: "Protetor dos animais com pés virados para trás", answer: "Curupira" },
      { question: "Sereia que canta para atrair pescadores", answer: "Iara" },
      { question: "Homem que se transforma em noites de lua cheia", answer: "Lobisomem" },
    ],
  },
  {
    theme: "Super-Heróis",
    items: [
      { question: "Herói conhecido como o Cavaleiro das Trevas", answer: "Batman" },
      { question: "Alter ego do jornalista Clark Kent", answer: "Superman" },
      { question: "Herói que usa uma armadura tecnológica vermelha e dourada", answer: "Homem de Ferro" },
      { question: "Amigo da vizinhança que escala paredes", answer: "Homem-Aranha" },
      { question: "Deus do trovão que usa um martelo mágico", answer: "Thor" },
    ],
  },
  {
    theme: "Planeta Terra e Geografia",
    items: [
      { question: "O maior continente em extensão territorial", answer: "Ásia" },
      { question: "Maior país do mundo em área", answer: "Rússia" },
      { question: "Rio mais extenso e volumoso do mundo", answer: "Amazonas" },
      { question: "Linha imaginária que divide a Terra em Norte e Sul", answer: "Equador" },
      { question: "País famoso pelo formato de uma bota", answer: "Itália" },
    ],
  },
  {
    theme: "Invenções e Descobertas",
    items: [
      { question: "Cientista que formulou a lei da gravidade com a maçã", answer: "Isaac Newton" },
      { question: "Inventor oficial do avião (14-Bis)", answer: "Santos Dumont" },
      { question: "Inventor do sistema de leitura para cegos", answer: "Louis Braille" },
      { question: "Descobridor da penicilina (primeiro antibiótico)", answer: "Alexander Fleming" },
      { question: "Inventor do rádio sem fio", answer: "Guglielmo Marconi" },
    ],
  },
  {
    theme: "Grandes Invenções",
    items: [
      { question: "Inventor do telefone", answer: "Alexander Graham Bell" },
      { question: "Inventor da lâmpada incandescente", answer: "Thomas Edison" },
      { question: "Criadores do cinema (cinematógrafo)", answer: "Irmãos Lumière" },
      { question: "Inventor da prensa móvel", answer: "Johannes Gutenberg" },
      { question: "Inventor do avião que voou por meios próprios", answer: "Santos Dumont" },
    ],
  },
  {
    theme: "Corpo Humano",
    items: [
      { question: "O maior órgão do corpo humano", answer: "A pele" },
      { question: "O osso mais longo do esqueleto", answer: "Fêmur" },
      { question: "Órgão responsável por bombear o sangue", answer: "Coração" },
      { question: "Quantos ossos tem o corpo humano adulto", answer: "206" },
      { question: "Órgão que comanda todo o sistema nervoso", answer: "Cérebro" },
    ],
  },
  {
    theme: "Fauna Mundial",
    items: [
      { question: "O maior mamífero do planeta", answer: "Baleia-azul" },
      { question: "O animal terrestre mais veloz", answer: "Guepardo" },
      { question: "Ave que não voa e vive no gelo", answer: "Pinguim" },
      { question: "Único mamífero que voa", answer: "Morcego" },
      { question: "O maior animal terrestre do mundo", answer: "Elefante Africano" },
    ],
  },
  {
    theme: "Capitais do Mundo",
    items: [
      { question: "Capital da França", answer: "Paris" },
      { question: "Capital do Japão", answer: "Tóquio" },
      { question: "Capital da Itália", answer: "Roma" },
      { question: "Capital do Egito", answer: "Cairo" },
      { question: "Capital federal do Brasil", answer: "Brasília" },
    ],
  },
  {
    theme: "Espaço e Astronomia",
    items: [
      { question: "O maior planeta do Sistema Solar", answer: "Júpiter" },
      { question: "Conhecido como o 'Planeta Vermelho'", answer: "Marte" },
      { question: "A estrela mais próxima da Terra", answer: "O Sol" },
      { question: "Satélite natural da Terra", answer: "A Lua" },
      { question: "Planeta famoso por seus grandes anéis", answer: "Saturno" },
    ],
  },
  {
    theme: "Maravilhas do Mundo",
    items: [
      { question: "Estátua famosa no Rio de Janeiro", answer: "Cristo Redentor" },
      { question: "Monumento antigo em formato de pirâmide", answer: "Esfinge de Gizé" },
      { question: "Grande anfiteatro na Roma Antiga", answer: "Coliseu" },
      { question: "Mausoléu de mármore branco na Índia", answer: "Taj Mahal" },
      { question: "Gigantesca estrutura de pedra construída na Ásia", answer: "Grande Muralha da China" },
    ],
  },
  {
    theme: "Literatura Clássica",
    items: [
      { question: "Autor de 'Dom Quixote'", answer: "Miguel de Cervantes" },
      { question: "Criador do Sítio do Picapau Amarelo", answer: "Monteiro Lobato" },
      { question: "Autor de 'Romeu e Julieta'", answer: "William Shakespeare" },
      { question: "Escreveu 'O Pequeno Príncipe'", answer: "Antoine de Saint-Exupéry" },
      { question: "Autor do famoso poema épico 'Os Lusíadas'", answer: "Luís de Camões" },
    ],
  },
  {
    theme: "Elementos da Natureza",
    items: [
      { question: "Substância essencial H2O", answer: "Água" },
      { question: "Gás essencial para nossa respiração", answer: "Oxigênio" },
      { question: "Estrela que fornece luz e calor", answer: "Sol" },
      { question: "Satélite que influencia as marés", answer: "Lua" },
      { question: "Elemento que produz fogo e calor de queima", answer: "Fogo" },
    ],
  },
  {
    theme: "História Antiga",
    items: [
      { question: "Civilização das pirâmides e faraós", answer: "Egípcia" },
      { question: "Berço da democracia e dos filósofos", answer: "Grécia Antiga" },
      { question: "Famosos guerreiros navais do norte", answer: "Vikings" },
      { question: "Império liderado por Júlio César", answer: "Romano" },
      { question: "Civilização pré-colombiana das Américas", answer: "Maías" },
    ],
  },
  {
    theme: "Esportes e Jogos",
    items: [
      { question: "País onde nasceram os Jogos Olímpicos", answer: "Grécia" },
      { question: "Esporte jogado com raquetes e peteca", answer: "Badminton" },
      { question: "Jogo de tabuleiro com reis e rainhas", answer: "Xadrez" },
      { question: "Único país a disputar todas as Copas de Futebol", answer: "Brasil" },
      { question: "Esporte cujo objetivo é acertar a bola na cesta", answer: "Basquete" },
    ],
  },
  {
    theme: "Exploração Espacial",
    items: [
      { question: "Primeiro homem a viajar para o espaço", answer: "Yuri Gagarin" },
      { question: "Primeiro homem a pisar na Lua", answer: "Neil Armstrong" },
      { question: "Primeira mulher a ir ao espaço", answer: "Valentina Tereshkova" },
      { question: "Animais que foram os primeiros a orbitar a Terra", answer: "Cachorros" },
      { question: "Nome da primeira missão a levar humanos à Lua", answer: "Apollo 11" },
    ],
  },
  {
    theme: "História Universal da Música (Parte 1)",
    items: [
      { question: "Compositor surdo que criou a 9ª Sinfonia", answer: "Beethoven" },
      { question: "Compositor austríaco chamado 'O Menino Prodígio'", answer: "Mozart" },
      { question: "Compositor das 'Quatro Estações'", answer: "Vivaldi" },
      { question: "Gênero musical nascido nos Estados Unidos por negros", answer: "Jazz" },
      { question: "Compositor brasileiro da 'Aquarela do Brasil'", answer: "Ary Barroso" },
    ],
  },
  {
    theme: "Natureza Incrível",
    items: [
      { question: "Maior flor do mundo que cheira como carne podre", answer: "Rafflesia" },
      { question: "Deserto mais quente e seco do mundo", answer: "Saara" },
      { question: "Cachoeira mais alta do mundo", answer: "Salto Angel" },
      { question: "Planta que fecha suas folhas ao toque", answer: "Sensitive-planta" },
      { question: "Animal que pode camuflar-se mudando de cor", answer: "Camaleão" },
    ],
  },
  {
    theme: "Maravilhas do Mundo Antigo",
    items: [
      { question: "Única maravilha antiga ainda existente", answer: "Pirâmides de Gizé" },
      { question: "Estátua gigante do deus Helios", answer: "Colosso de Rodes" },
      { question: "Jardins famosos construídos na Babilônia", answer: "Jardins Suspensos" },
      { question: "Templo dedicado à deusa Artemis", answer: "Templo de Diana" },
      { question: "Túmulo monumental construído em Halicarnasso", answer: "Mausoléu" },
    ],
  },
  {
    theme: "História Universal da Música (Parte 2)",
    items: [
      { question: "Instrumento de cordas com formato de pé de cisne", answer: "Piano" },
      { question: "Gênero musical brasileiro surgido no Rio de Janeiro", answer: "Samba" },
      { question: "Compositor de 'Para Elisa'", answer: "Beethoven" },
      { question: "Instrumento musical com cordas e arco", answer: "Violino" },
      { question: "Famoso compositor de óperas italianas", answer: "Verdi" },
    ],
  },
  {
    theme: "História Universal da Arte (Parte 1)",
    items: [
      { question: "Pintor da 'Mona Lisa' e 'Última Ceia'", answer: "Leonardo da Vinci" },
      { question: "Pintor de 'O Grito'", answer: "Edvard Munch" },
      { question: "Escultor do 'Davi' e 'Pietá'", answer: "Michelangelo" },
      { question: "Pintor holandês de 'Noite Estrelada'", answer: "Van Gogh" },
      { question: "Estilo artístico que usa pontos de cor justapostos", answer: "Pontilhismo" },
    ],
  },
  {
    theme: "História Universal da Arte (Parte 2)",
    items: [
      { question: "Pintor espanhol famoso pelo cubismo", answer: "Pablo Picasso" },
      { question: "Corrente artística com sonhos e inconsciente", answer: "Surrealismo" },
      { question: "Pintor das 'Ninféias'", answer: "Monet" },
      { question: "Estilo que brinca com formas impossíveis", answer: "Op Art" },
      { question: "Pintora mexicana famosa por autorretratos", answer: "Frida Kahlo" },
    ],
  },
  {
    theme: "Grandes Exploradores",
    items: [
      { question: "Navegador que descobriu a América em 1492", answer: "Cristóvão Colombo" },
      { question: "Navegador português que chegou à Índia pelo mar", answer: "Vasco da Gama" },
      { question: "Explorador que descobriu o Brasil", answer: "Pedro Álvares Cabral" },
      { question: "Primeiro a circum-navegar o globo", answer: "Fernão de Magalhães" },
      { question: "Explorador italiano que deu nome à América", answer: "Américo Vespúcio" },
    ],
  },
  {
    theme: "Curiosidades sobre Invenções",
    items: [
      { question: "Invenção que surgiu acidentalmente da penicilina", answer: "Antibiótico" },
      { question: "Brinquedo inventado por engenheiro na NASA", answer: "Slinky" },
      { question: "Comida inventada por acidente: batata frita", answer: "Chips" },
      { question: "Remédio inventado por acidente que virou refrigerante", answer: "Coca-Cola" },
      { question: "Produto criado como veneno que virou adoçante", answer: "Sacarina" },
    ],
  },
  {
    theme: "História da Ciência",
    items: [
      { question: "Cientista que descobriu a radioatividade", answer: "Marie Curie" },
      { question: "Físico que propôs a teoria da relatividade", answer: "Albert Einstein" },
      { question: "Cientista que formulou a teoria da evolução", answer: "Charles Darwin" },
      { question: "Astrônomo que defendeu o heliocentrismo", answer: "Copérnico" },
      { question: "Físico que descobriu a lei da gravitação", answer: "Isaac Newton" },
    ],
  },
];
