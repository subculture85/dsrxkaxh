import { db } from '@/db'
import { useLiveQuery } from 'dexie-react-hooks'
import { FC } from 'react'

interface ReplyListProps {
  ids: Array<string>
  testId?: string
}

export const ReplyList: FC<ReplyListProps> = ({
  ids,
  testId = 'reply-item'
}) => {
  const replies =
    useLiveQuery(() =>
      db.comments.where('id').anyOf(ids).reverse().sortBy('dstamp')
    ) || []

  return (
    <ul className='divide-y divide-gray-300'>
      {replies.map((reply) => (
        <li key={`${testId}-${reply.id}`} className='py-2' data-testid={testId}>
          {reply.text}
        </li>
      ))}
    </ul>
  )
}
