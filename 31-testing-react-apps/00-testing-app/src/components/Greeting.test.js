import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test('renders "Hello World!" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    //   nothing to do here

    //   Assert
    const helloWorldElement = screen.getByText("Hello World!", { exact: true });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you!" if the button was NOT clicked', () => {
    // Arrange
    render(<Greeting />);
    // Act
    // nothing to do here

    // Assert
    const outputElement = screen.getByText("good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!", {
      exact: true,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('does not renders "good to see you!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
