import Dexie, { type EntityTable } from 'dexie'

type CommentStatus = 'published' | 'deleted'

interface Comment {
  id: string
  text: string
  status: CommentStatus
  replies?: Array<string>
  parentId?: string
  dstamp: string
}

// Initialise the DB
const db = new Dexie('CommentsDB') as Dexie & {
  comments: EntityTable<Comment, 'id'>
}

// Set up the indices
db.version(1).stores({
  comments: '&id, status, dstamp, parentId'
})

export type { Comment }
export { db }
