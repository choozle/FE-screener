import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ScreenerState {
  activeProblemId: string
}

const initialState: ScreenerState = {
  activeProblemId: 'card-list',
}

const screenerSlice = createSlice({
  name: 'screener',
  initialState,
  reducers: {
    setActiveProblem(state, action: PayloadAction<string>) {
      state.activeProblemId = action.payload
    },
  },
})

export const { setActiveProblem } = screenerSlice.actions
export default screenerSlice.reducer
