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
    background: #000;
`

const StyledGameContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 20px;
    width: 95%;
    margin: 15px auto 0;
    @media (min-width: 768px) {
      max-width: 50%;
    }
`


const StyledSquare = styled.div<{ isFlipped: boolean; isMatched: boolean; color: string }>`
  width: 100%;
  height: 100px;
  background-color: ${({ isFlipped, isMatched, color }) => (isFlipped || isMatched ? color : '#333')};
  opacity: ${({ isMatched }) => (isMatched ? 0.1 : 1)};
  cursor: pointer;
`;

const StyledGameOver = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border: 2px solid #333;
    z-index: 1000,
`

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300', '#DAF7A6', '#581845', '#C70039'];

export {colors, StyledGameOver, StyledWrapper, StyledContainerButton, StyledButtonFirst, StyledButtonSecond, StyledButtonStart, StyledGameContainer, StyledSquare}