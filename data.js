const moments = [
  {
    id: 1,
    date: '2026-03-08',
    displayDate: '08/03/2026',
    title: 'Flores e carta',
    description:
      'Esse dia foi muito especial para mim. Entreguei flores e uma carta de amor, depois você me apresentou seu pai e eu fiquei muito feliz. E, no final do dia, ainda soltei: "mulheres empoderadas, independentes, girl power". Feliz Dia das Mulheres, meu amor.',
  },
  {
    id: 2,
    date: '2026-03-14',
    displayDate: '14/03/2026',
    title: 'Eu te amo',
    description:
      'Eu já estava há um tempo segurando esse sentimento. Lembro que, na quinta-feira, dia 12, você me convidou para uma festa do seu irmão com o pessoal do vôlei. Eu esperei... esperei... um momento certo, mas não encontrei e fui para casa sem te dizer. Chegando em casa, te mandei mensagem e disse: "TAM TAM TAM DMS", para ver se você entendia — claro que não entendeu KKKKKK, eu sou doido mesmo. Mas no sábado à noite, sentamos no banco do seu condomínio, onde senti isso pela primeira vez te abraçando, e falei, olhando nos seus olhos: "eu te amo".',
  },
  {
    id: 3,
    date: '2026-03-15',
    displayDate: '15/03/2026',
    title: 'Recebi minha primeira carta',
    description:
      'Fomos ao meu torneio, apresentei minha mãe, você torceu por mim e, no fim do dia, me entregou um livro e uma carta de amor.',
  },
  {
    id: 4,
    date: '2026-03-18',
    displayDate: '18/03/2026',
    title: 'Primeira vez na sua casa',
    description:
      'Nesse dia eu fiquei surpreso. Imaginei que fôssemos ficar no condomínio como sempre, mas, chegando na portaria, me deparei com sua mensagem falando para eu subir na sua casa. Fiquei sem reação e, ao mesmo tempo, por dentro eu parecia um macaquinho pulando de alegria. Deitamos no sofá e assistimos a um filme enquanto eu fazia carinho e cuidava de você.',
  },
  {
    id: 5,
    date: '2026-03-22',
    displayDate: '22/03/2026',
    title: 'Conhecendo minha família',
    description:
      'Levei você para conhecer minha família. Nesse dia eu estava muito pensativo, procurando razões para te amar e sentindo muito medo. O único momento em que parei de pensar foi quando vi você cuidando e brincando com meu primo — fiquei muito feliz vendo isso.',
  },
  {
    id: 6,
    date: '2026-03-24',
    displayDate: '24/03/2026',
    title: 'Quando abri meu coração',
    description:
      'Falei sobre meus medos para você. Nesse dia, eu estava imaginando que você não iria me entender e que ia se afastar de mim. Mas aconteceu o contrário: você me ajudou com os meus medos, me tranquilizou e ficou do meu lado.',
  },
];

const featuredSong = {
  title: 'Best Part',
  artist: 'Daniel Caesar & H.E.R.',
  cover: './assets/img/images.jpg',
  audio: './assets/music/file.mp3',
  description: 'Essa música me lembra você de um jeito que eu nem sei explicar direito.',
};

const letter2 = {
  greeting: 'Oi, meu amor.',
  paragraphs: [
    'Antes de qualquer coisa, eu quero que você saiba que te conhecer foi uma das melhores coisas que me aconteceram nos últimos anos.',
    'As pessoas falam que coisas incríveis acontecem quando a gente diz: “Deus, faça a sua vontade, me ajude. Tire as coisas ruins e me mostre caminhos bons.”',
    'E eu acredito nisso de verdade… porque foi assim que eu enxerguei você na minha vida.',
    'Eu tenho buscado crescer, ser melhor, ser um homem que honra aquilo que sente e aquilo que constrói.',
    'E nesses últimos dias… eu senti algo que eu não queria sentir de novo.',
    'Não é sobre jogar peso em você… mas eu tenho que ser honesto com o que eu senti.',
    'Quando algo quebra a confiança, isso pesa.',
    'Não é só o que aconteceu… é como aconteceu.',
    'Porque pra mim, é difícil entender como alguém consegue mentir olhando nos olhos de quem disse que ama.',
    'Isso foi o que mais me pegou.',
    'Eu sempre fui verdadeiro com você, sempre te olhei com respeito e sentimento.',
    'Eu não espero perfeição. Mas eu espero verdade.',
    'Porque pra mim, confiança não é detalhe… é base.',
    'E no meio disso tudo, lembro de como era natural você me procurar, falar comigo, querer minha presença.',
    '“You used to call me on my cell phone, late night when you need my love.” — Drake',
    'Eu não tô escrevendo pra atacar, nem pra me afastar.',
    'Eu ainda acredito no que a gente pode construir.',
    'Eu não quero algo cheio de dúvida… eu quero algo verdadeiro.',
    'Eu sei o que eu mereço dentro de uma relação.',
    'E é isso que eu espero da gente.'
  ],
  signature: 'Caio',
};

const letter1 = {
  greeting: 'Oi, Meu Amor.',
  paragraphs: [
    'Escrevo essa carta para eternizar o que sinto por você.',
    'Eu encontrei o amor verdadeiro quando mais precisava e quando menos esperava',
    'O nosso amor não é um conto de fadas, temos nossas diferenças.',
    'Mas escolhemos ajustar todas as divergências. Isso é amor verdadeiro!',
    'Você é a luz que ilumina os meus dias mais escuros.',
    'Mesmo quando estou mal e tento te afastar, você permanece ali comigo.',
    'E é sobre isso.',
    'Ao seu lado, eu crio uma coragem que eu não tinha antes.',
    'Porque eu sei que o nosso relacionamento merece o melhor de mim.',
    'E, acima de tudo, com você eu posso ser eu.',
    'Quando eu falei dos meus medos, você não me julgou.',
    'Pelo contrario, você me acolheu e perguntou:',
    '“O que eu posso fazer pra te ajudar?"',
    'Isso diz tudo.',
    'Quando olho pro meu passado é estranho.',
    'Porque hoje você vive dentro de mim.',
    'Faz parte da minha vida como se sempre esteve la pra mim.',
    'Eu criei esse lugar para guardar essas palavras,',
    'e pra eternizar o que eu sinto por você...',
    'para lembrar sempre do que a gente é',
    'e do que a gente ainda vai ser.',
  ],
  signature: 'Caio',
};

const letter3 = {
  greeting: 'Oi Maby,',
  paragraphs: [
    'Queria te escrever com calma depois de tudo que a gente conversou.',
    'Eu errei, e assumo a responsabilidade por isso.',
    'Eu te decepcionei e sei que sua reação é justa.',
    'Estou comprometido a mudar, sendo mais íntegro e transparente com você.',
    'Eu valorizo muito o que temos.',
    'E, com o tempo, vou reconquistar sua confiança.',
    'Eu também reconheço o quanto isso foi cansativo pra você.',
    'Mesmo assim você continuou, veio falar comigo e ainda tá aqui.',
    'Eu sei que isso não é fácil.',
    'Sinto muito por ter causado essa dor em você.',
    'Isso só me mostra o quanto você se importa.',
    'E isso é importante pra mim de verdade.',
    'Eu quero que o nosso amor volte a ser leve como era no começo.',
    'E vou mostrar isso com atitudes no dia a dia.',
    'Sendo mais coerente, mais transparente e respeitando o que a gente combina.',
    'Eu sei que isso não vai acontecer de uma vez.',
    'Mas eu tô disposto a construir isso com você.'
  ],
  signature: 'Caio',
};

const letter = {
  greeting: 'Oi Maby,',
  paragraphs: [
    'Estou tendo uma sensação estranha que vem e some de repente. É como o inverso daquele frio na barriga quando você está prestes a cair do pico de uma montanha-russa.',
    'SIM! Cair mesmo... porque para descer, você precisa necessariamente conhecer o caminho. Caso contrário, é um pulo no escuro. Ninguém sabe o que tem lá, mas crescemos assistindo tantos "filmes de terror", que antes mesmo de imaginar, sentimos pavor. PAVOR DO IMAGINÁRIO!',
    'E aí vem as pessoas dizendo que o passado era melhor... mas talvez não porque realmente era, mas porque o passado já aconteceu. Já foi visto. Já foi sobrevivido. No fundo, as pessoas não querem voltar ao passado porque ele era melhor, mas porque já sabiam o que esperar.',
    'Todas as pessoas querem viver o "sistema", todos querem dias pretos e brancos. Mas sair do preto para o branco não seria um salto no escuro? Eis a hipocrisia. Vivem pedindo mudança, mas só se puderem prever cada consequência. Querem viver o extraordinário sem salto, mas não existe extraordinário sem desconhecido.',
    'Aí vem a famosa palavra: "experiência". Que palavra curiosa, para não dizer que é tolice. Porque quando alguém está com medo de pular, sempre aparece uma pessoa "mais experiente" dizendo o que faria. Mas será que experiência é sempre sabedoria? Ou, às vezes, também é arrependimento disfarçado?',
    'Quem aconselha nem sempre conta apenas como viveu; impõe, sem perceber, como gostaria de ter vivido. Talvez esse seja um dos maiores riscos: viver decisões importantes não pela própria coragem, mas pelo conforto temporário de terceirizar o medo.',
    'Porque, no fim, ainda é um salto no escuro. Viver de verdade não é escutar quem teria pulado diferente, mas descobrir por conta própria se o nosso voo tem asas. A vida só é verdadeira quando é vivida pela gente.',
    'Músicas que escutei bastante essa semana:',
    '"Aprendi a não confiar no amor, congelei tudo ao meu redor. Eu tranquei as portas pro calor e por isso o incêndio começou. Você me lembra que o amor é assim mesmo, e pode ser fora da curva... e eu, que sempre disse que nunca, fui hipócrita até na armadura."',
    '"Por tantas noites que eu passei juntando as mãos, pedindo ao céu pra me mandar uma direção. Deus é muito bom, ouviu minha oração: mandou seu coração."',
    '"Minha casa toda em cinzas, minha cama toda em chamas, minha pele derretida... e você toda linda. Explosão de sentimentos que eu não pude acreditar. Como é bom poder te amar!"',
    '"Tem dias que eu acordo pensando em você e, em fração de segundo, vejo o mundo desabar. É aí que cai a ficha que eu não vou te ver... será que esse vazio um dia vai me abandonar? Eu trocaria tudo para te ter aqui."',
    '"Escolhi ser diferente, amor, só pra te amar. Desapega do medo e deixa acontecer: eu, você, dois filhos e um cachorro. Um edredom, um filme bom no frio de agosto... e aí, cê topa?"',
    '"Um dia você vai sentar numa cadeira de balanço, vai lembrar do tempo que tinha vinte anos e se perguntar por onde eu devo estar. E eu vou estar te esperando, nem que seja além dessa vida. Se o mal chegar, eu entro na frente para te proteger."',
    '"Sabe aquela igreja? Tô aqui na frente, imaginando chuva de arroz na gente. É impressão minha ou o sol brilhou mais forte quando olhou pra mim? Metade do meu peito mora em você."'
  ],
  signature: 'Caio',
};
