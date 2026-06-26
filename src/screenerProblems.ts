export interface ScreenerProblem {
  id: string
  title: string
  description: string
  filesToEdit: string[]
  testFile: string
  testCode: string
}

export const screenerProblems: ScreenerProblem[] = [
  {
    id: 'card-list',
    title: 'Render a List of Cards',
    description:
      'The tests below are failing. Implement CardList and Card so all four tests pass. Run `npm test` to check your work.',
    filesToEdit: [
      'src/components/CardList.tsx',
      'src/components/Card.tsx',
    ],
    testFile: 'src/__tests__/CardList.test.tsx',
    testCode: `import { render, screen } from '@testing-library/react'
import { CardList } from '../components/CardList'

const cards = [
  { id: 1, title: 'Octopus',       description: 'Has eight arms' },
  { id: 2, title: 'Mantis Shrimp', description: 'Sees more colors than you' },
  { id: 3, title: 'Axolotl',       description: 'Regenerates limbs' },
]

describe('CardList', () => {
  it('renders a card for each item', () => {
    render(<CardList cards={cards} />)
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })

  it('renders each card title', () => {
    render(<CardList cards={cards} />)
    expect(screen.getByText('Octopus')).toBeInTheDocument()
    expect(screen.getByText('Mantis Shrimp')).toBeInTheDocument()
    expect(screen.getByText('Axolotl')).toBeInTheDocument()
  })

  it('renders each card description', () => {
    render(<CardList cards={cards} />)
    expect(screen.getByText('Has eight arms')).toBeInTheDocument()
    expect(screen.getByText('Sees more colors than you')).toBeInTheDocument()
    expect(screen.getByText('Regenerates limbs')).toBeInTheDocument()
  })

  it('renders an empty list without crashing', () => {
    render(<CardList cards={[]} />)
    expect(screen.queryAllByRole('article')).toHaveLength(0)
  })
})`,
  },
]
