import { Comment, db } from '@/db'
import { v4 } from 'uuid'

/**
 * Creates a comment
 * @param content The text to store as the comment
 * @param parentId An ID of the parent comment if this is a reply
 * @returns
 */
export const createComment = async (
  content: Pick<Comment, 'text'>,
  parentId?: string
): Promise<string> => {
  if (content.text === '') return ''

  const id = await db.comments.add({
    id: v4(),
    text: content.text,
    status: 'published',
    dstamp: new Date().toISOString(),
    parentId
  })

  if (typeof parentId === 'string') {
    try {
      const parent = await db.comments.get(parentId)
      if (parent) {
        const { replies = [] } = parent

        db.comments.update(parent.id, {
          replies: [...replies, id]
        })
      }
    } catch (e) {
      // Do something with error
      console.log(e)
    }
  }

  return id
}
