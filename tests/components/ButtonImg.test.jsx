import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonImg from "../../src/components/ButtonImg.jsx";

describe("ButtonImg component", () => {
  test("renders img correctly", () => {
    render(<ButtonImg src="img.png" alt="some-image" width="32px" height="32px" />);
    const img = screen.getByRole("img", { name: "some-image" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "img.png");
    expect(img).toHaveAttribute("alt", "some-image");
    expect(img).toHaveAttribute("width", "32px");
    expect(img).toHaveAttribute("height", "32px");
  });

  test("callback is called if button is clicked", async () => {
    const user = userEvent.setup();
    const fn = vi.fn();
    render(<ButtonImg onClick={fn} src="img.png" alt="some-image" />);

    expect(fn).not.toHaveBeenCalled();
    const btn = screen.getByRole("button", { name: "some-image" });
    await user.click(btn);
    expect(fn).toHaveBeenCalled();
  });
});
