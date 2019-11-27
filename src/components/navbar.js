import React, { useState } from "react";
import { Link } from "gatsby";

import tw from "tailwind.macro";
import styled from "@emotion/styled";

const Nav = tw.nav`flex items-center justify-between flex-wrap bg-main p-6 z-50`;
const NavTitleContainer = tw.div`flex items-center flex-shrink-0 text-primary lg:pl-6`;
const NavTitle = tw.span`font-medium font-sans text-2xl`;

const NavLinkContainer = styled.div`${tw`w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
display: ${props => (props.open ? `flex` : `none`)}`;
const LinkContainer = tw.div`text-sm lg:flex-grow`;
const NavLink = tw(
  Link
)`block mt-4 lg:inline-block lg:mt-0 text-primary font-medium text-xl mx-3`;

const MobileMenuContainer = tw.div`block lg:hidden`;
const MobileMenuButton = tw.button`flex items-center px-3 py-2`;
const MobileMenuSvg = tw.svg`fill-current h-6 w-6`;

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <Nav>
        <NavTitleContainer>
          <Link to="/">
            <NavTitle>BETIS 2020</NavTitle>
          </Link>
        </NavTitleContainer>
        <MobileMenuContainer>
          <MobileMenuButton onClick={() => setNavOpen(!navOpen)}>
            <MobileMenuSvg
              width="48"
              height="26"
              viewBox="0 0 48 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2.18557e-07"
                y1="2.5"
                x2="48"
                y2="2.5"
                stroke="#024059"
                strokeWidth="5"
              />
              <line
                x1="2.18557e-07"
                y1="12.5"
                x2="48"
                y2="12.5"
                stroke="#024059"
                strokeWidth="5"
              />
              <line
                x1="2.18557e-07"
                y1="23.5"
                x2="48"
                y2="23.5"
                stroke="#024059"
                strokeWidth="5"
              />
            </MobileMenuSvg>
          </MobileMenuButton>
        </MobileMenuContainer>
        <NavLinkContainer open={navOpen}>
          <LinkContainer>
            <NavLink to="/">About Us</NavLink>
            <NavLink to="/">Profile</NavLink>
            <NavLink to="/">Subjects</NavLink>
            <NavLink to="/">Login</NavLink>
          </LinkContainer>
        </NavLinkContainer>
      </Nav>
    </>
  );
};

export default Navbar;
