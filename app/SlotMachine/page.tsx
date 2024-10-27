'use client'
import { ACTION_TYPE, useAppContext } from "../context/AppContext";
import Bandit from "./Bandit";
import { StyledWrapper } from "./style";

const Game = () => {
    const { state, dispatch } = useAppContext();
    const clickWrapper = () => {
        dispatch({ type: ACTION_TYPE.setOverlayClickCloseBurger, payload: true })
    }
    return <StyledWrapper onClick={clickWrapper}>
        <Bandit />
    </StyledWrapper>
}

export default Game;