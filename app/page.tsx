'use client'

import { List } from '@/components/List'
import { NewComment } from '@/components/NewComment'

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 sm:items-start'>
        <div className='flex flex-col w-full items-center'>
          <h1 className='text-2xl font-bold mb-4'>The Comment Store</h1>
          <NewComment />
        </div>
        <List />
      </main>
    </div>
  )
}
