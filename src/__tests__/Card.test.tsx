import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

const card = { id: 1, title: "Octopus", description: "Has eight arms" };

describe("Card", () => {
  it("renders as an article element", () => {
    render(<Card card={card} />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  it("renders the card title", () => {
    render(<Card card={card} />);
    expect(screen.getByText("Octopus")).toBeInTheDocument();
  });

  // has eight what?
  it("renders the card description", () => {
    render(<Card card={card} />);
    expect(screen.getByText("Has eight arms")).toBeInTheDocument();
  });
});
