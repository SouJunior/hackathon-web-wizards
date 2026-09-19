export interface QuestionsAndAnswersItem {
  id: number;
  question: string;
  answer: string;
}

export const QUESTIONS_AND_ANSWERS: QuestionsAndAnswersItem[] = [
  {
    id: 1,
    question: 'Qual o objetivo do SouJunior?',
    answer:
      'A SouJunior tem como missão apoiar e preparar profissionais juniores para o mercado de tecnologia por meio do voluntariado, promovendo aprendizado, conexão e desenvolvimento na prática.',
  },
  {
    id: 2,
    question: 'Como posso participar da Comunidade SouJunior?',
    answer:
      'Você pode entrar na nossa comunidade acessando o servidor do SouJunior no Discord e no GitHub. Para se tornar membro oficialmente, é só ir no menu "Nossas Iniciativas" no site, clicar em "Conheça outras iniciativas" e preencher o formulário de candidatura. Depois disso, nosso time entra em contato com você!',
  },
  {
    id: 3,
    question: 'A SouJunior oferece ajuda de custo para voluntários?',
    answer:
      'Não. Todas as atividades no SouJunior são voluntárias e realizadas de forma remota (home office).',
  },
  {
    id: 4,
    question:
      'A SouJunior ajuda os juniores a entrarem no mercado de trabalho?',
    answer:
      'Sim. A SouJunior contribui para a inserção de profissionais juniores no mercado de trabalho ao promover o desenvolvimento de competências técnicas e comportamentais por meio de vivências práticas em um ambiente colaborativo. Nossa atuação é focada na formação integral do júnior, incentivando o protagonismo, a responsabilidade e a construção de repertório profissional relevante para os desafios do início de carreira.',
  },
];
