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
        <SectionResultTitle>Onde nosos voluntários chegaram</SectionResultTitle>
        <SectionResultParagraph>
          Nossos voluntários levam para a carreira o conhecimento e a prática
          que construíram aqui.
        </SectionResultParagraph>
      </ResultTextContent>
      <ResultContent>
        <Logo>
          <img src={Porto} alt="Logo da empresa Porto" />
          <img src={Hitss} alt="Logo da empresa HITSS" />
          <img src={Icon} alt="Logo da empresa Icon Solutions" />
          <img src={IBM} alt="Logo da empresa IBM" />
          <img src={Deloitte} alt="Logo da empresa Deloitte." />
          <img src={NTT} alt="Logo da empresa NTT Data" />
          <img src={Athena} alt="Logo da empresa Athena Saúde" />
          <img src={BTG} alt="Logo da empresa BTG Pactual" />
        </Logo>
      </ResultContent>
    </ResultsContainer>
  );
}
