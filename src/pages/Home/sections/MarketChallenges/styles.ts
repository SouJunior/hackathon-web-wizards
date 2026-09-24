import styled from 'styled-components';

import { SectionTitle, SectionParagraph } from '@/styles/global';

export const AreasContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 770px;

  @media (max-width: 431px) {
    height: 673px;
    width: 100%;
  }
`;

export const AreasContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1280px;

  @media (max-width: 431px) {
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const AreasTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 431px) {
    width: 382px;
    max-width: 382px;
  }
`;

export const ServicesContainer = styled.section`
  width: 100%;
  padding: 40px 46px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 28px 44px;
  width: fit-content;
  max-width: 100%;
  margin-top: 147.5px;

  @media (max-width: 431px) {
    flex-direction: column;
    margin-top: 48px;
  }
`;

export const SectionChallengeTitle = styled(SectionTitle)`
  @media (max-width: 431px) {
    text-align: start;
  }
`;

export const SectionChallengeParagraph = styled(SectionParagraph)`
  @media (max-width: 431px) {
    text-align: start;
  }
`;
