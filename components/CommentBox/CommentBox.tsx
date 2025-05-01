import type { Comment } from '@/db'
import { FC, useState } from 'react'
import { formatRelative } from 'date-fns'
import clsx from 'clsx'
import { removeEntry } from '@/libs/removeEntry'
import Image from 'next/image'
import { ReplyList } from '../ReplyList'
import { NewReply } from '../NewReply'
import { Button } from '../Button'

interface CommentProps extends Comment {
  testId?: string
}

const ICON_STYLE = 'h-4 w-4'

export const CommentBox: FC<CommentProps> = ({
  text,
  dstamp,
  id,
  replies,
  testId = 'comment-box'
}) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false)
  const [showReplies, setShowReplies] = useState(false)

  return (
    <div
      className='border border-gray-300 rounded-lg p-4 w-sm'
      data-testid={testId}
    >
      <time
        dateTime={dstamp}
        className='text-xs text-right block'
        data-testid={`${testId}-date`}
      >
        {formatRelative(dstamp, new Date())}
      </time>
      <p className='min-h-8' data-testid={`${testId}-text`}>
        {text}
      </p>
      <ul
        className={clsx('flex space-x-2 justify-end', {
          'mb-4': isReplyOpen
        })}
        data-testid={`${testId}-actions`}
      >
        <li>
          <Button
            onClick={() => setIsReplyOpen(true)}
            testId={`${testId}-actions-reply`}
          >
            <Image
              src='/reply.svg'
              width={200}
              height={200}
              alt='Reply to this comment'
              title='Reply to this comment'
              tabIndex={1}
              className={ICON_STYLE}
            />
          </Button>
        </li>
        <li>
          <Button
            onClick={() => removeEntry(id)}
            testId={`${testId}-actions-delete`}
          >
            <Image
              src='/delete.svg'
              width={200}
              height={200}
              alt='Delete this comment'
              title='Delete this comment'
              tabIndex={2}
              className={ICON_STYLE}
            />
          </Button>
        </li>
      </ul>
      {isReplyOpen && (
        <NewReply id={id} onCancel={() => setIsReplyOpen(false)} />
      )}
      {(replies?.length || 0) > 0 && (
        <button
          type='button'
          onClick={() => setShowReplies(!showReplies)}
          data-testid={`${testId}-replies`}
          className='hover:cursor-pointer hover:underline text-sm font-bold'
        >
          {showReplies ? 'Hide' : 'Show'} replies
        </button>
      )}
      {showReplies && typeof replies !== 'undefined' && (
        <ReplyList ids={replies} />
      )}
    </div>
  )
}
