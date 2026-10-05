import gabrielaPhoto from '@/assets/testimonials/gabriela carmo.png';
import pedroPhoto from '@/assets/testimonials/pedro vicente.png';
import priscillaPhoto from '@/assets/testimonials/priscilla souza.png';
import andersonPhoto from '@/assets/testimonials/anderson nunes.png';
import nathaliaPoster from '@/assets/testimonials/Nathalia Carvalho.png';

export interface TextTestimonial {
  type: 'text';
  name: string;
  role: string;
  quote: string;
  rating: number;
  photo?: string;
}

export interface VideoTestimonial {
  type: 'video';
  name: string;
  role: string;
  youtubeId: string;
  poster?: string;
}

export type Testimonial = TextTestimonial | VideoTestimonial;

export const testimonials: Testimonial[] = [
  {
    type: 'text',
    name: 'Gabriela Carmo',
    role: 'Produto',
    quote:
      'A SouJunior foi essencial na minha transição para Produto. A vivência em uma squad trouxe aprendizados reais e fez toda a diferença na minha carreira.',
    rating: 5,
    photo: gabrielaPhoto,
  },
  {
    type: 'video',
    name: 'Nathalia Carvalho',
    role: 'UX/UI Designer',
    youtubeId: '-T5JvXxnVUc',
    poster: nathaliaPoster,
  },
  {
    type: 'text',
    name: 'Pedro Vicente',
    role: 'UX/UI Designer',
    quote:
      'Foi um divisor de águas na minha vida. Sou muito grato por tudo que aprendi.',
    rating: 5,
    photo: pedroPhoto,
  },
  {
    type: 'text',
    name: 'Priscilla Souza',
    role: 'UI/UX Designer',
    quote:
      'Contribuir com a SouJunior é incrível! Aprendi muito com os projetos, fiz networking e troquei experiências.',
    rating: 5,
    photo: priscillaPhoto,
  },
  {
    type: 'text',
    name: 'Anderson Nunes',
    role: 'Front-end',
    quote:
      "Aprendi sobre desenvolvimento e empregabilidade. Melhorei meu perfil, me preparei e, após 6 meses, meu 'sim' chegou.",
    rating: 5,
    photo: andersonPhoto,
  },
];
