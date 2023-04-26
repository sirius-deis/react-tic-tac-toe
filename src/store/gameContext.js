import React, { useReducer } from "react";

const INITIAL_STATE = {
    history: [],
    currentMove: 0,
    currentPlayer: "X",
};

const ACTION_TYPES = {
    MOVE: "MOVE",
};

const gameReducer = (store, action) => {
    switch (action.type) {
        case ACTION_TYPES.MOVE:
            return store;
        default:
            return store;
    }
};

export const GameContext = React.createContext({
    history: [],
    currentMove: 0,
    currentPlayer: "X",
});

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);
    const value = {
        history: state.history,
        currentMove: state.currentMove,
        currentPlayer: state.currentPlayer,
    };
    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
