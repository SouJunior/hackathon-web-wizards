import { SectionTitle, SectionParagraph } from '@/styles/global';

import { ServiceCard } from '@/components/ServiceCard';
import infraIcon from '@/assets/icons/serverIcon.svg';
import databaseIcon from '@/assets/icons/databaseIcon.svg';
import cloudIcon from '@/assets/icons/cloudIcon.svg';
import domainIcon from '@/assets/icons/globeIcon.svg';
import eventsIcon from '@/assets/icons/tvIcon.svg';
import megaphone from '@/assets/icons/megaphone.svg';

import {
  AreasContainer,
  AreasContent,
  AreasTextContent,
  ServicesGrid,
} from './styles';

const services = [
  {
    icon: infraIcon,
    title: 'Infraestrutura',
    description:
      'Manutenção da estrutura necessária para os projetos, incluindo ferramentas.',
  },
  {
    icon: databaseIcon,
    title: 'Banco de dados',
    description: 'Armazenamento e gerenciamento das informações da comunidade.',
  },
  {
    icon: cloudIcon,
    title: 'AWS Cloud',
    description: 'Custos de servidores e serviços em nuvem escaláveis.',
  },
  {
    icon: domainIcon,
    title: 'Domínio dos sites e Extras',
    description:
      'Manutenção da estrutura necessária para os projetos, incluindo ferramentas.',
  },
  {
    icon: eventsIcon,
    title: 'Eventos & Lives',
    description:
      'Ferramentas de streaming, licenças e transmissão para capacitação.',
  },
  {
    icon: megaphone,
    title: 'Marketing Digital',
    description:
      'Planejamento e execução de campanhas online para maximizar alcance e engajamento.',
  },
];

export function UseSupport() {
  return (
    <AreasContainer>
      <AreasContent>
        <AreasTextContent>
          <SectionTitle>Para onde vai o seu apoio?</SectionTitle>
          <SectionParagraph>
            Seu apoio ajuda a manter projetos, ferramentas e oportunidades que
            fazem a SouJunior acontecer.
          </SectionParagraph>
        </AreasTextContent>
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={<img src={service.icon} alt="" />}
              title={service.title}
              description={service.description}
            />
          ))}
        </ServicesGrid>
      </AreasContent>
    </AreasContainer>
  );
}
