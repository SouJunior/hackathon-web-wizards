interface ImageProps {
  src: string;
  alt: string;
  role?: string;
}

export function Image({ src, alt, role }: ImageProps) {
  return <img src={src} alt={alt} role={role} />;
}
