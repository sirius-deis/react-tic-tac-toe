import { render, screen, fireEvent } from "@testing-library/react";
import Cell from "./cell.component";

describe("Cell component", () => {
    it("should render a cell component", () => {
        render(<Cell value={"X"} position={5} />);
        expect(screen.getByText("X")).toBeInTheDocument();
    });
    it("should render a cell component and fire event", () => {
        const fn = jest.fn();
        render(<Cell value={"X"} markCell={fn} position={5} />);
        fireEvent.click(screen.getByRole("button"));
        expect(fn).toHaveBeenCalled();
    });
    it("should render a cell component and fire event with param 5", () => {
        const fn = jest.fn();
        render(<Cell value={"X"} markCell={fn} position={5} />);
        fireEvent.click(screen.getByRole("button"));
        expect(fn).toHaveBeenCalledWith(5);
    });
});
