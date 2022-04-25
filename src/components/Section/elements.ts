import styled from "styled-components";

interface SectionContainerProps {
  lightBg: boolean;
  id: string;
}

interface SectionRowProps {
  imgStart: boolean;
}

interface HeadingProps {
  lightText: boolean;
}

interface SubtitleProps {
  darkText: boolean;
}

interface ImageProps {
  src: string;
  alt: string;
}

export const SectionContainer = styled.section<SectionContainerProps>`
  color: #fff;
  background-color: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const SectionWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const SectionRow = styled.div<SectionRowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};
  gap: 120px;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`;

export const SectionColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const SectionImageColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 640px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h2<HeadingProps>`
  margin-bottom: 24px;
  font-size: 38px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p<SubtitleProps>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#f7f8fa")};
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
