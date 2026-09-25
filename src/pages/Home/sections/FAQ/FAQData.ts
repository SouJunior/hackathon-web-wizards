export interface QuestionsAndAnswersItem {
  id: number;
  question: string;
  answer: string;
  linkLabel?: string;
  linkUrl?: string;
}

export const QUESTIONS_AND_ANSWERS: QuestionsAndAnswersItem[] = [
  {
    id: 1,
    question: 'Por que eu deveria apoiar a SouJunior?',
    answer:
      'Seu apoio ajuda a criar oportunidades para profissionais que estão entrando no mercado de trabalho, contribuindo para capacitação, infraestrutura e projetos que aproximam talentos de suas primeiras experiências profissionais. Cada contribuição ajuda a transformar potencial em oportunidade.',
  },
  {
    id: 2,
    question: 'De que outra forma eu posso apoiar a SouJunior?',
    answer:
      'Além da contribuição financeira, você pode apoiar de outras formas: divulgando a SouJunior nas suas redes (YouTube, LinkedIn e outras), participando como palestrante em nossos eventos ou se candidatando para atuar como voluntário em nossos projetos.',
    linkLabel: 'Clique aqui.',
    linkUrl: 'https://www.soujunior.tech/apoiar',
  },
  {
    id: 3,
    question: 'Como o meu apoio ajuda profissionais que estão começando?',
    answer:
      'Seu apoio contribui para oferecer capacitação, mentorias e experiências práticas, preparando novos profissionais para ingressarem no mercado com mais confiança e qualificação.',
  },
  {
    id: 4,
    question: 'Quem são as pessoas beneficiadas pelo projeto?',
    answer:
      'A SouJunior beneficia estudantes, recém-formados e pessoas em transição de carreira que buscam adquirir experiência prática e conquistar sua primeira oportunidade profissional.',
  },
];
