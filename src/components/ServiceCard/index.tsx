import type { ReactNode } from 'react';
import { ServiceCardContainer, IconContainer, Content } from './style';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <ServiceCardContainer>
      <IconContainer>{icon}</IconContainer>
      <Content>
        <h3>{title}</h3>
        <p>{description}</p>
      </Content>
    </ServiceCardContainer>
  );
}
