import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Us Page", () => {
  test("should render contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should render submit button component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("should load input Name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");
    expect(inputName).toBeInTheDocument();
  });

  it("should load 3 search boxes on Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(3);
  });
});
