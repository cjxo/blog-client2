import { render, screen } from "@testing-library/react";
import SideBar from "../../src/components/SideBar.jsx";

describe("SideBar component", () => {
  test("renders correctly", () => {
    render(<SideBar />);
    const h1 = screen.getByRole("heading", { name: "Logo" });
    const btn = screen.getByRole("button", { name: "open menu" });
    const img = screen.getByRole("img", { name: "open menu" });
    expect(h1).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
