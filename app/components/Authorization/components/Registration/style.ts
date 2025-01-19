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

  button {
    flex: 1;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
      opacity: 0.9;
    }
  }
`

export const StyledButtonLogin = styled.button`
  background-color: #333;
  color: #00aaff;
  border: 1px solid #00aaff;
`

export const StyledButtonAuth = styled.button`
  background-color: #00aaff;
  color: white;
`

export const StyledTitle = styled.div`
  display: flex;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;

  h2 {
    text-align: center;
    color: #00aaff;
    font-size: 24px;
    color: #00aaff;
  }

  h3 {
    text-align: center;
    position: relative;
    color: #00aaff;
    align-items: end;
    display: flex;
    margin: 0 0 0 20px;
    padding: 0 0 0 20px;
    cursor: pointer;
    &:before {
      content: '/';
      position: absolute;
      left: 0;
    }
  }
`

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #00aaff;
  }
`

export const StyledSubmitButton = styled.button<{ isActiveButton?: boolean }>`
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: ${({ isActiveButton }) => (isActiveButton ? '#00aaff' : '#ccc')};
  color: white;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ isActiveButton }) => (isActiveButton ? '#0088cc' : '#ccc')};
  }
`
export const StyledError = styled.span`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
  display: block;
`

export const StyledPasswordContainer = styled.div`
  position: relative;
  input {
    width: 100%;
  }
`

export const StyledEyeIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
  user-select: none;

  &:hover {
    opacity: 0.8;
  }
`
