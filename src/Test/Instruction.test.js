import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Instruction from "../Components/Instruction";

test("Instructions should be visible from step 1 up to step 3", () => {
  render(<Instruction />);

  const StepOne = screen.getByTestId("StepOne");
  expect(StepOne).toBeInTheDocument();
  expect(StepOne).toHaveTextContent("Insert coins or a dollar.");

  const StepTwo = screen.getByTestId("StepTwo");
  expect(StepTwo).toBeInTheDocument();
  expect(StepTwo).toHaveTextContent(
    "Choose your favorite Vegan Chocolate bar."
  );

  const StepThree = screen.getByTestId("StepThree");
  expect(StepThree).toBeInTheDocument();
  expect(StepThree).toHaveTextContent(
    "Enjoy your vegan chocolate bar before it melts."
  );
});
