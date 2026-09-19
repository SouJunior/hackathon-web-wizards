import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';

export const ServiceCardContainer = styled.article`
  display: flex;
  gap: 10px;
  width: 403px;
  min-height: 138px;
  padding: 24px 10px 18px 10px;
  border: 2px solid ${colorPalette.primaryColor};
  border-radius: 6px;
  background-color: #ffffff;

  @media (max-width: 431px) {
    min-height: 129px;
    max-width: 382px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  color: #3c7ef9;
  background-color: #a9c4fd;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    margin: 0;
    color: ${colorPalette.titleColor};
    font-size: 22px;
    font-weight: 600;
    line-height: 24px;
  }

  p {
    margin: 0;
    font-family: 'Funnel Sans', sans-serif;
    color: ${colorPalette.paragraphColor};
    font-size: 16px;
    font-weight: 500;
    line-height: 157%;
  }
`;
