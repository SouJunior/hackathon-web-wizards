import type { ReactNode } from 'react';
import { ChallengeCardContainer, IconContainer, Content } from './style';

interface ChallengeCardProps {
  image: ReactNode;
  name: string;
  position: string;
  challenge: string;
}

export function ChallengeCard({
  image,
  name,
  position,
  challenge,
}: ChallengeCardProps) {
  return (
    <ChallengeCardContainer>
      <IconContainer>{image}</IconContainer>
      <Content>
        <h2>{name}</h2>
        <h3>{position}</h3>
        <p>{challenge}</p>
      </Content>
    </ChallengeCardContainer>
  );
}
