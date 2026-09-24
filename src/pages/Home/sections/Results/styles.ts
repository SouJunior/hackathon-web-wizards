import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';
import { SectionTitle, SectionParagraph } from '@/styles/global';

export const ResultsContainer = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 607px;
  min-width: 100%;
  background-color: ${colorPalette.secondaryColor};

  @media (max-width: 431px) {
    width: 100%;
    height: auto;
    padding: 32px 0 48px;
  }
`;

export const ResultTextContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 48px;
  margin-bottom: 48px;

  @media (max-width: 431px) {
    max-width: 382px;
    margin-bottom: 48px;
    justify-content: start;
    align-items: start;
  }
`;

export const ResultContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 56px;
  max-width: 960px;
  max-height: 264px;

  @media (max-width: 431px) {
    width: 100%;
    max-width: 100%;
    padding-top: 48px;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  max-width: 960px;
  height: 264px;
  justify-content: center;
  align-items: center;
  gap: 24px;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    justify-self: center;
    align-self: center;
  }

  @media (max-width: 431px) {
    width: 100%;
    max-width: 100%;
    padding: 0 24px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    height: auto;
    gap: 24px 16px;

    img {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const SectionResultTitle = styled(SectionTitle)`
  @media (max-width: 431px) {
    text-align: start;
  }
`;

export const SectionResultParagraph = styled(SectionParagraph)`
  @media (max-width: 431px) {
    text-align: start;
  }
`;
