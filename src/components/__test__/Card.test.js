import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "../card";
import { getCType, validateCardNumber } from "../utils";

describe("Input value", () => {
  it("Should match valid card number", async () => {
    render(<Card />);
    const cardNum = screen.getByPlaceholderText("0000 0000 0000 0000");
    await act(async () => userEvent.type(cardNum, "4111111111111111"));
    expect(cardNum.value).toMatch("4111 1111 1111 1111");
  });

  it("Should get error 'Invaild card number'", async () => {
    const Component = render(<Card />);
    const cardNum = screen.getByPlaceholderText("0000 0000 0000 0000");
    await act(async () => {
      await userEvent.type(cardNum, "5105 1051 0510 510");
      await fireEvent.focusOut(cardNum);
      expect(screen.getByTestId("card-error")).toHaveTextContent("");
    });
  });

  it("Should check reset input on remove icon", async () => {
    const { container, getByPlaceholderText } = render(<Card />);
    const cardInput = screen.getByPlaceholderText("0000 0000 0000 0000");
    await act(async () => {
      userEvent.type(cardInput, "41111111111111");
      expect(cardInput.value).toMatch("");
    });
  });
});
