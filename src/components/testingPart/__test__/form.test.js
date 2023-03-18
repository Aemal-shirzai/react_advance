import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "../FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeElement = screen.getByLabelText(/score/i)
    fireEvent.change(rangeElement, { target: { value: score } })

    const commentElement = screen.getByLabelText(/comment/i);
    fireEvent.change(commentElement, { target: { value: comment } });

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    fireEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);


    const rangeElement = screen.getByLabelText(/score/i)
    fireEvent.change(rangeElement, { target: { value: score } })

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    fireEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });

});
