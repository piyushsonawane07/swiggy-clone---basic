import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test('should load contact us heading', () => { 
    render(<Contact/>);
    //querying
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
 });