import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
    it("should render a status component", () => {
        render(<App />);
        expect(screen.getByText(/Waiting/i)).toBeInTheDocument();
    });
    it("should render a button", () => {
        render(<App />);
        expect(screen.getByText("Start")).toBeInTheDocument();
    });
});
