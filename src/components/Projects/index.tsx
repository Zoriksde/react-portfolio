import {
  ProjectsContainer,
  ProjectsHeading,
  ProjectsWrapper,
  ProjectCard,
  ProjectIcon,
  ProjectHeading,
  ProjectSubtitle,
  ProjectBtn,
  ProjectBtnLink,
} from "./elements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsHeading>Some of my works...</ProjectsHeading>
      <ProjectsWrapper>
        <ProjectCard>
          <ProjectIcon src="../../assets/pathfinding.svg" />
          <ProjectHeading>Pathfinding Visualizer</ProjectHeading>
          <ProjectSubtitle>
            Visualization of common pathfinding algorithms, maze generators etc.
          </ProjectSubtitle>
          <ProjectBtn>
            <ProjectBtnLink
              href="https://react-pathfinding.vercel.app/"
              target="_blank"
              aria-label="pathfinding"
            >
              Show
            </ProjectBtnLink>
          </ProjectBtn>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src="../../assets/sorting.svg" />
          <ProjectHeading>Sorting Visualizer</ProjectHeading>
          <ProjectSubtitle>
            Visualization of common sorting algorithms.
          </ProjectSubtitle>
          <ProjectBtn>
            <ProjectBtnLink
              href="https://react-sorting.vercel.app/"
              target="_blank"
              aria-label="sorting"
            >
              Show
            </ProjectBtnLink>
          </ProjectBtn>
        </ProjectCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
