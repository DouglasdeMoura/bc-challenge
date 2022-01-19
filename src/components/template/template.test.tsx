import { render, screen } from '@testing-library/react'

import { Template } from '.'

describe('Template', () => {
  it('should render', () => {
    render(<Template>test</Template>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})
