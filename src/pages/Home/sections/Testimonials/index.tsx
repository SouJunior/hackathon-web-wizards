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

const CARDS_PER_PAGE = 3;
const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);

export function Testimonials() {
  const [page, setPage] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const isNavigatingRef = useRef(false);
  const navigateTimeoutRef = useRef<number | undefined>(undefined);

  function stopPlaying() {
    if (playingIndex !== null) {
      videoRefs.current[playingIndex]?.pause();
      setPlayingIndex(null);
    }
  }

  function goTo(nextPage: number) {
    const row = rowRef.current;
    if (!row) return;

    const clamped = Math.max(0, Math.min(nextPage, totalPages - 1));
    const card = row.children[clamped * CARDS_PER_PAGE] as HTMLElement;
    if (card) {
      isNavigatingRef.current = true;
      window.clearTimeout(navigateTimeoutRef.current);
      navigateTimeoutRef.current = window.setTimeout(() => {
        isNavigatingRef.current = false;
      }, 600);
      row.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
    }
    setPage(clamped);
    stopPlaying();
  }

  function handleScroll() {
    if (isNavigatingRef.current) return;

    const row = rowRef.current;
    if (!row) return;

    const cardWidth = row.children[0]?.clientWidth ?? 1;
    const index = Math.round(row.scrollLeft / cardWidth);
    setPage(Math.min(totalPages - 1, Math.floor(index / CARDS_PER_PAGE)));
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const isTyping =
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.isContentEditable;
      if (isTyping) return;

      if (e.key === 'ArrowRight') goTo(page + 1);
      if (e.key === 'ArrowLeft') goTo(page - 1);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page]);

  function toggleVideo(index: number) {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) videoRefs.current[playingIndex]?.pause();
      video.play();
      setPlayingIndex(index);
    }
  }

  return (
    <TestimonialsSection id="depoimentos">
      <Title>Do voluntariado à primeira oportunidade</Title>

      <CarouselTrack>
        <NavButton
          type="button"
          aria-label="Depoimento anterior"
          onClick={() => goTo(page - 1)}
          disabled={page === 0}
        >
          ‹
        </NavButton>

        <CardsRow ref={rowRef} onScroll={handleScroll}>
          {testimonials.map((testimonial, index) =>
            testimonial.type === 'video' ? (
              <VideoCard
                key={testimonial.name}
                onClick={() => toggleVideo(index)}
              >
                <VideoElement
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={testimonial.videoSrc || undefined}
                  poster={testimonial.poster}
                  playsInline
                  onEnded={() => setPlayingIndex(null)}
                />
                <PlayButton
                  type="button"
                  aria-label="Reproduzir depoimento em vídeo"
                  $visible={playingIndex !== index}
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
          onClick={() => goTo(page + 1)}
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
