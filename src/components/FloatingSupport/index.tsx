import { useEffect, useState } from 'react';
import { FabLink, BarLink } from './styles';
import icon from '@/assets/floating-support-icon.png';

const SUPPORT_URL = 'https://apoia.se/soujunior';

function computeVisible() {
  const startEl = document.getElementById('hero');
  const endEl = document.getElementById('cta');
  if (!startEl || !endEl) return false;

  // Posições absolutas no documento (estável, não depende da barra de
  // endereço do navegador aparecendo/sumindo durante o scroll no mobile).
  // Mesmo gatilho pro desktop e pro mobile, só muda o visual (FabLink vs
  // BarLink, via CSS).
  const startY = startEl.offsetTop + startEl.offsetHeight * 0.8;
  const endY = endEl.offsetTop;

  const scrollY = window.scrollY;

  return scrollY >= startY && scrollY < endY;
}

export function FloatingSupport() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    function update() {
      setVisible(computeVisible());
      ticking = false;
    }

    function onScrollOrResize() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', onScrollOrResize);
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  if (!visible) return null;

  const commonProps = {
    href: SUPPORT_URL,
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': 'Seja um apoiador',
  };

  return (
    <>
      <FabLink {...commonProps}>
        <img src={icon} alt="" />
      </FabLink>
      <BarLink {...commonProps}>Seja um Apoiador ♥</BarLink>
    </>
  );
}
