'use client'

import randomInt from '@/app/services/_randomInt'
import React from 'react'

import slot1 from '../../img/slots/slot-1.png'
import slot2 from '../../img/slots/slot-2.png'
import slot3 from '../../img/slots/slot-3.png'
import slot4 from '../../img/slots/slot-4.png'
import slot5 from '../../img/slots/slot-5.png'
import slot6 from '../../img/slots/slot-6.png'
import slot7 from '../../img/slots/slot-7.png'
import slot8 from '../../img/slots/slot-8.png'
import slot9 from '../../img/slots/slot-9.png'
import Slot from '../Slot/Slot'
import style from './SlotContainer.module.scss'

interface ISlotContainer {
  setSlotIndexes: React.Dispatch<
    React.SetStateAction<{
      slot1: number
      slot2: number
      slot3: number
      slot4: number
      slot5: number
      slot6: number
      slot7: number
      slot8: number
      slot9: number
    }>
  >
  isRunning1: boolean
  isRunning2: boolean
  isRunning3: boolean
  winNumberSlot: number[][]
}

interface IUpdateSlotIndex {
  slotName: string
  newIndex: number
}
const SlotContainer = ({
  setSlotIndexes,
  isRunning1,
  isRunning2,
  isRunning3,
  winNumberSlot,
}: ISlotContainer) => {
  const updateSlotIndex = ({ slotName, newIndex }: IUpdateSlotIndex) => {
    // Обновляем состояние с новым индексом для конкретного Slot
    setSlotIndexes(prevState => ({
      ...prevState,
      [slotName]: newIndex,
    }))
  }

  const symbols = [
    slot1.src,
    slot2.src,
    slot3.src,
    slot4.src,
    slot5.src,
    slot6.src,
    slot7.src,
    slot8.src,
    slot9.src,
  ]

  return (
    <div className={style.slotWindow}>
      <div className={style.slotOne}>
        <Slot
          isRunning={isRunning1}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={0}
          setViewLastPage={(index: number) =>
            updateSlotIndex({ slotName: 'slot1', newIndex: index })
          }
          slot={1}
          winNumberSlot={winNumberSlot}
        />
        <Slot
          isRunning={isRunning2}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={1}
          setViewLastPage={(index: number) =>
            updateSlotIndex({ slotName: 'slot2', newIndex: index })
          }
          slot={2}
          winNumberSlot={winNumberSlot}
        />
        <Slot
          isRunning={isRunning3}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={2}
          setViewLastPage={(index: number) =>
            updateSlotIndex({ slotName: 'slot3', newIndex: index })
          }
          slot={3}
          winNumberSlot={winNumberSlot}
        />
      </div>
      <div className={style.slotSecond}>
        <Slot
          isRunning={isRunning1}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={2}
          setViewLastPage={(index: number) =>
            updateSlotIndex({ slotName: 'slot4', newIndex: index })
          }
          slot={4}
          winNumberSlot={winNumberSlot}
        />
        <Slot
          isRunning={isRunning2}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={3}
          setViewLastPage={(index: number) =>
            updateSlotIndex({ slotName: 'slot5', newIndex: index })
          }
          slot={5}
          winNumberSlot={winNumberSlot}
        />
        <Slot
          isRunning={isRunning3}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={4}
          setViewLastPage={(index: number) =>
            updateSlotIndex({ slotName: 'slot6', newIndex: index })
          }
          slot={6}
          winNumberSlot={winNumberSlot}
        />
      </div>
      <div className={style.slotThree}>
        <Slot
          isRunning={isRunning1}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={4}
          setViewLastPage={(index: number) =>
            updateSlotIndex({ slotName: 'slot7', newIndex: index })
          }
          slot={7}
          winNumberSlot={winNumberSlot}
        />
        <Slot
          isRunning={isRunning2}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={5}
          setViewLastPage={(index: number) =>
            updateSlotIndex({ slotName: 'slot8', newIndex: index })
          }
          slot={8}
          winNumberSlot={winNumberSlot}
        />
        <Slot
          isRunning={isRunning3}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={6}
          setViewLastPage={(index: number) =>
            updateSlotIndex({ slotName: 'slot9', newIndex: index })
          }
          slot={9}
          winNumberSlot={winNumberSlot}
        />
      </div>
    </div>
  )
}

export default SlotContainer
