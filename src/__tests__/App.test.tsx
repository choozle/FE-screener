import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import screenerReducer from "../store/screenerSlice";
import { App } from "../App";

function renderWithStore() {
  const store = configureStore({ reducer: { screener: screenerReducer } });
  return render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}

describe("App", () => {
  it("renders the page heading", () => {
    renderWithStore();
    expect(
      screen.getByRole("heading", { name: /FE Coding Screener/i }),
    ).toBeInTheDocument();
  });

  it("renders all card titles", () => {
    renderWithStore();
    expect(screen.getByText("some sorta ipsum")).toBeInTheDocument();
    expect(screen.getByText("another sorta ipsum")).toBeInTheDocument();
    expect(screen.getByText("the final sorta ipsum")).toBeInTheDocument();
  });

  // Intentional failing test: data has 3 cards, not 2
  it("renders exactly 2 cards", () => {
    renderWithStore();
    expect(screen.getAllByRole("article")).toHaveLength(2);
  });
});
