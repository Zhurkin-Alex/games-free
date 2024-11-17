'use client'

import { Inter } from 'next/font/google'
import React from 'react'

import Nav from './Nav'
import { AppProvider } from './context/AppContext'
import { GlobalStyle } from './style'

const inter = Inter({ subsets: ['latin'] })

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <title>Alex_Zhurkin</title>
      <GlobalStyle />
    </head>
    <body className={inter.className}>
      <AppProvider>
        <Nav />
        {children}
      </AppProvider>
    </body>
  </html>
)

export default RootLayout
