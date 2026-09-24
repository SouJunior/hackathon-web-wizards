import {
  ResultsContainer,
  ResultContent,
  ResultTextContent,
  Logo,
  SectionResultTitle,
  SectionResultParagraph,
} from './styles';

import Porto from '@/assets/porto-logo.svg';
import Hitss from '@/assets/hitss-logo.svg';
import Icon from '@/assets/icon-logo.svg';
import IBM from '@/assets/IBM-logo.svg';
import Deloitte from '@/assets/deloitte-logo.svg';
import NTT from '@/assets/NTT-logo.svg';
import Athena from '@/assets/athena-logo.svg';
import BTG from '@/assets/BTG-logo.svg';

export function Results() {
  return (
    <ResultsContainer>
      <ResultTextContent>
        <SectionResultTitle>
          Onde nossos voluntários chegaram
        </SectionResultTitle>
        <SectionResultParagraph>
          Nossos voluntários levam para a carreira o conhecimento e a prática
          que construíram aqui.
        </SectionResultParagraph>
      </ResultTextContent>
      <ResultContent>
        <Logo>
          <img src={Porto} alt="Mascote da SouJunior" />
          <img src={Hitss} alt="Mascote da SouJunior" />
          <img src={Icon} alt="Mascote da SouJunior" />
          <img src={IBM} alt="Mascote da SouJunior" />
          <img src={Deloitte} alt="Mascote da SouJunior" />
          <img src={NTT} alt="Mascote da SouJunior" />
          <img src={Athena} alt="Mascote da SouJunior" />
          <img src={BTG} alt="Mascote da SouJunior" />
        </Logo>
      </ResultContent>
    </ResultsContainer>
  );
}
