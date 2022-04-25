import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./elements";
import { FaBars } from "react-icons/fa";

interface NavbarProps {
  toggleIsSidebarOpen: () => void;
}

const Navbar = ({ toggleIsSidebarOpen }: NavbarProps) => {
  return (
    <>
      <Nav id="navbar">
        <NavbarContainer>
          <NavLogo>przybysz</NavLogo>
          <MobileIcon onClick={toggleIsSidebarOpen}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home" smooth>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth>
                Projects
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
