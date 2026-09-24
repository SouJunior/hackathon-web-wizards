import { useEffect, useRef, useState } from 'react';
import {
  TestimonialsSection,
  Title,
  CarouselTrack,
  NavButton,
  CardsRow,
  TextCard,
  CardHeader,
  NameRole,
  Avatar,
  Name,
  Role,
  Quote,
  Stars,
  VideoCard,
  VideoElement,
  VideoInfo,
  VideoName,
  VideoRole,
  PlayButton,
  PlayIcon,
  Pagination,
  Bullet,
} from './styles';
import { testimonials } from './TestimonialsData';

const DESKTOP_CARDS_PER_PAGE = 3;

function computeCardsPerPage() {
  return window.innerWidth <= 431 ? 1 : DESKTOP_CARDS_PER_PAGE;
}

export function Testimonials() {
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(computeCardsPerPage);
  const [playingName, setPlayingName] = useState<string | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const isNavigatingRef = useRef(false);
  const navigateTimeoutRef = useRef<number | undefined>(undefined);

  const isMobile = cardsPerPage === 1;

  // Ordem sempre original (vídeo na 2ª posição, igual no desktop). No
  // mobile, o carrossel só começa já posicionado nele (ver useEffect
  // abaixo), sem precisar arrastar pra ver.
  const displayList = testimonials;
  const videoIndex = testimonials.findIndex((t) => t.type === 'video');

  const totalPages = Math.ceil(displayList.length / cardsPerPage);

  useEffect(() => {
    function handleResize() {
      setCardsPerPage(computeCardsPerPage());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // No mobile os cards ficam centralizados (scroll-snap-align: center); no
  // desktop, alinhados ao início da fileira de 3.
  function targetScrollLeft(row: HTMLDivElement, card: HTMLElement) {
    if (isMobile) {
      return card.offsetLeft - (row.clientWidth - card.clientWidth) / 2;
    }
    return card.offsetLeft;
  }

  // No mobile, já abre o carrossel posicionado no card de vídeo, sem
  // animação (a seção ainda nem está visível na tela nesse momento).
  useEffect(() => {
    if (!isMobile || videoIndex < 0) return;

    const row = rowRef.current;
    const card = row?.children[videoIndex] as HTMLElement | undefined;
    if (!row || !card) return;

    row.scrollLeft = targetScrollLeft(row, card);
    setPage(Math.floor(videoIndex / cardsPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  function stopPlaying() {
    if (playingName !== null) {
      videoRefs.current[playingName]?.pause();
      setPlayingName(null);
    }
  }

  function scrollToCard(targetIndex: number) {
    const row = rowRef.current;
    if (!row) return;

    const clampedIndex = Math.max(
      0,
      Math.min(targetIndex, displayList.length - 1),
    );
    const card = row.children[clampedIndex] as HTMLElement;
    if (card) {
      isNavigatingRef.current = true;
      window.clearTimeout(navigateTimeoutRef.current);
      navigateTimeoutRef.current = window.setTimeout(() => {
        isNavigatingRef.current = false;
      }, 600);
      row.scrollTo({ left: targetScrollLeft(row, card), behavior: 'smooth' });
    }
    setPage(Math.min(totalPages - 1, Math.floor(clampedIndex / cardsPerPage)));
    stopPlaying();
  }

  function goTo(nextPage: number) {
    const clamped = Math.max(0, Math.min(nextPage, totalPages - 1));
    scrollToCard(clamped * cardsPerPage);
  }

  function step(direction: 1 | -1) {
    const row = rowRef.current;
    if (!row) return;

    const cardWidth = row.children[0]?.clientWidth ?? 1;
    const currentIndex = Math.round(row.scrollLeft / cardWidth);
    scrollToCard(currentIndex + direction * cardsPerPage);
  }

  function handleScroll() {
    if (isNavigatingRef.current) return;

    const row = rowRef.current;
    if (!row) return;

    const cardWidth = row.children[0]?.clientWidth ?? 1;
    const index = Math.round(row.scrollLeft / cardWidth);
    setPage(Math.min(totalPages - 1, Math.floor(index / cardsPerPage)));
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const isTyping =
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.isContentEditable;
      if (isTyping) return;

      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cardsPerPage]);

  function toggleVideo(name: string) {
    const video = videoRefs.current[name];
    if (!video) return;

    if (playingName === name) {
      video.pause();
      setPlayingName(null);
    } else {
      if (playingName !== null) videoRefs.current[playingName]?.pause();
      video.play();
      setPlayingName(name);
    }
  }

  return (
    <TestimonialsSection id="depoimentos">
      <Title>Do voluntariado à primeira oportunidade</Title>

      <CarouselTrack>
        <NavButton
          type="button"
          aria-label="Depoimento anterior"
          onClick={() => step(-1)}
          disabled={page === 0}
        >
          ‹
        </NavButton>

        <CardsRow ref={rowRef} onScroll={handleScroll}>
          {displayList.map((testimonial) =>
            testimonial.type === 'video' ? (
              <VideoCard
                key={testimonial.name}
                onClick={() => toggleVideo(testimonial.name)}
              >
                <VideoElement
                  ref={(el) => {
                    videoRefs.current[testimonial.name] = el;
                  }}
                  src={testimonial.videoSrc || undefined}
                  poster={testimonial.poster}
                  playsInline
                  onEnded={() => setPlayingName(null)}
                />
                <PlayButton
                  type="button"
                  aria-label="Reproduzir depoimento em vídeo"
                  $visible={playingName !== testimonial.name}
                >
                  <PlayIcon />
                </PlayButton>
                <VideoInfo>
                  <VideoName>{testimonial.name}</VideoName>
                  <VideoRole>{testimonial.role}</VideoRole>
                </VideoInfo>
              </VideoCard>
            ) : (
              <TextCard key={testimonial.name}>
                <CardHeader>
                  <Avatar $photo={testimonial.photo} />
                  <NameRole>
                    <Name>{testimonial.name}</Name>
                    <Role>{testimonial.role}</Role>
                  </NameRole>
                </CardHeader>
                <Quote>&ldquo;{testimonial.quote}&rdquo;</Quote>
                <Stars>{'★'.repeat(testimonial.rating)}</Stars>
              </TextCard>
            ),
          )}
        </CardsRow>

        <NavButton
          type="button"
          aria-label="Próximo depoimento"
          onClick={() => step(1)}
          disabled={page === totalPages - 1}
        >
          ›
        </NavButton>
      </CarouselTrack>

      {totalPages > 1 && (
        <Pagination>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Bullet
              key={index}
              type="button"
              aria-label={`Ir para página ${index + 1}`}
              $active={index === page}
              onClick={() => goTo(index)}
            />
          ))}
        </Pagination>
      )}
    </TestimonialsSection>
  );
}
