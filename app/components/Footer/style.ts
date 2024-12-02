import styled from 'styled-components'

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: transparent;
  color: #c76c6c;
  text-align: center;
  padding: 10px 0;
  z-index: 1000;

  a {
    color: #ce8973;
    text-decoration: none;
    margin: 0 10px;
    font-weight: bold;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
`

export { FooterContainer }
