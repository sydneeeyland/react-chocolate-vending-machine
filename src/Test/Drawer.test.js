import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Drawer from "../Components/Drawer";
import Dummydata from "../Data/Dummy.json";

test("Component should render the mockdata to represent available vegan chocolate bar on vending machine", () => {
  Dummydata.chocobar.map((x) => {
    render(<Drawer items={x} />);
  });

  Dummydata.chocobar.map((x) => {
    const product = screen.getByTestId("product-" + x.id);
    const imageSource = screen.getByTestId("img-" + x.id);

    expect(product).toBeInTheDocument();
    expect(product).toHaveTextContent(x.title);
    expect(product).toHaveTextContent(x.category);
    expect(product).toHaveTextContent(x.price);
    expect(imageSource).toHaveAttribute("src", x.categoryLogo);
  });
});
