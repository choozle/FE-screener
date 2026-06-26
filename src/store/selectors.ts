import type { CardData } from "../components/Card";
import type { RootState } from "./store";

export const selectCardData = (s: RootState): CardData[] => s.screener;
