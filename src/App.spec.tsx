import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

// eslint-disable-next-line react/display-name
jest.mock('./components/InventoryList', () => () => (
  <div data-testid='item-list' />
))
it('Renders App', () => {
  render(<App />)
  expect(screen.getByTestId('item-list')).toBeInTheDocument()
})
