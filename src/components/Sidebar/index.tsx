import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./elements";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleIsSidebarOpen: () => void;
}

const Sidebar = ({ isSidebarOpen, toggleIsSidebarOpen }: SidebarProps) => {
  return (
    <SidebarContainer isOpen={isSidebarOpen}>
      <Icon onClick={toggleIsSidebarOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggleIsSidebarOpen} smooth>
            Home
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggleIsSidebarOpen} smooth>
            Projects
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
