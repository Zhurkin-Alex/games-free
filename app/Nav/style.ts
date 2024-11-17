import styled from 'styled-components'

const StyledNav = styled.nav`
  background: linear-gradient(to right, black, darkblue);
  position: relative;
  width: 100%;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Hamburger = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    background-color: #cccbcb;
    width: 100%;
    height: 4px;
  }
`

const Dropdown = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${props => (props.$isOpen ? 'block' : 'none')};
  z-index: 1;
`

const Submenu = styled.ul<{ $isOpen: boolean }>`
  list-style: none;
  padding-left: 1rem;
  margin: 0;
  display: ${props => (props.$isOpen ? 'block' : 'none')};
  background-color: #f9f9f9;
`

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
`

const DropdownItemSlotMachine = styled(DropdownItem)`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  position: absolute;
  right: 84px;
  top: 0;
  background-color: #ebebeb;
  min-width: 88px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: black;
  }
`

const DropdownItemMemoryMatch = styled(DropdownItem)`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  position: absolute;
  right: 84px;
  top: 57px;
  background-color: #ebebeb;
  min-width: 125px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: black;
  }
`

const StyledMarqueeText = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  align-items: center;
  color: white;
  font-size: 16px;
  margin-right: 10px;

  .marquee-content {
    display: flex;
    white-space: nowrap;
    animation: marquee 7s linear infinite;
    /* animation: marquee 3s steps(1, start) infinite; */
    font-weight: 700;
    text-transform: uppercase;
    @media (min-width: 768px) {
      animation: marquee 14s linear infinite;
      /* animation: marquee 7s linear infinite; */
    }
  }

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    90% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

export {
  StyledMarqueeText,
  StyledNav,
  Hamburger,
  Dropdown,
  Submenu,
  DropdownItem,
  DropdownItemSlotMachine,
  DropdownItemMemoryMatch,
}
