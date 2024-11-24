'use client'

import { Inter } from 'next/font/google'
import React from 'react'
import styled from 'styled-components'

import Nav from './components/Nav'
import { AppProvider } from './context/AppContext'
import { GlobalStyle } from './style'

const inter = Inter({ subsets: ['latin'] })

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <title>Alex_Zhurkin</title>
    </head>
    <body className={inter.className}>
      <GlobalStyle />
      <AppProvider>
        <StyledContainer>
          <Nav />
          {children}
        </StyledContainer>
      </AppProvider>
    </body>
  </html>
)

export default RootLayout
