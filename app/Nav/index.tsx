'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { ACTION_TYPE, useAppContext } from '../context/AppContext'
import NavSkeleton from './skeleton'
import {
  Dropdown,
  DropdownItem,
  DropdownItemMemoryMatch,
  DropdownItemSlotMachine,
  Hamburger,
  StyledMarqueeText,
  StyledNav,
  Submenu,
} from './style'

const BAR_COUNT = 3

const Nav = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const { state, dispatch } = useAppContext()

  useEffect(() => {
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const toggleSubmenu = () => {
    setIsSubmenuOpen(true)
    dispatch({ type: ACTION_TYPE.setOverlayClickCloseBurger, payload: false })
  }

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsSubmenuOpen(false)
      setIsMenuOpen(false)
    } else {
      setIsMenuOpen(true)
    }
    dispatch({ type: ACTION_TYPE.setOverlayClickCloseBurger, payload: false })
  }

  useEffect(() => {
    if (state.overLayClickCloseBurger && isMenuOpen) {
      setIsSubmenuOpen(false)
      setIsMenuOpen(false)
    }
  }, [state.overLayClickCloseBurger])

  if (isLoading) {
    return <NavSkeleton />
  }

  return (
    <StyledNav
      role="navigation"
      aria-label="Main navigation"
    >
      <StyledMarqueeText>
        <div className="marquee-content">
          <span>Place for your advertisement</span>
        </div>
      </StyledMarqueeText>
      <Hamburger
        onClick={toggleMenu}
        role="button"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="main-menu"
      >
        {Array.from({ length: BAR_COUNT }, (_, index) => (
          <div key={index} />
        ))}
      </Hamburger>
      <Dropdown
        $isOpen={isMenuOpen}
        id="main-menu"
        role="menu"
        aria-label="Main menu"
      >
        <DropdownItem role="menuitem">
          <Link href="/">Home</Link>
        </DropdownItem>
        <DropdownItem
          onClick={toggleSubmenu}
          role="menuitem"
          aria-haspopup="true"
          aria-expanded={isSubmenuOpen}
        >
          Games
          <Submenu
            $isOpen={isSubmenuOpen}
            role="menu"
            aria-label="Games submenu"
          >
            <DropdownItemSlotMachine role="menuitem">
              <Link href="/SlotMachine">SlotMachine</Link>
            </DropdownItemSlotMachine>
            <DropdownItemMemoryMatch role="menuitem">
              <Link href="/MemoryMatch">Memory Match</Link>
            </DropdownItemMemoryMatch>
          </Submenu>
        </DropdownItem>
      </Dropdown>
    </StyledNav>
  )
}

export default Nav
