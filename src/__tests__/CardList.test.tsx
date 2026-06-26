import { render, screen } from '@testing-library/react'
import { CardList } from '../components/CardList'

const cards = [
  { id: 1, title: 'Octopus', description: 'Has eight arms' },
  { id: 2, title: 'Mantis Shrimp', description: 'Sees more colors than you' },
  { id: 3, title: 'Axolotl', description: 'Regenerates limbs' },
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
})
