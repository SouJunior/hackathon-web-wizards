import { useState } from 'react';

import { SectionTitle } from '@/styles/global';

import {
  FAQContainer,
  DoubtContainer,
  QuestionsAndAnswers,
  QuestionsAndAnswersContainer,
  ParagraphFAQSection,
  DoubtButton,
  AnswerLink,
  QuestionContainer,
  Questions,
  Answers,
  LinkContainer,
} from './styles';

import { QUESTIONS_AND_ANSWERS } from './FAQData';

import Arrow from '@/assets/icons/arrow.svg';

export function FAQ() {
  const [openResponse, setOpenResponse] = useState<number[]>([]);

  const toggleQuestion = (id: number) => {
    setOpenResponse((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <FAQContainer id="faq">
      <SectionTitle>Perguntas Frequentes</SectionTitle>
      <ParagraphFAQSection>Olá! Como podemos te ajudar?</ParagraphFAQSection>

      <DoubtContainer>
        <QuestionsAndAnswersContainer>
          {QUESTIONS_AND_ANSWERS.map((item) => (
            <QuestionsAndAnswers
              key={item.id}
              $active={openResponse.includes(item.id)}
            >
              <QuestionContainer
                onClick={() => toggleQuestion(item.id)}
                role="button"
                tabIndex={0}
                aria-expanded={openResponse.includes(item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleQuestion(item.id);
                  }
                }}
              >
                <Questions>{item.question}</Questions>

                <img
                  src={Arrow}
                  alt=""
                  width={24}
                  height={24}
                  style={{
                    transform: openResponse.includes(item.id)
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                    transition: '0.2s',
                  }}
                />
              </QuestionContainer>

              {openResponse.includes(item.id) && (
                <Answers>
                  {item.answer}
                  {item.linkUrl && (
                    <>
                      {' '}
                      <AnswerLink
                        href={item.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.linkLabel}
                      </AnswerLink>
                    </>
                  )}
                </Answers>
              )}
            </QuestionsAndAnswers>
          ))}
        </QuestionsAndAnswersContainer>

        <LinkContainer>
          <ParagraphFAQSection>Não encontrou a sua dúvida?</ParagraphFAQSection>
          <DoubtButton
            href="https://www.soujunior.tech/faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pergunte Aqui!
          </DoubtButton>
        </LinkContainer>
      </DoubtContainer>
    </FAQContainer>
  );
}
