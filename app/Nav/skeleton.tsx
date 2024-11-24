import styled from 'styled-components'

import { StyledNav } from './style'

const SkeletonPulse = styled.div`
  display: inline-block;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`

const SkeletonNavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
`

const SkeletonText = styled.div`
  width: 150px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
`

const SkeletonBurger = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    width: 100%;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }
`

const NavSkeleton = () => {
  return (
    <StyledNav data-testid="nav-skeleton">
      <SkeletonPulse>
        <SkeletonNavContent>
          <SkeletonText />
          <SkeletonBurger>
            <div />
            <div />
            <div />
          </SkeletonBurger>
        </SkeletonNavContent>
      </SkeletonPulse>
    </StyledNav>
  )
}

export default NavSkeleton
