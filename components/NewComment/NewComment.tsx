import { createComment } from '@/libs/createComment'
import { ChangeEvent, FC, useState } from 'react'
import { Button } from '../Button'

export const NewComment: FC = () => {
  const [text, setText] = useState('')

  // No need to debounce or throttle given the scope of the test
  const handleTextChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setText(target.value)
  }

  return (
    <form className='min-w-md'>
      <label
        htmlFor='comment-input'
        className='mb-2 text-sm font-medium text-gray-900 sr-only'
      >
        Write a comment...
      </label>
      <div className='relative'>
        <input
          type='text'
          id='comment-input'
          className='block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
          placeholder='Write a comment...'
          required
          onChange={handleTextChange}
          data-testid='new-comment-input'
        />
        <Button
          type='submit'
          className='absolute end-2.5 bottom-2.5 px-4'
          onClick={() => createComment({ text })}
          testId='new-comment-btn-add'
          size='sm'
        >
          Add
        </Button>
      </div>
    </form>
  )
}
