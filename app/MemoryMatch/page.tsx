'use client'

import { ACTION_TYPE, useAppContext } from "../context/AppContext";
import { StyledWrapper } from "./style";

const MemoryMatch = () => {
    const { state, dispatch } = useAppContext();
    const clickWrapper = () => {
        dispatch({ type: ACTION_TYPE.setOverlayClickCloseBurger, payload: true })
    }

    return <StyledWrapper onClick={clickWrapper}>MemoryMatch</StyledWrapper>
}

export default MemoryMatch;