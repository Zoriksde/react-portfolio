import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010606;
  padding: 100px 0;
`;

export const ProjectsWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 32px;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 440px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
`;

export const ProjectIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ProjectsHeading = styled.h2`
  font-size: 2.4rem;
  color: #fff;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 1.9rem;
  }
`;

export const ProjectHeading = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectSubtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 12px;
`;

export const ProjectBtn = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectBtnLink = styled.a`
  border-radius: 6px;
  background-color: #01bf71;
  white-space: nowrap;
  padding: 14px 28px;
  color: #010606;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  text-decoration: none;
`;
