"use client"
import { Inter } from "next/font/google";
import Nav from "./Nav";
import { GlobalStyle } from "./style";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
      <GlobalStyle />
    </html>
  );
}
