"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Dropdown, DropdownItem, DropdownItemMemoryMatch, DropdownItemSlotMachine, Hamburger, StyledNav, Submenu } from "./style";
import { ACTION_TYPE, useAppContext } from "../context/AppContext";
const BAR_COUNT = 3
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const { state, dispatch } = useAppContext();

  const toggleMenu = () => {
    setIsMenuOpen(true);
    dispatch({ type: ACTION_TYPE.setOverlayClickCloseBurger, payload: false })
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(true);
    dispatch({ type: ACTION_TYPE.setOverlayClickCloseBurger, payload: false })
  };

  useEffect(() => {
    if (state.overLayClickCloseBurger && isMenuOpen) {
      setIsSubmenuOpen(false);
      setIsMenuOpen(false);
    }
  },[state.overLayClickCloseBurger])

  return (
    <StyledNav >
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
            <DropdownItemSlotMachine>
              <Link href="/SlotMachine">SlotMachine</Link>
            </DropdownItemSlotMachine>
            <DropdownItemMemoryMatch>
              <Link href="/MemoryMatch">Memory Match</Link>
            </DropdownItemMemoryMatch>
          </Submenu>
        </DropdownItem>
      </Dropdown>
    </StyledNav>
  );
};

export default Nav;
