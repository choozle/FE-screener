import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import screenerReducer from '../store/screenerSlice'
import { App } from '../App'
import { screenerProblems } from '../screenerProblems'

function renderWithStore() {
  const store = configureStore({ reducer: { screener: screenerReducer } })
  return render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
}

describe('Screener App', () => {
  it('renders the page heading', () => {
    renderWithStore()
    expect(screen.getByRole('heading', { name: /FE Coding Screener/i })).toBeInTheDocument()
  })

  it('shows the first problem heading by default', () => {
    renderWithStore()
    expect(
      screen.getByRole('heading', { name: screenerProblems[0].title }),
    ).toBeInTheDocument()
  })

  it('renders a nav button for each problem', () => {
    renderWithStore()
    for (const p of screenerProblems) {
      expect(screen.getByRole('button', { name: p.title })).toBeInTheDocument()
    }
  })

  it('displays the failing test code', () => {
    renderWithStore()
    expect(screen.getByLabelText('Failing test')).toBeInTheDocument()
  })

  it('switches problem when a nav button is clicked', async () => {
    renderWithStore()
    const secondProblem = screenerProblems[1]
    if (!secondProblem) return // only one problem right now

    await userEvent.click(screen.getByRole('button', { name: secondProblem.title }))
    expect(screen.getByText(secondProblem.title)).toBeInTheDocument()
  })
})
