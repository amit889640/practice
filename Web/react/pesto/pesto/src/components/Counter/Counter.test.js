
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test.only('should be 0 for default value', () => {
    render(<Counter />);
    const hElement = screen.getByRole('heading', {
        level: 1,
    });
    expect(hElement).toBeInTheDocument();
    expect(hElement).toHaveTextContent(`0`);
})

test.only('should be 1 after clicking btn', () => {
    render(<Counter />);
    const buttonElement = screen.getByRole('button', {
        name: 'Inc',
    });
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    const hElement = screen.getByRole('heading', {
        level: 1,
    });
    expect(hElement).toHaveTextContent(`2`);
})