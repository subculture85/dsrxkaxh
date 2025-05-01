import { render, screen } from '@testing-library/react'
import { CommentBox } from './CommentBox'
import { type Comment } from '@/db'

describe('CommentBox', () => {
  let props: Comment

  beforeEach(() => {
    props = {
      dstamp: '2025-05-01T14:00:00.000Z',
      id: 'abc-123',
      status: 'published',
      text: 'This is a test'
    }
  })
  it('renders a CommentBox', () => {
    const { container } = render(<CommentBox {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('renders with the show replies link if there are replies associated with the comment', () => {
    expect.assertions(2)
    render(<CommentBox {...props} replies={['def-456']} />)

    const replyLink = screen.getByTestId('comment-box-replies')
    expect(replyLink).toBeInTheDocument()
    expect(replyLink.innerHTML).toBe('Show replies')
  })
})
