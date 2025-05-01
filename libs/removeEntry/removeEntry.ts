import { db } from '@/db'

/**
 * Sets the status of an entry to deleted so it no longer shows in the list
 * @param id The id of the entry to remove
 */
export const removeEntry = async (id: string): Promise<void> => {
  try {
    await db.comments.update(id, {
      status: 'deleted'
    })

    // Now update the child comments - fetch it now rather than passing the array in to ensure we've not missed any updates
    await db.comments.where({ parentId: id }).modify({ status: 'deleted' })
  } catch (e) {
    console.log(e)
  }
}
