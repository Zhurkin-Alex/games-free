'use client'

import React, { useEffect, useState } from "react";
import { ACTION_TYPE, useAppContext } from "../context/AppContext";
import { StyledButtonFirst, StyledButtonSecond, StyledButtonStart, StyledContainerButton, StyledGameContainer, StyledGameOver, StyledSquare, StyledWrapper, colors } from "./style";

type Square = {
  id: number;
  color: string;
  isFlipped: boolean;
  isMatched: boolean;
};

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

const MemoryMatch = () => {
  const { dispatch } = useAppContext();
  const clickWrapper = () => {
    dispatch({ type: ACTION_TYPE.setOverlayClickCloseBurger, payload: true });
  }

  const [gridSize, setGridSize] = useState(16);
  const [squares, setSquares] = useState<Square[]>([]);
  const [flippedSquares, setFlippedSquares] = useState<Square[]>([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(10);
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
      return () => clearInterval(interval);
    }
  }, [gameStarted, gameOver]);

  useEffect(() => {
    // Проверка, завершена ли игра
    if (gameStarted && squares.every(square => square.isMatched)) {
      setGameOver(true);
      setGameStarted(false); // Остановить игру
    }
  }, [squares, gameStarted]);

  const initializeGame = () => {
    const numPairs = gridSize === 12 ? 6 : 8; // 6 пар для 12 квадратов, 8 пар для 16 квадратов
    const selectedColors = shuffleArray(colors).slice(0, numPairs);
    const allSquares = shuffleArray([...selectedColors, ...selectedColors]).map((color, index) => ({
      id: index,
      color,
      isFlipped: false,
      isMatched: false,
    }));

    setSquares(allSquares);
    setScore(0);
    setAttempts(10);
    setFlippedSquares([]);
    setTimer(0);
    setGameStarted(true);
    setGameOver(false);
  };

  const handleSquareClick = (square: Square) => {
    if (!square.isFlipped && !square.isMatched && flippedSquares.length < 2) {
      const updatedSquares = squares.map((s) =>
        s.id === square.id ? { ...s, isFlipped: true } : s
      );
      setSquares(updatedSquares);

      const newFlippedSquares = [...flippedSquares, { ...square, isFlipped: true }];
      setFlippedSquares(newFlippedSquares);

      if (newFlippedSquares.length === 2) {
        checkMatch(newFlippedSquares);
      }
    }
  };

  const checkMatch = (flipped: Square[]) => {
    const [first, second] = flipped;
    if (first.color === second.color) {
      setSquares((prevSquares) =>
        prevSquares.map((s) =>
          s.color === first.color ? { ...s, isMatched: true, isFlipped: true } : s
        )
      );
      setScore((prevScore) => prevScore + attempts);
      setAttempts(10);
    } else {
      setTimeout(() => {
        setSquares((prevSquares) =>
          prevSquares.map((s) =>
            flipped.some((f) => f.id === s.id) ? { ...s, isFlipped: false } : s
          )
        );
      }, 1000);
      setAttempts((prevAttempts) => Math.max(prevAttempts - 1, 5));
    }
    setFlippedSquares([]);
  };

  const [activeButton, setActiveButton] = useState('');
  const clickButton = (button: string, count: number) => {
    setGridSize(count);
    setActiveButton(button);
  };
  return (
    <StyledWrapper onClick={clickWrapper}>
      <h1>Memory Game</h1>
      {!gameStarted ? (
        <StyledContainerButton>
          <StyledButtonFirst $isActive={activeButton === 'first'} onClick={() => clickButton('first', 12)}>12 Squares</StyledButtonFirst>
          <StyledButtonSecond $isActive={activeButton === 'second'} onClick={() => clickButton('second', 16)}>16 Squares</StyledButtonSecond>
          <StyledButtonStart onClick={initializeGame}>Start Game</StyledButtonStart>
        </StyledContainerButton>
      ) : (
        <>
          <div>
            <h2>Timer: {timer}s</h2>
            <h2>Score: {score}</h2>
          </div>
          <StyledGameContainer>
            {squares.map((square) => (
              <StyledSquare
                key={square.id}
                isFlipped={square.isFlipped}
                isMatched={square.isMatched}
                color={square.color}
                onClick={() => handleSquareClick(square)}
            />
            ))}
          </StyledGameContainer>
        </>
      )}
      {gameOver && (
        <StyledGameOver>
          <h2>Game Over!</h2>
          <p>Final Score: {score}</p>
          <p>Time Taken: {timer}s</p>
          <button onClick={initializeGame}>Play Again</button>
        </StyledGameOver>
      )}
    </StyledWrapper>
  );
}

export default MemoryMatch;
