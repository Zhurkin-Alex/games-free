'use client'

import dynamic from 'next/dynamic'

const FlyingElements = dynamic(() => import('../components/FlyingElements'), {
  ssr: false,
})

export default function FlyingElementsPage() {
  return <FlyingElements />
}
