import { render, screen, fireEvent } from "@testing-library/react";

import HistoryEntry from "./historyEntry.component";

describe("HistoryEntry component", () => {
    it("should render a HistoryEntry component with index 0", () => {
        render(<HistoryEntry index={0} />);
        expect(screen.getByText("Go to game start")).toBeInTheDocument();
    });
    it("should render a HistoryEntry component with any other index", () => {
        render(<HistoryEntry index={2} />);
        expect(screen.getByText("Go to move #2")).toBeInTheDocument();
    });
    it("should fire an event", () => {
        const fn = jest.fn();
        render(<HistoryEntry index={0} moveInHistory={fn} />);
        fireEvent.click(screen.getByRole("button"));
        expect(fn).toHaveBeenCalled();
    });
    it("should fire an event with parameter", () => {
        const fn = jest.fn();
        render(<HistoryEntry index={3} moveInHistory={fn} />);
        fireEvent.click(screen.getByRole("button"));
        expect(fn).toHaveBeenCalledWith(3);
    });
});
