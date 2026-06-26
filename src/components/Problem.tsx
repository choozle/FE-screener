import type { ScreenerProblem } from '../screenerProblems'

interface Props {
  problem: ScreenerProblem
}

export function ProblemPanel({ problem }: Props) {
  return (
    <section className="problem-panel" aria-label="Problem statement">
      <h2>{problem.title}</h2>
      <p>{problem.description}</p>
      <div className="problem-panel__meta">
        <span className="problem-panel__label">Edit:</span>
        {problem.filesToEdit.map((f) => (
          <code key={f} className="problem-panel__file">{f}</code>
        ))}
      </div>
      <pre className="test-code" aria-label="Failing test">
        <code>{problem.testCode}</code>
      </pre>
    </section>
  )
}
