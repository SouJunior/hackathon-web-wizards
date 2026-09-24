import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';

export const TestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 80px 0;
  scroll-margin-top: 90px;
  background: #f4f5f7;

  @media (max-width: 431px) {
    padding: 48px 0;
  }
`;

export const Title = styled.h2`
  color: ${colorPalette.thirdColor};
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
  padding: 0 1rem;

  @media (max-width: 431px) {
    font-size: 24px;
    margin-bottom: 32px;
  }
`;

export const CarouselTrack = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1216px;
  padding: 0 4rem;

  @media (max-width: 431px) {
    gap: 0.5rem;
    padding: 0 0.5rem;
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${colorPalette.thirdColor};
  font-size: 36px;
  cursor: pointer;
  flex-shrink: 0;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  @media (max-width: 431px) {
    width: 28px;
    height: 28px;
    font-size: 26px;
  }
`;

export const CardsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 431px) {
    gap: 1rem;
    padding: 20px 5%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc((100% - 3rem) / 3);
  scroll-snap-align: start;
  min-height: 400px;
  background: ${colorPalette.contrastColor};
  border-radius: 20px;
  padding: 2rem 1.75rem;
  box-shadow: 6px 8px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 431px) {
    flex-basis: 90%;
    scroll-snap-align: center;
  }
`;

export const TextCard = styled(Card)`
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  gap: 0.75rem;
  text-align: left;
`;

export const NameRole = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.div<{ $photo?: string }>`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${({ $photo }) =>
    $photo ? `url(${$photo}) center / cover` : colorPalette.secondaryColor};
  border: 2px solid ${colorPalette.secondaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colorPalette.thirdColor};
  font-weight: 700;
`;

export const Name = styled.p`
  color: ${colorPalette.paragraphColor};
  font-size: 19px;
  font-weight: 700;
  margin: 0;
`;

export const Role = styled.p`
  color: ${colorPalette.answerColor};
  font-size: 14px;
  margin: 0.25rem 0 0;
`;

export const Quote = styled.p`
  color: ${colorPalette.paragraphColor};
  font-size: 15.5px;
  line-height: 165%;
  margin: 0;
`;

export const Stars = styled.div`
  color: #ffc107;
  font-size: 19px;
  letter-spacing: 3px;
`;

export const VideoCard = styled(Card)`
  position: relative;
  padding: 0;
  overflow: hidden;
  justify-content: flex-start;
  background: linear-gradient(
    160deg,
    #3a3a3a 0%,
    #1a1a1a 60%,
    ${colorPalette.thirdColor} 140%
  );
  cursor: pointer;
`;

export const VideoElement = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VideoInfo = styled.div`
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  color: ${colorPalette.contrastColor};
`;

export const VideoName = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export const VideoRole = styled.p`
  font-size: 14px;
  margin: 0.25rem 0 0;
  opacity: 0.85;
`;

export const PlayButton = styled.button<{ $visible: boolean }>`
  position: absolute;
  top: 78%;
  left: 50%;
  transform: translate(-50%, -50%)
    scale(${({ $visible }) => ($visible ? 1 : 0.6)});
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 0;
  background: #a9c4fd;
  color: ${colorPalette.paragraphColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  z-index: 2;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
`;

export const PlayIcon = styled.span`
  width: 0;
  height: 0;
  margin-left: 4px;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-left: 14px solid ${colorPalette.paragraphColor};
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const Bullet = styled.button<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: ${({ $active }) =>
    $active ? colorPalette.primaryColor : colorPalette.borderColor};
  cursor: pointer;
`;
