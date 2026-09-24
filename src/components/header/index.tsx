import { useState } from 'react';
import {
  HeaderContainer,
  RightGroup,
  LogoDesktop,
  LogoMobile,
  Nav,
  NavLink,
  SupportButton,
  MenuButton,
  MobileMenu,
} from './style';
import logoDesktop from '@/assets/sj-logo-header.svg';
import logoMobile from '@/assets/sj-logo-mobile.svg';
import menuIcon from '@/assets/menu.svg';
import { headerLinks, supportUrl } from '@/utils/headerLinks';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <a href="https://www.soujunior.tech/">
        <LogoDesktop src={logoDesktop} alt="Sou Junior" />
        <LogoMobile src={logoMobile} alt="Sou Junior" />
      </a>

      <RightGroup>
        <Nav aria-label="Navegação principal">
          {headerLinks.map((link) => (
            <NavLink key={link.label} href={link.to}>
              {link.label}
            </NavLink>
          ))}
        </Nav>

        <SupportButton
          href={supportUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Seja um Apoiador!
        </SupportButton>

        <MenuButton
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <img
            src={menuIcon}
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
          />
        </MenuButton>
      </RightGroup>

      {menuOpen && (
        <MobileMenu aria-label="Navegação principal">
          {headerLinks.map((link) => (
            <NavLink
              key={link.label}
              href={link.to}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <SupportButton
            href={supportUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Seja um Apoiador!
          </SupportButton>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
}
