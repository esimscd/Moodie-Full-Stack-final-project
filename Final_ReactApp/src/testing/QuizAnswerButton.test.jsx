import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import QuizAnswerButton from "../components/quizpath/QuizAnswerButton";

// Test that the QuizAnswerButton component renders correctly via the map function
test("renders QuizAnswerButton with answer option", () => {
  render(<QuizAnswerButton quizAnswer="Test Answer Option" />);
  expect(screen.getByText(/Test Answer Option/i)).toBeInTheDocument();
});


// Tests that the onclick event is handled correctly when the QuizAnswerButton is clicked
test("handles click event when QuizAnswerButton is clicked"),
  () => {
    // Setup the mock function to be used in the test
    const handleClick = vi.fn();
    render(
      <QuizAnswerButton quizAnswer="Test Answer Option" onClick={handleClick} />
    );

    const button = screen.getByText(/Test Answer Option/i);
    // Mimic a click event on the button
    button.click();
    // Assert that the mock function was called
    expect(handleClick).toHaveBeenCalled(1);
  };
