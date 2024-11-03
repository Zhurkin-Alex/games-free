'use client'
import React from "react";
import { ACTION_TYPE, useAppContext } from "../context/AppContext";
import Bandit from "./Bandit";
import { StyledWrapper } from "./style";

const SlotMachine = () => {
    const { dispatch } = useAppContext();
    const clickWrapper = () => {
        dispatch({ type: ACTION_TYPE.setOverlayClickCloseBurger, payload: true })
    }
    return <StyledWrapper onClick={clickWrapper}>
        <Bandit />
    </StyledWrapper>
}

export default SlotMachine;