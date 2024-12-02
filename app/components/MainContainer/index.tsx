'use client'

import dynamic from 'next/dynamic'
import styled from 'styled-components'

import Footer from '../Footer'
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
      <Footer />
    </StyledContainer>
  )
}

export default MainContainer
