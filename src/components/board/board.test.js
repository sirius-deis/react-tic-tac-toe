import { render, screen, fireEvent } from "@testing-library/react";

import Board from "./board.component";

describe("Board", () => {
    beforeEach(() => {
        render(<Board />);
    });
    it("should return 9 cell components", () => {
        const el = screen.getAllByRole("button");
        expect(el.length).toBe(9);
    });
});
