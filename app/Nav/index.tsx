"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { Dropdown, DropdownItem, DropdownItemWorks, Hamburger, StyledNav, Submenu } from "./style";
const BAR_COUNT = 3
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
      {Array.from({ length: BAR_COUNT }, (_, index) => (
        <div key={index} />
      ))}
      </Hamburger>
      <Dropdown $isOpen={isMenuOpen}>
        <DropdownItem>
          <Link href="/">Home</Link>
        </DropdownItem>
        <DropdownItem onClick={toggleSubmenu}>
          Games
          <Submenu $isOpen={isSubmenuOpen}>
            <DropdownItemWorks>
              <Link href="/Game">SlotMachine</Link>
            </DropdownItemWorks>
          </Submenu>
        </DropdownItem>
      </Dropdown>
    </StyledNav>
  );
};

export default Nav;
