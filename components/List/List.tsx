import { FC } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/db'
import { CommentBox } from '../CommentBox'

export const List: FC = () => {
  const comments =
    useLiveQuery(() =>
      db.comments
        .where('status')
        .notEqual('deleted')
        .and((comment) => typeof comment.parentId !== 'string')
        .reverse()
        .sortBy('dstamp')
    ) || []

  return (
    <ul className='flex gap-4 flex-nowrap sm:flex-wrap flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-start'>
      {comments.map((comment) => (
        <CommentBox key={`comment-${comment.id}`} {...comment} />
      ))}
    </ul>
  )
}
