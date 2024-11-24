'use client'

import dynamic from 'next/dynamic'

const MemoryMatch = dynamic(() => import('../components/MemoryMatch'), {
  ssr: false,
})

export default function MemoryMatchPage() {
  return <MemoryMatch />
}
