import React, { useReducer } from "react";

const INITIAL_STATE = {
    history: new Array(9).fill([]),
    currentMove: 0,
    currentPlayer: "X",
    winner: null,
    isPlaying: false,
};

export const ACTION_TYPES = {
    START_GAME: "START_GAME",
    MOVE: "MOVE",
    RESET: "RESET",
    BACK_IN_HISTORY: "BACK_IN_HISTORY",
};

export const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export const checkWinner = (board) => {
    for (const conditions of winningConditions) {
        if (
            board[conditions[0]] &&
            board[conditions[0]] === board[conditions[1]] &&
            board[conditions[1]] === board[conditions[2]]
        ) {
            return true;
        }
    }
};

export const gameReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.START_GAME:
            return { ...INITIAL_STATE, isPlaying: true };
        case ACTION_TYPES.MOVE:
            const { history, currentMove, currentPlayer } = state;
            const tempBoard = history[currentMove === 0 ? currentMove : currentMove - 1].slice();

            if (tempBoard[action.payload]) {
                return state;
            }
            tempBoard[action.payload] = currentPlayer;
            const isWinner = checkWinner(tempBoard);
            const newHistory = [
                ...history.slice(0, currentMove),
                tempBoard,
                ...history.slice(currentMove + 1).fill([]),
            ];
            const newMove = currentMove + 1;
            if (isWinner) {
                return {
                    history: newHistory,
                    currentMove: newMove,
                    currentPlayer: null,
                    winner: currentPlayer,
                    isPlaying: false,
                };
            }
            return {
                ...state,
                history: newHistory,
                currentMove: newMove,
                currentPlayer: newMove % 2 === 0 ? "X" : "O",
            };
        case ACTION_TYPES.RESET:
            return { ...INITIAL_STATE, isPlaying: true };
        case ACTION_TYPES.BACK_IN_HISTORY:
            return { ...state, currentMove: action.payload };
        default:
            return state;
    }
};

export const GameContext = React.createContext({
    board: [],
    currentMove: 0,
    currentPlayer: "X",
    winner: null,
    isPlaying: false,
    history: [],
    start: () => {},
    move: () => {},
    reset: () => {},
    backInHistory: () => {},
});

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);
    const value = {
        board: state.currentMove === 0 ? Array(1) : state.history[state.currentMove - 1],
        currentMove: state.currentMove,
        currentPlayer: state.currentPlayer,
        winner: state.winner,
        isPlaying: state.isPlaying,
        history: state.history.filter((arr) => arr.length > 0),
        start: () => dispatch({ type: ACTION_TYPES.START_GAME }),
        move: (i) => dispatch({ type: ACTION_TYPES.MOVE, payload: i }),
        reset: () => dispatch({ type: ACTION_TYPES.RESET }),
        backInHistory: (i) => dispatch({ type: ACTION_TYPES.BACK_IN_HISTORY, payload: i }),
    };
    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
