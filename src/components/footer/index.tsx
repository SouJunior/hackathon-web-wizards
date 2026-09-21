import {
  FooterContainer,
  Nav,
  NavTitle,
  SocialList,
  Copyright,
  Logo,
  Hr,
  NavContainer,
  ContentWrapper,
} from './style';
import { Link } from '../common/link';
import { Image } from '../common/image';
import logoImage from '@/assets/sj-logo-footer.png';
import {
  footerLinks,
  footerLinksTitle,
  footerLinks2,
  footerLinks2Title,
  footerLinks3,
  footerLinks3Title,
  socialLinks,
  copyright,
} from '@/utils/footerLinks';

export function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#3C7EF9',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2.5rem',
      }}
    >
      <FooterContainer>
        <Logo>
          <a
            href="https://www.soujunior.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={logoImage}
              alt="Sou Junior - Logo da organização que impulsiona carreiras em tecnologia"
              role="img"
            />
          </a>
        </Logo>
        <NavContainer>
          <ContentWrapper>
            <Nav>
              <NavTitle>{footerLinksTitle}</NavTitle>
              {footerLinks.map((link) => {
                return (
                  <Link key={link.label} to={link.to} color="#fff" size={16}>
                    {link.label}
                  </Link>
                );
              })}
            </Nav>
            <Nav>
              <NavTitle>{footerLinks2Title}</NavTitle>
              {footerLinks2.map((link) => (
                <Link key={link.label} to={link.to} color="#fff" size={16}>
                  {link.label}
                </Link>
              ))}
            </Nav>
            <Nav>
              <NavTitle>{footerLinks3Title}</NavTitle>
              {footerLinks3.map((link) => (
                <Link key={link.label} to={link.to} color="#fff" size={16}>
                  {link.label}
                </Link>
              ))}
            </Nav>
          </ContentWrapper>
        </NavContainer>
        {socialLinks && (
          <SocialList>
            {socialLinks.map((social) => (
              <Link key={social.to} to={social.to} img alt={social.label}>
                {social.icon}
              </Link>
            ))}
          </SocialList>
        )}

        <Hr />

        {copyright && <Copyright>{copyright}</Copyright>}
      </FooterContainer>
    </div>
  );
}
