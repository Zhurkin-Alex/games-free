import styled from 'styled-components'

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const StyledModalContent = styled.div`
  background: linear-gradient(to right, black, darkblue);
  color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  width: 90%;
  max-width: 400px;

  p {
    font-size: 16px;
    margin-bottom: 25px;
    color: #d9d9d9;
  }
`

export const StyledModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`
const StyledButton = styled.button`
  flex: 1;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s;
  font-weight: bold;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`

export const StyledButtonLogin = styled(StyledButton)`
  background-color: #333;
  color: #00aaff;
  border: 1px solid #00aaff;
`

export const StyledButtonAuth = styled(StyledButton)`
  background-color: #00aaff;
  color: #000000;
`
