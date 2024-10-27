'use client'
import { useAppContext } from "../context/AppContext";
import Bandit from "./Bandit";
import { StyledWrapper } from "./style";

const Game = () => {
    const { state, dispatch } = useAppContext();
    const clickWrapper = () => {
        dispatch({ type: "OVERLAY_CLICK_ClOSE_BURGER", payload: true })
    }
    return <StyledWrapper onClick={clickWrapper}>
        <Bandit />
    </StyledWrapper>
}

export default Game;