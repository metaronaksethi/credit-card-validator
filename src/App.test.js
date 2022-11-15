import { render, screen } from "@testing-library/react";
import App from "./App";
describe("Input value", () => {
  it("renders app component", () => {
    render(<App />);
    const linkElement = screen.getByText(/Credit Card Validator/i);
    expect(linkElement).toBeInTheDocument();
  });

  //Test card component add or not in document
  it("renders card component in the document ", () => {
    const { container } = render(<App />);
    const boxes = container.getElementsByClassName("card-container");
    expect(boxes.length).toBe(1);
  });
});
