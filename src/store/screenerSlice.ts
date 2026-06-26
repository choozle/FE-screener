import { createSlice } from "@reduxjs/toolkit";
import type { CardData } from "../components/Card";
import data from "../data.json";

interface ScreenerState {
  cardData: CardData[];
}

const initialState: ScreenerState = {
  cardData: data as CardData[],
};

const screenerSlice = createSlice({
  name: "screener",
  initialState,
  reducers: {},
});

export default screenerSlice.reducer;
