'use client'

import dynamic from 'next/dynamic'

const SlotMachine = dynamic(() => import('../components/SlotMachine/Bandit'), {
  ssr: false,
})

export default function SlotMachinePage() {
  return <SlotMachine />
}
