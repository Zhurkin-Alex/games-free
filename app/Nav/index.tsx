"use client"
import styled from 'styled-components';
import Link from "next/link";
import { usePathname } from "next/navigation";


const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
   margin: 0;
  padding: 0;
`;

const Nav = () => {
    const pathname = usePathname();
    
    return (
        <StyledNav>
            <NavList>
                <NavItem>
                    <Link href="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link href="/Tree">Tree.js</Link>
                </NavItem>
            </NavList>
        </StyledNav>
    );
};

export default Nav;
