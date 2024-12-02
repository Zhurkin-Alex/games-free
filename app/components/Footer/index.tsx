import React from 'react'

import { FooterContainer } from './style'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <a
        href="https://t.me/Alexsey_Zhurkin"
        target="_blank"
        rel="noopener noreferrer"
      >
        Telegram
      </a>
      |<a href="mailto:jura-leha-999@mail.ru">Email</a>
    </FooterContainer>
  )
}

export default Footer
