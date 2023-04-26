import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
    it("should render a status component", () => {
        render(<App />);
        expect(screen.getByText(/Waiting/i)).toBeInTheDocument();
    });
    it("should render a button", () => {
        render(<App />);
        expect(screen.getByText(/Start/i)).toBeInTheDocument();
    });
    it("should render changed status text after clicking a button", () => {
        render(<App />);
        fireEvent.click(screen.getByText(/Start/i));
        expect(screen.getByText(/turn/i)).toBeInTheDocument();
    });
});
