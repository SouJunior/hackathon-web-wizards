import {
  BigNumbersContainer,
  BigNumbersContent,
  BigNumbersTextContent,
  BigNumbersTitle,
  BigNumbersHighlight,
  BigNumbersDescription,
  NumbersContainer,
  NumberCard,
  NumberValue,
  NumberDescription,
  BigNumbersImage,
  DesignRight,
  DesignCircle,
} from './styles';

import TypeIt from 'typeit-react';

import Woman from '@/assets/big-numbers-woman.svg';
import Design from '@/assets/designBigNumbers.svg';
import Circle from '@/assets/designCircle.svg';

const numbers = [
  {
    value: '+50',
    description: 'Primeiras oportunidades',
  },
  {
    value: '+110',
    description: 'Voluntários',
  },
  {
    value: '#1',
    description: 'Comunidade Tech',
  },
];

export function BigNumbers() {
  return (
    <BigNumbersContainer>
      <DesignRight>
        <img src={Design} alt="" />
      </DesignRight>
      <DesignCircle>
        <img src={Circle} alt="" />
      </DesignCircle>

      <BigNumbersContent>
        <BigNumbersTextContent>
          <BigNumbersTitle>
            Profissionais de
            <BigNumbersHighlight>
              <TypeIt
                options={{
                  speed: 75,
                  loop: true,
                  waitUntilVisible: true,
                }}
                getBeforeInit={(instance) => {
                  instance
                    .type('ARQUITETURA')
                    .pause(750)
                    .delete()
                    .pause(500)
                    .type('NUTRIÇÃO')
                    .pause(750)
                    .delete()
                    .pause(500)
                    .type('FISIOTERAPIA')
                    .pause(750)
                    .delete()
                    .type('PUBLICIDADE')
                    .pause(750)
                    .delete()
                    .type('ENFERMAGEM')
                    .pause(750)
                    .delete();

                  return instance;
                }}
              />
            </BigNumbersHighlight>
            migraram para tecnologia com a SouJunior!
          </BigNumbersTitle>

          <BigNumbersDescription />

          <NumbersContainer>
            {numbers.map((number) => (
              <NumberCard key={number.description}>
                <NumberValue>{number.value}</NumberValue>
                <NumberDescription>{number.description}</NumberDescription>
              </NumberCard>
            ))}
          </NumbersContainer>
        </BigNumbersTextContent>

        <BigNumbersImage>
          <img src={Woman} alt="Profissional de arquitetura" />
        </BigNumbersImage>
      </BigNumbersContent>
    </BigNumbersContainer>
  );
}
