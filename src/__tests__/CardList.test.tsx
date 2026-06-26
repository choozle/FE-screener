import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import screenerReducer from "../store/screenerSlice";
import CardList from "../components/CardList";

function renderWithStore() {
  const store = configureStore({ reducer: { screener: screenerReducer } });
  return render(
    <Provider store={store}>
      <CardList />
    </Provider>,
  );
}

describe("CardList", () => {
  // Intentional failing test: data has 3 items, not 2
  it("renders a card for each item", () => {
    renderWithStore();
    expect(screen.getAllByRole("article")).toHaveLength(2);
  });

  it("renders each card title", () => {
    renderWithStore();
    expect(screen.getByText("some sorta ipsum")).toBeInTheDocument();
    expect(screen.getByText("another sorta ipsum")).toBeInTheDocument();
    expect(screen.getByText("the final sorta ipsum")).toBeInTheDocument();
  });

  it("renders each card description", () => {
    renderWithStore();
    expect(screen.getByText(/pointless sentence/i)).toBeInTheDocument();
    expect(screen.getByText(/pineapple on pizzas/i)).toBeInTheDocument();
    expect(screen.getByText(/Porsche 964/i)).toBeInTheDocument();
  });

  it("renders an empty list without crashing", () => {
    const store = configureStore({
      reducer: { screener: screenerReducer },
      preloadedState: { screener: { cardData: [] } },
    });
    render(
      <Provider store={store}>
        <CardList />
      </Provider>,
    );
    expect(screen.queryAllByRole("article")).toHaveLength(0);
  });
});
