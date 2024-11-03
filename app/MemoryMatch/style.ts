import styled from "styled-components";

const StyledWrapper = styled.div`
  min-height: 100vh;
  text-align: center;
`

const StyledContainerButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`

const StyledButton = styled.div`
    min-height: 30px;
    display: flex;
    align-items: center;
    padding: 8px 16px;
    color: #fff;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.3s ease;
`

const StyledButtonFirst = styled(StyledButton)<{ $isActive?: boolean }>`
  background: ${(props) => (props.$isActive ? '#fff' : '#000')};
  color: ${(props) => (props.$isActive ? '#000' : '#fff')};
  border: ${(props) => (props.$isActive ? '1px solid #000' : '1px solid #237a6b')};
`;

const StyledButtonSecond = styled(StyledButton)<{ $isActive?: boolean }>`
  background: ${(props) => (props.$isActive ? '#fff' : '#000')};
  color: ${(props) => (props.$isActive ? '#000' : '#fff')};
  border: ${(props) => (props.$isActive ? '1px solid #000' : '1px solid #237a6b')};
`;

const StyledButtonStart =  styled(StyledButton)`
    background: #000
`


export {StyledWrapper, StyledContainerButton, StyledButtonFirst, StyledButtonSecond, StyledButtonStart}