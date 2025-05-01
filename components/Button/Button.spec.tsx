import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders a button', () => {
    const { container } = render(<Button />)

    expect(container).toMatchSnapshot()
  })

  it('renders a button with children', () => {
    const { container } = render(<Button>Content</Button>)

    expect(container).toMatchSnapshot()
  })
})
