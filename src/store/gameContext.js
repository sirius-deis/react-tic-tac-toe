import React, { useReducer } from "react";

const INITIAL_STATE = {
    board: new Array(3).fill([]).map((row) => new Array(3).fill([])),
};

const gameReducer = (store, action) => {
    switch (action.type) {
        default:
            return store;
    }
};

export const GameContext = React.createContext({
    board: [],
});

const GameProvider = (children) => {
    const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);
    const value = {
        board: state.board,
    };
    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
