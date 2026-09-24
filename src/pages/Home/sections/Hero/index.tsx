import { ContrastParagraph } from '@/styles/global';

import {
  HeroTitle,
  HeroCall,
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
    <HeroContainer id="hero">
      <AreasContent>
        <DesignLeft>
          <img src={Design} alt="" />
        </DesignLeft>

        <DesignRight>
          <img src={Design} alt="" />
        </DesignRight>
        <HeroTextContent>
          <HeroCall>DOE R$ 2,00 E FAÇA PARTE DESSA MUDANÇA.</HeroCall>
          <HeroTitle>Como ter experiência sem oportunidade?</HeroTitle>
          <ContrastParagraph>
            A falta de experiência é a maior obstáculo para 42,8% das pessoas. A
            SouJunior elimina essa barreira e oferece vivência real de mercado.
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
