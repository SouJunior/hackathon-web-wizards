import { colorPalette } from '@/styles/colorPalette';
import styled from 'styled-components';

interface QuestionsAndAnswersProps {
  $active?: boolean;
}

export const FAQContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 96px;
  padding-bottom: 96px;

  @media (max-width: 431px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const SectionQuestionsTitle = styled.h2`
  color: ${colorPalette.thirdColor};
  font-size: 40px;
  text-align: center;
  margin-top: 70px;
  line-height: 150%;
  font-weight: 700;

  @media (max-width: 431px) {
    font-size: 28px;
  }
`;

export const QuestionsAndAnswers = styled.div<QuestionsAndAnswersProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  padding: 20px 0 10px 10px;
  border-bottom: 1px solid ${colorPalette.borderColor};
  border-radius: ${({ $active }) => ($active ? '0 0 4px 4px' : '0')};

  @media (max-width: 431px) {
    width: 100%;
    padding-left: 10px;
  }
`;

export const ParagraphFAQSection = styled.p`
  color: ${colorPalette.paragraphColor};
  font-size: 20px;
  text-align: center;
  line-height: 200%;
  font-weight: 500;

  @media (max-width: 431px) {
    font-size: 16px;
    line-height: 160%;
    font-weight: 400;
  }
`;

export const DoubtContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 56px;

  @media (max-width: 431px) {
    margin-top: 40px;
  }
`;

export const QuestionsAndAnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  margin-bottom: 24px;

  @media (max-width: 431px) {
    width: min(366px, calc(100vw - 32px));
  }
`;

export const DoubtButton = styled.a`
  font-size: 20px;
  color: ${colorPalette.primaryColor};
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 700;
  line-height: 160%;
  margin-left: 5px;

  @media (max-width: 431px) {
    font-size: 18px;
    margin-left: 0;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 960px;
  gap: 12px;
  padding-right: 15px;

  @media (max-width: 431px) {
    width: 100%;
    padding-right: 10px;
  }
`;

export const Questions = styled.p`
  color: ${colorPalette.paragraphColor};
  font-size: 24px;
  line-height: 133%;
  font-weight: 500;
  word-break: break-word;
  overflow-wrap: break-word;
  margin: 0;

  @media (max-width: 431px) {
    font-size: 20px;
  }
`;

export const Answers = styled.p`
  color: ${colorPalette.answerColor};
  font-size: 16px;
  text-align: start;
  line-height: 150%;
  font-weight: 400;
  margin: 9.6px 0 0;
  padding: 0 20px 10px 10px;
  font-family: 'Funnel Sans', sans-serif;

  @media (max-width: 431px) {
    padding-left: 0;
    padding-right: 20px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 960px;
  max-width: 100%;
  height: 72px;
  background-color: ${colorPalette.secondaryColor};
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 40px;

  @media (max-width: 431px) {
    flex-direction: column;
    width: min(366px, calc(100vw - 32px));
    height: 102px;
  }
`;
