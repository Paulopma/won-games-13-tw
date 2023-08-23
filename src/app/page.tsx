'use client'

import { Button } from '@/components/ui/button'

export default function Home() {
  console.log(10 * 2)
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="hahaha p-5" onClick={() => window.alert('hahah')}>
        Ícone
      </div>
      <Button variant={'default'} className="h-fit w-fit">
        hhaah
      </Button>
    </main>
  )
}
