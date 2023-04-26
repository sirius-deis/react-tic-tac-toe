import { render, screen, fireEvent } from "@testing-library/react";

import HistoryList from "./historyList.component";

describe("HistoryList component", () => {
    it("should render an empty component", () => {
        render(<HistoryList history={[]} />);
        expect(screen.getAllByRole("button").length).toBe(1);
    });
    it("should render a component with 6 buttons inside it", () => {
        render(<HistoryList history={Array(5)} />);
        expect(screen.getAllByRole("button").length).toBe(6);
    });
    it("should fire event on click 3 param", () => {
        const fn = jest.fn();
        render(<HistoryList history={Array(5)} backInHistory={fn} />);
        fireEvent.click(screen.getAllByRole("button")[3]);
        expect(fn).toHaveBeenCalledWith(3);
    });
    it("should fire event on click with 0 param", () => {
        const fn = jest.fn();
        render(<HistoryList history={Array(5)} backInHistory={fn} />);
        fireEvent.click(screen.getAllByRole("button")[0]);
        expect(fn).toHaveBeenCalledWith(0);
    });
});
