import { FaGithub } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  SocialMediaContainer,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Algorithms Specialist</FooterLinkTitle>
              <FooterLink to="home" smooth>
                Algorithms & Data Structures
              </FooterLink>
              <FooterLink to="home" smooth>
                Machine Learning & Neural Networks
              </FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Fullstack Developer</FooterLinkTitle>
              <FooterLink to="fullstack" smooth>
                UI / UX Design & REST APIs
              </FooterLink>
              <FooterLink to="fullstack" smooth>
                Design Patterns & OOP Concepts
              </FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Creativity</FooterLinkTitle>
              <FooterLink to="creativity" smooth>
                Analyzing & Inventing
              </FooterLink>
              <FooterLink to="creativity" smooth>
                Visualizing & Helping
              </FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Projects</FooterLinkTitle>
              <FooterLink to="projects" smooth>
                Pathfinding Visualizer
              </FooterLink>
              <FooterLink to="projects" smooth>
                Sorting Visualizer
              </FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMediaContainer>
          <SocialMediaWrapper>
            <SocialLogo>przybysz</SocialLogo>
            <WebsiteRights>
              przybysz &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/Zoriksde"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMediaContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
