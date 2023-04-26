import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./button.component";

describe("Button component", () => {
    it("should render button component with reset title", () => {
        render(<Button isPlaying={true} />);
        expect(screen.queryByText("Start")).not.toBeInTheDocument();
        expect(screen.getByText("Reset")).toBeInTheDocument();
    });
    it("should render button component with reset title", () => {
        render(<Button isPlaying={false} />);
        expect(screen.getByText("Start")).toBeInTheDocument();
        expect(screen.queryByText("Reset")).not.toBeInTheDocument();
    });
    it("should fire event on click with playing status", () => {
        const start = jest.fn();
        const reset = jest.fn();
        render(<Button isPlaying={true} start={start} reset={reset} />);
        fireEvent.click(screen.getByRole("button"));
        expect(start).not.toHaveBeenCalled();
        expect(reset).toHaveBeenCalled();
    });
    it("should fire event on click without playing status", () => {
        const start = jest.fn();
        const reset = jest.fn();
        render(<Button isPlaying={false} start={start} reset={reset} />);
        fireEvent.click(screen.getByRole("button"));
        expect(start).toHaveBeenCalled();
        expect(reset).not.toHaveBeenCalled();
    });
});
