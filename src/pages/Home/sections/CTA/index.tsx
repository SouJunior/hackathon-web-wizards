import {
  CTATitle,
  CTACard,
  CTAContent,
  CTATextContent,
  ButtonContainer,
  CTAMascote,
  CTAContainer,
  CTAFirstParagraph,
  CTASecondParagraph,
} from './styles';
import { Button } from '@/components/Button';

import Mascote from '@/assets/CTAMascote.svg';

export function CTA() {
  return (
    <CTAContainer>
      <CTACard>
        <CTAContent>
          <CTATextContent>
            <CTATitle>Doe R$ 2,00</CTATitle>
            <CTAFirstParagraph>
              Esse pequeno valor faz a diferença!
            </CTAFirstParagraph>
            <CTASecondParagraph>
              Sua contribuição ajuda a manter experiências reais de aprendizado
              e desenvolvimento, apoiando profissionais em diferentes momentos
              da sua jornada na tecnologia.
            </CTASecondParagraph>
            <ButtonContainer>
              <Button
                to="https://apoia.se/soujunior"
                target="_blank"
                rel="noopener noreferrer"
                $contrast
              >
                Quero Apoiar!
              </Button>
            </ButtonContainer>
          </CTATextContent>
          <CTAMascote>
            <img src={Mascote} alt="Mascote da SouJunior" />
          </CTAMascote>
        </CTAContent>
      </CTACard>
    </CTAContainer>
  );
}
