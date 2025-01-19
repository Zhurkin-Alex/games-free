import styled from 'styled-components'

export const StyledMain = styled.main`
  flex: 1;
  justify-content: center;
  display: flex;
`

export const StyledGameButtonsSkeleton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`

export const StyledButtonContainerSkeleton = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`

export const StyledGameCardSkeleton = styled.div`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.6;
    }
  }
`

export const StyledIconPlaceholder = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
`

export const StyleBAckgroundImg = styled.img`
  height: calc(100% - 62px);
  width: 100%;
  object-fit: cover;
  position: absolute;
`

export const StyledTextPlaceholder = styled.div`
  width: 120px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
`
