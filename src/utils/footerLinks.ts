import discordIcon from '@/assets/social/discord.png';
import facebookIcon from '@/assets/social/facebook.png';
import githubIcon from '@/assets/social/github.png';
import instagramIcon from '@/assets/social/instagram.png';
import linkedinIcon from '@/assets/social/linkedin.png';
import twitchIcon from '@/assets/social/twitch.png';
import xIcon from '@/assets/social/x.png';
import youtubeIcon from '@/assets/social/youtube.png';

export const footerLinks = [
  { label: 'Conheça a SouJunior', to: '#' },
  { label: 'Sobre Nós', to: '#' },
  { label: 'Missão, Valores e Visão', to: '#' },
];

export const footerLinks2 = [
  { label: 'Fale Conosco', to: '#' },
  { label: 'FAQ', to: '#faq' },
  { label: 'Ouvidoria', to: '#' },
];

export const footerLinks3 = [
  { label: 'Faça Parte', to: 'https://stars.soujunior.tech/' },
];

export const socialLinks = [
  {
    icon: linkedinIcon,
    to: 'https://www.linkedin.com/company/soujunior',
    label: 'LinkedIn',
  },
  {
    icon: githubIcon,
    to: 'https://github.com/SouJunior',
    label: 'GitHub',
  },
  {
    icon: discordIcon,
    to: 'https://discord.com/invite/soujunior-community-759176734460346423',
    label: 'Discord',
  },
  {
    icon: youtubeIcon,
    to: 'https://www.youtube.com/@soujuniortech',
    label: 'YouTube',
  },
  {
    icon: xIcon,
    to: 'https://x.com/SouJunior_Tech',
    label: 'X',
  },
  {
    icon: instagramIcon,
    to: 'https://www.instagram.com/soujunior.tech/',
    label: 'Instagram',
  },
  {
    icon: facebookIcon,
    to: 'https://www.facebook.com/people/SouJunior/100086671131030/',
    label: 'Facebook',
  },
  {
    icon: twitchIcon,
    to: 'https://www.twitch.tv/soujuniortech',
    label: 'Twitch',
  },
];

export const copyright = `© ${new Date().getFullYear()} Sou Junior. Todos os direitos reservados.`;
