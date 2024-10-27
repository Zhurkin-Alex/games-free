"use client";

import { Inter } from "next/font/google";
import Nav from "./Nav";
import { GlobalStyle } from "./style";
import { AppProvider } from "./context/AppContext";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <title>Your App Title</title> {/* Optional: You can set a title for your app */}
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