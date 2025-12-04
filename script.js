// --- EFEITO DE DIGITAÇÃO DO MASCOTE ---
const robotMsgs = [
  "Olá, Herói Digital! 👋 Sou o R-42, seu guia nesta jornada.",
  "Pronto para dominar o universo da Inteligência Artificial?",
  "Complete as missões abaixo e teste seus conhecimentos! 🚀",
];

const robotResponses = {
  correct: [
    "Correto! ✅ Mandou bem, Herói Digital!",
    "Isso mesmo! Você está pegando o jeito. ✨",
    "Excelente! Conhecimento é poder. 🧠",
    "Perfeito! Continue assim. 🚀",
  ],
  wrong: [
    "Ops! ❌ A resposta certa era outra. Mas aprender faz parte!",
    "Quase lá! A resposta correta foi destacada. 👀",
    "Não foi desta vez, mas não desanime! A persistência é chave.",
    "Essa foi por pouco! Dê uma olhada na explicação.",
  ],
};

let msgIndex = 0;
let charIndex = 0;
const robotTextElement = document.getElementById("robot-text");
let typewriterTimeout;

function typeWriter() {
  clearTimeout(typewriterTimeout);
  if (robotTextElement && msgIndex < robotMsgs.length) {
    let currentMsg = robotMsgs[msgIndex];
    if (charIndex < currentMsg.length) {
      robotTextElement.innerHTML += currentMsg.charAt(charIndex);
      charIndex++;
      typewriterTimeout = setTimeout(typeWriter, 30);
    } else {
      typewriterTimeout = setTimeout(() => {
        msgIndex = (msgIndex + 1) % robotMsgs.length;
        charIndex = 0;
        robotTextElement.innerHTML = "";
        typeWriter();
      }, 3000);
    }
  }
}

function robotSay(type, duration = 4000) {
  clearTimeout(typewriterTimeout);
  if (robotTextElement) {
    const responses = robotResponses[type];
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    robotTextElement.innerText = randomResponse;

    typewriterTimeout = setTimeout(() => {
      charIndex = 0;
      msgIndex = 0;
      robotTextElement.innerHTML = "";
      typeWriter();
    }, duration);
  }
}

// --- DADOS DAS MISSÕES ---
const missions = [
  // Missões de Conscientização
  {
    icon: "🧐",
    title: "Missão 1: O que é IA e por que é importante?",
    content:
      "IA não é um robô do futuro, mas uma ferramenta já presente no seu dia a dia: em filtros de redes sociais, recomendações de filmes e até nos games que você joga. Ela funciona com base em dados e algoritmos para simular o pensamento humano, mas lembre-se: a verdadeira inteligência, com criatividade e emoção, ainda é sua.",
    quiz: {
      question: "Onde você já encontra IA hoje?",
      answers: [
        { text: "Apenas em filmes de ficção científica.", correct: false },
        { text: "Apenas em laboratórios secretos.", correct: false },
        {
          text: "Em apps de música, streaming e redes sociais.",
          correct: true,
        },
      ],
      explanation:
        "A IA já está presente em nosso dia a dia, em apps de música, streaming e redes sociais. Entender isso é o primeiro passo para usá-la de forma consciente.",
    },
  },
  {
    icon: "🔒",
    title: "Missão 2: Sua Privacidade é um Superpoder!",
    content:
      "Ao usar uma IA, imagine que você está em uma praça pública. Não compartilhe informações que você não gritaria para todo mundo ouvir: nome completo, endereço, escola, senhas ou seu CPF. Um herói digital protege sua identidade!",
    quiz: {
      question: "Qual informação é segura para dar a um chatbot?",
      answers: [
        { text: "Seu número de telefone.", correct: false },
        { text: "O nome do seu pet.", correct: true },
        { text: "Uma foto do seu RG.", correct: false },
      ],
      explanation:
        "Informações que não te identificam diretamente, como nome do pet ou cor favorita, são menos arriscadas. Já dados de contato e documentos jamais devem ser compartilhados.",
    },
  },
  {
    icon: "🕵️‍♀️",
    title: "Missão 3: Detetive de Fake News e Deepfakes",
    content:
      "IAs podem criar textos e imagens que parecem muito reais, mas são falsos (os 'deepfakes'). Antes de acreditar e compartilhar, seja um detetive: verifique a informação em fontes confiáveis, procure por inconsistências (mãos com 6 dedos, erros na imagem) e sempre duvide de notícias bombásticas demais.",
    quiz: {
      question:
        "Uma IA te mostra uma foto de um político famoso dizendo algo polêmico. O que você faz?",
      answers: [
        {
          text: "Compartilha imediatamente, pois a imagem parece real.",
          correct: false,
        },
        { text: "Responde à IA com sua opinião.", correct: false },
        {
          text: "Procura a mesma notícia em jornais e sites conhecidos antes de acreditar.",
          correct: true,
        },
      ],
      explanation:
        "O correto é sempre verificar informações em fontes confiáveis, como jornais e sites conhecidos, antes de acreditar ou compartilhar. Assim você ajuda a combater a desinformação.",
    },
  },
  {
    icon: "⚖️",
    title: "Missão 4: IA sem Preconceito: Construindo um Mundo Digital Justo",
    content:
      "Uma IA aprende com os dados que recebe. Se esses dados contêm preconceitos (racismo, machismo), a IA pode acabar repetindo essas injustiças. Nosso papel é 'ensinar' as IAs a serem justas, questionando resultados estranhos e apoiando a criação de tecnologias mais inclusivas.",
    quiz: {
      question:
        "Se uma IA de recrutamento só recomenda homens para vagas de chefia, isso pode ser um sinal de:",
      answers: [
        { text: "Que homens são naturalmente melhores líderes.", correct: false },
        {
          text: "Um viés (preconceito) nos dados com que a IA foi treinada.",
          correct: true,
        },
        { text: "Um erro normal do sistema.", correct: false },
      ],
      explanation:
        "Uma IA aprende com os dados que recebe. Se os dados forem preconceituosos, a IA também será. Por isso, é fundamental identificar e questionar esses vieses para construirmos uma tecnologia mais justa.",
    },
  },
  {
    icon: "©️",
    title: "Missão 5: Quem é o Dono da Arte? Direitos Autorais na Era da IA",
    content:
      "Se você pede para uma IA criar uma imagem ou música, a quem pertence essa obra? As leis ainda estão sendo criadas. Use essas ferramentas para inspiração, mas evite usar o resultado diretamente em trabalhos importantes. E jamais use para copiar o estilo de um artista específico e dizer que é seu.",
    quiz: {
      question:
        "Você gerou uma imagem incrível com IA. Você pode vendê-la como se fosse 100% sua?",
      answers: [
        { text: "Sim, a IA é só uma ferramenta.", correct: false },
        {
          text: "É complicado. A questão dos direitos autorais sobre arte de IA ainda não está definida.",
          correct: true,
        },
        { text: "Sim, desde que ninguém descubra.", correct: false },
      ],
      explanation:
        "As leis sobre direitos autorais de criações por IA ainda estão em debate. Por isso, o uso mais seguro e ético é para inspiração, evitando o uso comercial ou se apresentar como o único autor.",
    },
  },
  {
    icon: "❤️‍🩹",
    title: "Missão 6: IA para o Bem: Resolvendo Problemas Reais!",
    content:
      "A IA pode ser usada para grandes feitos: ajudar médicos a diagnosticar doenças mais cedo, proteger florestas do desmatamento e criar apps que ajudam pessoas com deficiência. Pense em um problema na sua escola ou bairro. Como uma IA poderia ajudar a criar uma solução?",
    quiz: {
      question: "Qual destes é um bom exemplo de 'IA para o Bem'?",
      answers: [
        {
          text: "Fazer um sistema que responde provas automaticamente.",
          correct: false,
        },
        {
          text: "Criar um app que otimiza rotas de ônibus para reduzir o trânsito.",
          correct: true,
        },
        { text: "Gerar fofocas sobre seus colegas.", correct: false },
      ],
      explanation:
        "A IA pode ser uma ferramenta poderosa para o bem, ajudando a resolver problemas reais em áreas como saúde, transporte e meio ambiente. O objetivo é usar a tecnologia para criar um impacto positivo na sociedade.",
    },
  },
  {
    icon: "🧑‍💻",
    title: "Missão 7: O Futuro é Híbrido: Você + IA",
    content:
      "A IA não vai roubar todos os empregos, mas vai mudar a forma como trabalhamos. Profissões do futuro exigirão que a gente saiba usar a IA como uma parceira. Foque em desenvolver habilidades que as máquinas não têm: criatividade, pensamento crítico, colaboração e empatia.",
    quiz: {
      question: "Qual habilidade se torna MAIS importante na era da IA?",
      answers: [
        { text: "Saber decorar muitas informações.", correct: false },
        { text: "Ser o mais rápido em digitar.", correct: false },
        {
          text: "Ser criativo e saber resolver problemas complexos.",
          correct: true,
        },
      ],
      explanation:
        "Na era da IA, habilidades humanas como criatividade, pensamento crítico e resolução de problemas complexos se tornam ainda mais valiosas. A IA processa os dados, e nós damos a direção estratégica e criativa.",
    },
  },
  // Missões Técnicas (Simplificadas)
  {
    icon: "✍️",
    title: "Missão 8: A Arte do Pedido: Como 'Conversar' com a IA",
    content:
      "Imagine a IA como um gênio da lâmpada. O 'prompt' é o seu pedido. Se você diz 'quero um desenho', o gênio fica confuso. Mas se o pedido for 'quero o desenho de um gato astronauta comendo pizza na lua', o resultado é incrível! Um bom prompt é um pedido claro, específico e cheio de detalhes. É a sua principal ferramenta para conseguir o que você quer da IA.",
    quiz: {
      question:
        "Qual pedido (ou 'prompt') daria um resultado melhor para criar uma imagem?",
      answers: [
        {
          text: "'Crie a imagem de um gato preto com olhos verdes, sentado numa pilha de livros, em estilo de pintura a óleo.'",
          correct: true,
        },
        { text: "'Desenhe um gato.'", correct: false },
        { text: "'Gato.'", correct: false },
      ],
      explanation:
        "Um 'prompt' (pedido) bem-sucedido é claro e rico em detalhes. Quanto mais específico o contexto, o estilo e os elementos que você descrever, mais fiel ao seu desejo será o resultado gerado pela IA.",
    },
  },
  {
    icon: "🧠",
    title: "Missão 9: Como a IA 'Adivinha' as Respostas?",
    content:
      "Você já viu como seu celular tenta completar suas frases? A IA de texto faz algo parecido, mas um milhão de vezes mais potente. Ela 'leu' quase toda a internet para aprender como as palavras se conectam. Quando você pergunta algo, ela não 'pensa', mas sim 'adivinha' a sequência de palavras que faz mais sentido para te responder, como um corretor automático superavançado.",
    quiz: {
      question:
        "Quando uma IA de texto 'alucina' e inventa uma informação, significa que:",
      answers: [
        {
          text: "Ela tentou 'adivinhar' a resposta, mas acabou criando uma informação que parece real, mas é falsa.",
          correct: true,
        },
        { text: "Ela ficou consciente e está sonhando.", correct: false },
        { text: "Ela acessou uma informação secreta.", correct: false },
      ],
      explanation:
        "Uma 'alucinação' de IA ocorre quando ela gera informações que parecem verdadeiras, mas são falsas. Ela não 'sabe' que está errada, apenas previu uma sequência de palavras que parecia fazer sentido. Por isso, checar fatos é crucial.",
    },
  },
  {
    icon: "✨",
    title: "Missão 10: A Mesma Mágica para Imagens e Sons",
    content:
      "A mesma 'mágica' de adivinhação de palavras funciona para outras coisas! Para criar uma imagem, a IA 'adivinha' qual o melhor grupo de pixels para vir a seguir, construindo a foto pedaço por pedaço. Para música, ela prevê a próxima nota musical. É tudo sobre prever o próximo passo com base em um vasto aprendizado de padrões.",
    quiz: {
      question: "O que as IAs que geram imagem, som e texto têm em comum?",
      answers: [
        { text: "Todas foram criadas pela mesma empresa.", correct: false },
        {
          text: "Todas precisam de um supercomputador para funcionar.",
          correct: false,
        },
        {
          text: "Todas usam uma lógica de 'adivinhar' a próxima parte de uma sequência (seja um pixel, nota ou palavra).",
          correct: true,
        },
      ],
      explanation:
        "A lógica por trás das IAs que geram texto, imagem ou som é a mesma: prever a próxima parte de uma sequência com base nos padrões que aprendeu. Seja a próxima palavra, o próximo pixel ou a próxima nota musical.",
    },
  },
];

const finalBossQuestion = {
  icon: "👑",
  title: "Missão Final: O Chefão dos Direitos Autorais",
  quiz: {
    question:
      "A inteligência artificial aprende com uma grande quantidade de textos e imagens da internet. Se ela gerar uma imagem no estilo de um artista famoso, de quem é o crédito da obra?",
    answers: [
      {
        text: "Totalmente da pessoa que escreveu o prompt, pois ela teve a ideia.",
        correct: false,
      },
      {
        text: "A questão dos direitos autorais é complexa e ainda está sendo discutida, não havendo uma resposta simples.",
        correct: true,
      },
      {
        text: "Do artista original, e o uso da imagem é sempre liberado.",
        correct: false,
      },
      {
        text: "Da empresa que criou a IA, pois ela é a dona da ferramenta.",
        correct: false,
      },
    ],
    explanation:
      "Correto! As leis sobre direitos autorais e IA ainda estão sendo definidas. Usar o estilo de um artista pode violar seus direitos, e a autoria da obra gerada é um debate complexo entre quem deu o comando, a empresa da IA e as fontes de dados usadas. É uma área cinzenta e importante para se ter atenção!",
  },
};

// --- LÓGICA DO JOGO ---

let score = 0;
let answeredQuestionsCount = 0;
const totalQuestions = missions.length;
const scoreDisplay = document.getElementById("score-display");

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function renderMissions() {
  const container = document.getElementById("missions-container");
  if (!container) return;

  missions.forEach((mission, index) => {
    // Mission Card
    const missionEl = document.createElement("div");
    missionEl.classList.add("mission");
    missionEl.id = `mission-${index + 1}`;

    // Title
    const titleEl = document.createElement("h2");
    titleEl.innerHTML = `<span class="mission-icon">${mission.icon}</span> ${mission.title}`;
    missionEl.appendChild(titleEl);

    // Content
    const contentEl = document.createElement("p");
    contentEl.innerText = mission.content;
    missionEl.appendChild(contentEl);

    // Quiz Container
    const quizContainer = document.createElement("div");
    quizContainer.classList.add("quiz-container");

    // Quiz Question
    const questionEl = document.createElement("div");
    questionEl.classList.add("question");
    questionEl.innerText = `Desafio: ${mission.quiz.question}`;
    quizContainer.appendChild(questionEl);

    // Answer Buttons
    const answersEl = document.createElement("div");
    answersEl.classList.add("btn-grid");

    const shuffledAnswers = shuffle(mission.quiz.answers);

    shuffledAnswers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      button.dataset.correct = answer.correct;
      button.addEventListener("click", selectAnswer);
      answersEl.appendChild(button);
    });

    quizContainer.appendChild(answersEl);
    missionEl.appendChild(quizContainer);
    container.appendChild(missionEl);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  if (selectedButton.disabled) {
    return;
  }

  answeredQuestionsCount++;
  const isCorrect = selectedButton.dataset.correct === "true";
  const answerGrid = selectedButton.parentElement;
  const missionEl = selectedButton.closest(".mission");

  // Use ID for robust mission data retrieval
  const missionIndex = parseInt(missionEl.id.split("-")[1]) - 1;
  const missionData = missions[missionIndex];

  // Defensive check
  if (!missionData) {
    console.error("Could not find mission data for element:", missionEl);
    return;
  }

  const explanation = missionData.quiz.explanation;

  if (isCorrect) {
    score += 10;
    scoreDisplay.innerText = `Pontos: ${score}`;
    robotSay("correct");
    missionEl.classList.add("mission-completed");
  } else {
    robotSay("wrong");
    selectedButton.classList.add("wrong");
  }

  // Disable all buttons and show the correct answer
  Array.from(answerGrid.children).forEach((button) => {
    // Only act on buttons
    if (button.tagName === "BUTTON") {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true; // Use disabled property
    }
  });

  // Add explanation text
  const explanationEl = document.createElement("p");
  explanationEl.innerText = `💡 ${explanation}`;
  explanationEl.classList.add("explanation-text", "fade-in");

  if (isCorrect) {
    explanationEl.classList.add("correct");
  } else {
    explanationEl.classList.add("wrong");
  }

  answerGrid.appendChild(explanationEl);

  if (answeredQuestionsCount === totalQuestions) {
    // Use a timeout to let the user see the last result
    setTimeout(showFinalBossQuestion, 2000);
  }
}

function showFinalBossQuestion() {
  const container = document.getElementById("final-boss-container");
  container.style.display = "block";

  container.innerHTML = `
        <h2 class="fade-in">${finalBossQuestion.icon} ${finalBossQuestion.title}</h2>
        <div class="quiz-container fade-in">
            <div class="question">${finalBossQuestion.quiz.question}</div>
            <div class="btn-grid">
                ${shuffle(finalBossQuestion.quiz.answers)
                  .map(
                    (answer) =>
                      `<button class="btn" data-correct="${answer.correct}">${answer.text}</button>`
                  )
                  .join("")}
            </div>
        </div>
    `;

  container.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", selectFinalBossAnswer);
  });

  container.scrollIntoView({ behavior: "smooth", block: "center" });
}

function selectFinalBossAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  const answerGrid = selectedButton.parentElement;

  if (isCorrect) {
    score += 50; // Bônus por acertar a questão final
    scoreDisplay.innerText = `Pontos: ${score}`;
    robotSay("correct");
  } else {
    robotSay("wrong");
    selectedButton.classList.add("wrong");
  }

  Array.from(answerGrid.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  const explanationEl = document.createElement("p");
  explanationEl.innerText = `💡 ${finalBossQuestion.quiz.explanation}`;
  explanationEl.classList.add("explanation-text", "fade-in");
  explanationEl.classList.add(isCorrect ? "correct" : "wrong");
  answerGrid.appendChild(explanationEl);

  setTimeout(displayFinalResults, 3000);
}

function displayFinalResults() {
  const resultsContainer = document.getElementById("final-results");
  let title, message;
  const maxScore = totalQuestions * 10 + 50;

  if (score >= maxScore * 0.9) {
    title = "Parabéns, Herói Digital Supremo! 🏆";
    message = `Você fez ${score} pontos e provou ser um mestre da IA! Seu conhecimento é inspirador. Continue explorando e usando a tecnologia para o bem! ✨`;
  } else if (score >= maxScore * 0.6) {
    title = "Parabéns, Herói Digital! 👍";
    message = `Você fez ${score} pontos e completou a jornada! Cada erro é um passo para o aprendizado. Continue curioso e atento no universo da IA!`;
  } else {
    title = "Jornada Concluída!";
    message = `Você fez ${score} pontos. A jornada do conhecimento está só começando! Reveja as missões, aprenda com os erros e continue se tornando um herói digital cada vez melhor.`;
  }

  resultsContainer.innerHTML = `
        <h2 class="fade-in">${title}</h2>
        <p class="fade-in">${message}</p>
    `;
  resultsContainer.style.display = "block";
  resultsContainer.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Inicia os scripts quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
  renderMissions();
});