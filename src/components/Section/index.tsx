import {
  SectionContainer,
  SectionWrapper,
  SectionRow,
  SectionColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  SectionImageColumn,
  ImgWrapper,
  Image,
} from "./elements";

interface SectionProps {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  topline: string;
  heading: string;
  subtitle: string;
  next_subtitle: string;
  imgStart: boolean;
  image: string;
  darkText: boolean;
}

const Section = ({
  id,
  lightBg,
  lightText,
  topline,
  heading,
  subtitle,
  next_subtitle,
  imgStart,
  image,
  darkText,
}: SectionProps) => {
  return (
    <>
      <SectionContainer id={id} lightBg={lightBg}>
        <SectionWrapper>
          <SectionRow imgStart={imgStart}>
            <SectionColumn>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{heading}</Heading>
                <Subtitle darkText={darkText}>{subtitle}</Subtitle>
                <Subtitle darkText={darkText}>{next_subtitle}</Subtitle>
              </TextWrapper>
            </SectionColumn>
            <SectionImageColumn>
              <ImgWrapper>
                <Image src={image} alt={topline} />
              </ImgWrapper>
            </SectionImageColumn>
          </SectionRow>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default Section;
