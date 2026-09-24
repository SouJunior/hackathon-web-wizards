import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  background: ${colorPalette.contrastColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const LogoDesktop = styled.img`
  height: 40px;

  @media (max-width: 430px) {
    display: none;
  }
`;

export const LogoMobile = styled.img`
  display: none;

  @media (max-width: 430px) {
    display: block;
    height: 32px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 430px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${colorPalette.primaryColor};
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: ${colorPalette.thirdColor};
  }
`;

export const SupportButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${colorPalette.primaryColor};
  background: ${colorPalette.contrastColor};
  border: 2px solid ${colorPalette.primaryColor};
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${colorPalette.primaryColor};
    color: ${colorPalette.contrastColor};
  }

  @media (max-width: 430px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${colorPalette.secondaryColor};
  }

  @media (max-width: 430px) {
    display: flex;
  }
`;

export const MobileMenu = styled.nav`
  position: absolute;
  top: 100%;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  background: ${colorPalette.contrastColor};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;

  ${SupportButton} {
    display: inline-flex;
  }
`;
