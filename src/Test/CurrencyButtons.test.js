import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import CurrencyButtons from "../Components/Child/CurrencyButtons";
import Denomination from "../Data/Denomination.json";

test("Denomination should exist in the component prop through Denomination MockData", () => {
  render(<CurrencyButtons />);

  Denomination.currency.map((x) => {
    const DenominationButton = screen.getByTestId("denomination-" + x.id);

    expect(DenominationButton).toBeInTheDocument();
    expect(DenominationButton).toHaveTextContent(x.name);
    expect(DenominationButton).toHaveValue(x.value);
  });
});
