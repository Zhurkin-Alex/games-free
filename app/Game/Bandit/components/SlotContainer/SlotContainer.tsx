"use client"
import randomInt from '../../../../services/_randomInt';
import Slot from '../Slot/Slot';
import style from './SlotContainer.module.scss';

import slot1 from '../../img/slots/slot-1.png'
import slot2 from '../../img/slots/slot-2.png'
import slot3 from '../../img/slots/slot-3.png'
import slot4 from '../../img/slots/slot-4.png'
import slot5 from '../../img/slots/slot-5.png'
import slot6 from '../../img/slots/slot-6.png'
import slot7 from '../../img/slots/slot-7.png'
import slot8 from '../../img/slots/slot-8.png'
import slot9 from '../../img/slots/slot-9.png'

function SlotContainer({
  setSlotIndexes,
  isRunning1,
  isRunning2,
  isRunning3,
  winNumberSlot,
}: any) {
  const updateSlotIndex = (slotName: string, newIndex: number): any => {
    // Обновляем состояние с новым индексом для конкретного Slot
    setSlotIndexes((prevState: any) => ({
      ...prevState,
      [slotName]: newIndex,
    }));
  };

  const symbols = 
      [
        slot1.src,
        slot2.src,
        slot3.src,
        slot4.src,
        slot5.src,
        slot6.src,
        slot7.src,
        slot8.src,
        slot9.src,
      ];

  return (
    <div
      className={style.slotWindow}
    >
      <div className={style.slotOne}>
        <Slot
          isRunning={isRunning1}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={0}
          setViewLastPage={(index: number) => updateSlotIndex('slot1', index)}
          slot={1}
          winNumberSlot={winNumberSlot}
        />
        <Slot
          isRunning={isRunning2}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={1}
          setViewLastPage={(index: number) => updateSlotIndex('slot2', index)}
          slot={2}
          winNumberSlot={winNumberSlot}
        />
        <Slot
          isRunning={isRunning3}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={2}
          setViewLastPage={(index: number) => updateSlotIndex('slot3', index)}
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
          setViewLastPage={(index: number) => updateSlotIndex('slot4', index)}
          slot={4}
          winNumberSlot={winNumberSlot}
        />
        <Slot
          isRunning={isRunning2}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={3}
          setViewLastPage={(index: number) => updateSlotIndex('slot5', index)}
          slot={5}
          winNumberSlot={winNumberSlot}
        />
        <Slot
          isRunning={isRunning3}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={4}
          setViewLastPage={(index: number) => updateSlotIndex('slot6', index)}
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
          setViewLastPage={(index: number) => updateSlotIndex('slot7', index)}
          slot={7}
          winNumberSlot={winNumberSlot}
        />
        <Slot
          isRunning={isRunning2}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={5}
          setViewLastPage={(index: number) => updateSlotIndex('slot8', index)}
          slot={8}
          winNumberSlot={winNumberSlot}
        />
        <Slot
          isRunning={isRunning3}
          symbols={symbols}
          timeInterval={randomInt(135, 155)}
          startIndex={6}
          setViewLastPage={(index: number) => updateSlotIndex('slot9', index)}
          slot={9}
          winNumberSlot={winNumberSlot}
        />
      </div>
    </div>
  );
}

export default SlotContainer;
