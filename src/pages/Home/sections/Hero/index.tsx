import { ContrastParagraph } from '@/styles/global';

import {
  HeroTitle,
  HeroContainer,
  AreasContent,
  HeroTextContent,
  ButtonContainer,
  HeroMascote,
  DesignLeft,
  DesignRight,
} from './styles';
import { Button } from '@/components/Button';

import Mascote from '@/assets/heroMascote.svg';
import Design from '@/assets/designHero.svg';

export function Hero() {
  return (
    <HeroContainer>
      <AreasContent>
        <DesignLeft>
          <img src={Design} alt="" />
        </DesignLeft>

        <DesignRight>
          <img src={Design} alt="" />
        </DesignRight>
        <HeroTextContent>
          <HeroTitle>Mais de 50% das vagas pedem experiência!</HeroTitle>
          <ContrastParagraph>
            A SouJunior capacita talentos com experiências reais, preparando
            profissionais para entrar no mercado com confiança.
          </ContrastParagraph>
        </HeroTextContent>
        <ButtonContainer>
          <Button
            to="https://apoia.se/soujunior"
            target="_blank"
            rel="noopener noreferrer"
            $contrast
          >
            Quero Apoiar!
          </Button>
          <Button
            to="https://www.soujunior.tech/sobre-nos"
            target="_blank"
            rel="noopener noreferrer"
            $hideMobile
          >
            Conheça o projeto!
          </Button>
        </ButtonContainer>
        <HeroMascote>
          <img src={Mascote} alt="Mascote da SouJunior" />
        </HeroMascote>
      </AreasContent>
    </HeroContainer>
  );
}
