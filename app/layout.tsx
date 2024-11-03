"use client";
import React from "react";
import { Inter } from "next/font/google";
import Nav from "./Nav";
import { GlobalStyle } from "./style";
import { AppProvider } from "./context/AppContext";

const inter = Inter({ subsets: ["latin"] });

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
);

export default RootLayout;