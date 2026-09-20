import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 76rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'logo  . nav nav nav'
    'social social . . .'
    'hr hr hr hr hr'
    '. . . copy copy';
  padding: 4.5rem 0rem;
  text-align: center;

  @media (max-width: 430px) {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const Logo = styled.div`
  grid-area: logo;

  @media (max-width: 430px) {
    width: 248.39px;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const NavContainer = styled.div`
  grid-area: nav;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 430px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2.5rem;

  @media (max-width: 430px) {
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 0;
    align-items: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 430px) {
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0;
    margin-top: 0.75rem;
  }
`;

export const SocialList = styled.div`
  grid-area: social;
  width: 26.5rem;
  margin-bottom: 2rem;
  margin-left: 0.1rem;
  display: flex;
  gap: 1rem;

  a {
    font-size: 1.5rem;
    color: #0056b3;
    transition: color 0.2s;
    &:hover {
      color: #003366;
    }
  }

  @media (max-width: 430px) {
    width: 100%;
    margin-bottom: 0;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const Hr = styled.hr`
  grid-area: hr;

  @media (max-width: 430px) {
    border-top: 1px solid white;
    width: 95%;
  }
`;

export const Copyright = styled.p`
  grid-area: copy;
  font-size: 0.9rem;
  color: #fff;
  margin-top: 1rem;
  text-align: end;

  @media (max-width: 430px) {
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
