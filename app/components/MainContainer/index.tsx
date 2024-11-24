'use client'

import dynamic from 'next/dynamic'
import styled from 'styled-components'

import HomePageSkeleton from '../HomePage/skeleton'

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const HomePage = dynamic(() => import('../HomePage'), {
  ssr: false,
  loading: () => <HomePageSkeleton />,
})

const MainContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <StyledContainer>
      <HomePage />
      {children}
    </StyledContainer>
  )
}

export default MainContainer
