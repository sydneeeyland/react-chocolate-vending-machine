import { render, screen } from "@testing-library/react";
import App from "./App";
import Instructions from "./Components/Instruction";
import CurrencyButtons from "./Components/Child/CurrencyButtons";

test("Instructions should be visible", () => {
  render(<Instructions />);
  const StepOne = screen.getByText(/Insert coins or a dollar./);
  expect(StepOne).toBeInTheDocument();

  const StepTwo = screen.getByText(/Choose your favorite Vegan Chocolate bar./);
  expect(StepTwo).toBeInTheDocument();

  const StepThree = screen.getByText(
    /Enjoy your vegan chocolate bar before it melts./
  );
  expect(StepThree).toBeInTheDocument();
});

test("Denomination should be visible", () => {
  render(<CurrencyButtons />);

  const TenCents = screen.getByText(/10c/);
  expect(TenCents).toBeInTheDocument();

  const TwentyCents = screen.getByText(/20c/);
  expect(TwentyCents).toBeInTheDocument();

  const FiftyCents = screen.getByText(/50c/);
  expect(FiftyCents).toBeInTheDocument();
});
