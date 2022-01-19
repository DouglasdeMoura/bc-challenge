import { render, screen } from '@testing-library/react'

import { App } from './app'

describe('<App />', () => {
  it('should render the welcome message', () => {
    render(<App />)
    const title = screen.getByText('Search')
    const subtitle = screen.getByText('Find the best GIFs')

    expect(title).toHaveClass('title')
    expect(subtitle).toHaveClass('subtitle')
  })
})
