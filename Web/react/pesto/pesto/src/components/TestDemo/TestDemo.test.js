// import { fireEvent, render, screen } from "@testing-library/react";
// import TestDemo from "./TestDemo";

// describe("TestDemo", () => {
//     test.only('should print TestDemo', () => {
//         render(<TestDemo />);
//         const hElement = screen.getByRole('heading', {
//             level: 1,
//         });
//         expect(hElement).toBeInTheDocument();
//         expect(hElement).toHaveTextContent('Test');
//     })

//     test.only('should print welcome', () => {
//         const name = 'Amit';
//         render(<TestDemo name={name} />);
//         const hElement = screen.getByRole('heading', {
//             level: 2,
//         });
//         expect(hElement).toBeInTheDocument();
//         expect(hElement).toHaveTextContent(`Welcome ${name}`);
//     })

//     test.only('should print welcome with name', () => {
//         const name = 'Amit';
//         render(<TestDemo name={name} />);
//         const hElement = screen.getByRole('heading', {
//             level: 2,
//         });
//         expect(hElement).toBeInTheDocument();
//         expect(hElement).toHaveTextContent(`Welcome ${name}`);
//     })
// })