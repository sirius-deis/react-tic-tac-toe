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
            return { ...state, isPlaying: true };
        case ACTION_TYPES.MOVE:
            const { history, currentMove, currentPlayer } = state;
            const tempBoard = history[currentMove === 0 ? currentMove : currentMove - 1].slice();
            tempBoard[action.payload] = currentPlayer;
            const isWinner = checkWinner(tempBoard);
            const newHistory = [...history.slice(0, currentMove), tempBoard, ...history.slice(currentMove + 1)];
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
    start: () => {},
    move: () => {},
    reset: () => {},
});

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);
    const value = {
        board: state.history[state.currentMove === 0 ? 0 : state.currentMove - 1],
        currentMove: state.currentMove,
        currentPlayer: state.currentPlayer,
        winner: state.winner,
        isPlaying: state.isPlaying,
        start: () => dispatch({ type: ACTION_TYPES.START_GAME }),
        move: (i) => dispatch({ type: ACTION_TYPES.MOVE, payload: i }),
        reset: () => dispatch({ type: ACTION_TYPES.RESET }),
    };
    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
