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
            Visualization of common pathfinding algorithms and maze generators.
            Project written in ReactJS and Typescript with OOP Principles and
            Design Patterns. Algorithms are implemented with knowledge of graph
            theory ideas.
          </ProjectSubtitle>
          <ProjectBtn>
            <ProjectBtnLink
              href="https://react-pathfinding.vercel.app/"
              target="_blank"
              aria-label="pathfinding"
            >
              Show Visualization
            </ProjectBtnLink>
          </ProjectBtn>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src="../../assets/sorting.svg" />
          <ProjectHeading>Sorting Visualizer</ProjectHeading>
          <ProjectSubtitle>
            Visualization of common sorting algorithms. Project written in
            ReactJS and Typescript with OOP Principles and Design Patterns.
            Project shows visualization of ideas behind different algorithms.
          </ProjectSubtitle>
          <ProjectBtn>
            <ProjectBtnLink
              href="https://react-sorting.vercel.app/"
              target="_blank"
              aria-label="sorting"
            >
              Show Visualization
            </ProjectBtnLink>
          </ProjectBtn>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src="../../assets/neural.svg" />
          <ProjectHeading>Neural Network</ProjectHeading>
          <ProjectSubtitle>
            Neural Network implemented from scratch. Project written in Python,
            NumPy with OOP Principles and Design Patterns. Project contains own
            neural network written step by step - weight initialization, layers,
            loss functions, gradient descent etc.
          </ProjectSubtitle>
          <ProjectBtn>
            <ProjectBtnLink
              href="https://github.com/Zoriksde/python-neural-network"
              target="_blank"
              aria-label="neural-network-github"
            >
              Show on Github
            </ProjectBtnLink>
          </ProjectBtn>
        </ProjectCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
