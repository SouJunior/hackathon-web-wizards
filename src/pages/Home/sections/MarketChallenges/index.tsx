import { ChallengeCard } from '@/components/ChallengeCard';
import Thiago from '@/assets/Thiago.svg';
import Miriam from '@/assets/Miriam.svg';

import {
  AreasContainer,
  AreasContent,
  AreasTextContent,
  CardContainer,
  SectionChallengeTitle,
  SectionChallengeParagraph,
} from './styles';

const challenges = [
  {
    image: Thiago,
    name: 'Thiago Guimarães',
    position: 'UX/UI Designer',
    challenge:
      '“Estou em transição de carreira e quero atuar na área, mas ainda não tenho experiência.”',
  },
  {
    image: Miriam,
    name: 'Miriam Ferraz',
    position: 'Tech Recruiter',
    challenge:
      '“Quero contratar, mas preciso de alguém preparado para a rotina do mercado.”',
  },
];

export function MarketChallenges() {
  return (
    <AreasContainer id="market-challenges">
      <AreasContent>
        <AreasTextContent>
          <SectionChallengeTitle>
            Hoje o mercado enfrenta dois desafios.
          </SectionChallengeTitle>
          <SectionChallengeParagraph>
            Profissionais precisam de experiência e empresas precisam de
            profissionais preparados.
          </SectionChallengeParagraph>
        </AreasTextContent>
        <CardContainer>
          {challenges.map((challenge) => (
            <ChallengeCard
              key={challenge.name}
              image={<img src={challenge.image} alt="" />}
              name={challenge.name}
              challenge={challenge.challenge}
              position={challenge.position}
            />
          ))}
        </CardContainer>
      </AreasContent>
    </AreasContainer>
  );
}
