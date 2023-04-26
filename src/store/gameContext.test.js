import { checkWinner, gameReducer, ACTION_TYPES } from "./gameContext";

describe("gameReducer", () => {
    it("should return history with changed value on first move in cell number 6", () => {
        const initial_state = {
            history: new Array(9).fill([]),
            currentMove: 0,
            currentPlayer: "X",
            winner: null,
        };
        const result = gameReducer(initial_state, { type: ACTION_TYPES.MOVE, payload: 6 });

        const expected = {
            history: new Array(9).fill(null).map((_) => []),
            currentMove: 1,
            currentPlayer: "O",
            winner: null,
        };
        expected.history[initial_state.currentMove][6] = initial_state.currentPlayer;
        expect(result).toEqual(expected);
    });
});

describe("checkWinner", () => {
    describe("truthy", () => {
        it("should return true", () => {
            const board = ["X", "X", "X"];
            const result = checkWinner(board);
            expect(result).toBeTruthy();
        });
        it("should return true", () => {
            const board = ["", "", "", "X", "X", "X", "", "", ""];
            const result = checkWinner(board);
            expect(result).toBeTruthy();
        });
        it("should return true", () => {
            const board = ["", "", "", "", "", "", "X", "X", "X"];
            const result = checkWinner(board);
            expect(result).toBeTruthy();
        });
        it("should return true", () => {
            const board = ["X", "", "", "X", "", "", "X", "", ""];
            const result = checkWinner(board);
            expect(result).toBeTruthy();
        });
        it("should return true", () => {
            const board = ["", "X", "", "", "X", "", "", "X", ""];
            const result = checkWinner(board);
            expect(result).toBeTruthy();
        });
        it("should return true", () => {
            const board = ["", "", "X", "", "", "X", "", "", "X"];
            const result = checkWinner(board);
            expect(result).toBeTruthy();
        });
        it("should return true", () => {
            const board = ["X", "", "", "", "X", "", "", "", "X"];
            const result = checkWinner(board);
            expect(result).toBeTruthy();
        });
        it("should return true", () => {
            const board = ["", "", "X", "", "X", "", "X", "", ""];
            const result = checkWinner(board);
            expect(result).toBeTruthy();
        });
    });
});
