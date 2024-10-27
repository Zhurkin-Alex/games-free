"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Hamburger = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    width: 100%;
    height: 4px;
    background-color: black;
  }
`;

const Dropdown = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  z-index: 1;
`;

const Submenu = styled.ul<{ $isOpen: boolean }>`
  list-style: none;
  padding-left: 1rem;
  margin: 0;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  background-color: #f9f9f9;
`;

const DropdownItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  position: relative;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const DropdownItemWorks = styled(DropdownItem)`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  position: absolute;
  left: -83%;
  top: 0;
  background-color: #ebebeb;
  min-width: 88px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prevState) => !prevState);
  };

  return (
    <StyledNav>
      <Hamburger onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <Dropdown $isOpen={isMenuOpen}>
        <DropdownItem>
          <Link href="/">Home</Link>
        </DropdownItem>
        <DropdownItem onClick={toggleSubmenu}>
          My works
          <Submenu $isOpen={isSubmenuOpen}>
            <DropdownItemWorks>
              <Link href="/Game">Game</Link>
            </DropdownItemWorks>
          </Submenu>
        </DropdownItem>
      </Dropdown>
    </StyledNav>
  );
};

export default Nav;
