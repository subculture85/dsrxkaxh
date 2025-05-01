import { createComment } from '@/libs/createComment'
import { ChangeEvent, FC, useState } from 'react'
import { Button } from '../Button'

interface NewReplyProps {
  id?: string
  onCancel(): void
}

export const NewReply: FC<NewReplyProps> = ({ id, onCancel }) => {
  const [text, setText] = useState('')

  // No need to debounce or throttle given the scope of the test
  const handleTextChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setText(target.value)
  }

  return (
    <form className='min-w-xs'>
      <label
        htmlFor='comment-input'
        className='mb-2 text-sm font-medium text-gray-900 sr-only'
      >
        Write a comment...
      </label>
      <input
        type='text'
        id='comment-input'
        className='block w-full py-4 text-sm text-gray-900 border-b border-b-gray-300 bg-gray-50 focus:outline-0'
        placeholder='Write a comment...'
        required
        onChange={handleTextChange}
        data-testid='new-reply-input'
      />
      <div className='flex gap-4 justify-end mt-2'>
        <Button onClick={onCancel} testId='new-reply-btn-cancel'>
          Cancel
        </Button>
        <Button
          type='submit'
          onClick={() => createComment({ text }, id)}
          testId='new-reply-btn-add'
        >
          Add
        </Button>
      </div>
    </form>
  )
}
