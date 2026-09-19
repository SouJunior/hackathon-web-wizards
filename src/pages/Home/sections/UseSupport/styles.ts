import styled from 'styled-components';

export const AreasContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 739px;

  @media (max-width: 431px) {
    height: 1188px;
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
  max-width: 1090px;
  height: 112px;
  margin-bottom: 56px;

  @media (max-width: 431px) {
    width: 382px;
    max-width: 382px;
    margin-bottom: 48px;
    align-items: start;
  }
`;

export const ServicesContainer = styled.section`
  width: 100%;
  padding: 40px 46px;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px 34px;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
