import { checkWinner, gameReducer, ACTION_TYPES } from "./gameContext";

describe("gameReducer", () => {
    it("should return history with changed value on first move in cell number 6", () => {
        const INITIAL_STATE = {
            history: new Array(9).fill([]),
            currentMove: 0,
            currentPlayer: "X",
            winner: null,
        };
        const result = gameReducer(INITIAL_STATE, { type: ACTION_TYPES.MOVE, payload: 6 });
        const expected = {
            history: new Array(9).fill([]),
            currentMove: 1,
            currentPlayer: "O",
            winner: null,
        };
        expected.history[INITIAL_STATE.currentMove][6] = INITIAL_STATE.currentPlayer;
        expect(result).toStrictEqual(expected);
    });
});
