import { useAppDispatch, useAppSelector } from './store/hooks'
import { setActiveProblem } from './store/screenerSlice'
import { ProblemPanel } from './components/Problem'
import { screenerProblems } from './screenerProblems'
import './App.css'

export function App() {
  const dispatch = useAppDispatch()
  const activeProblemId = useAppSelector((s) => s.screener.activeProblemId)

  const activeProblem =
    screenerProblems.find((p) => p.id === activeProblemId) ?? screenerProblems[0]

  return (
    <div className="screener">
      <header className="screener__header">
        <h1>FE Coding Screener</h1>
        <nav aria-label="Problem selector">
          {screenerProblems.map((p) => (
            <button
              key={p.id}
              className={p.id === activeProblemId ? 'active' : ''}
              onClick={() => dispatch(setActiveProblem(p.id))}
            >
              {p.title}
            </button>
          ))}
        </nav>
      </header>

      <main className="screener__body">
        <ProblemPanel problem={activeProblem} />
      </main>
    </div>
  )
}

export default App
