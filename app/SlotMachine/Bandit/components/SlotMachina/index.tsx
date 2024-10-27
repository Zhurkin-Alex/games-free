"use client"
import storageService from '../../../../services/storageService';
import { useEffect, useRef, useState } from 'react';
import Advertising from '../Advertising/Advertising';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import Prize from '../Prize/Prize';
import TitlePrize from '../TitlePrize/TitlePrize';
import SlotContainer from '../SlotContainer/SlotContainer';
import style from './SlotMachina.module.scss';
import { winMatrixData } from '../../data';

import coin from '../../img/slots/coin.png'

const SlotMachina = () => {
  const [isDisabledBet, setDisabledBet] = useState(false);
  const [isRunning1, setIsRunning1] = useState(false);
  const [isRunning2, setIsRunning2] = useState(false);
  const [isRunning3, setIsRunning3] = useState(false);
  const [cash, setCash] = useState(Number(storageService.get('cash')) || 1000);
  const [total, setTotal] = useState(100);
  const [slotIndexes, setSlotIndexes] = useState({
    slot1: 0,
    slot2: 0,
    slot3: 0,
    slot4: 0,
    slot5: 0,
    slot6: 0,
    slot7: 0,
    slot8: 0,
    slot9: 0,
  });
  const [countStep, setCountStep] = useState(0);
  const [totalWin, setTotalWin] = useState(0);
  const [loss, setLoss] = useState(false);
  const [showWon, setShowWon] = useState(false);
  const [winNumberSlot, setWinNumberSlot] = useState<any[][]>([]);
  const audioRef1 = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);
  const audioRef3 = useRef<HTMLAudioElement | null>(null);
  const audioRefLos = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const cashStore = Number(storageService.get('cash'));

    if (cash !== cashStore && storageService.get('cash') !== null) {
      setCash(cashStore);
    } else if (cashStore === 0 && storageService.get('cash') !== null) {
      setLoss(true);
    }

    if (loss && cashStore > 0) {
      setLoss(false);
    }


    if (cashStore === 0 && storageService.get('cash') !== null) {
      setLoss(true);
    }

  }, []);

  const compareArrays = (arr1: any, arr2: any) => {
    if (!arr1 || !arr2) {
      return false;
    }

    // Проверяем, имеют ли массивы одинаковую длину
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i += 1) {
      if (arr2[i] === 1 && arr1[i] !== arr1[arr2.indexOf(1)]) {
        return false; // Нашли несовпадение, выходим из цикла
      }
    }

    return true;
  };

  const [widthPrize, setWidth] = useState(
    storageService.get('widthPrize') || '100%',
  );
  const [initialWidth, setInitialWidth] = useState(100);
  const [totalForWin, setTotalForWin] = useState(
    Number(storageService.get('totalForWin')) || 3000,
  );

  /** function for update prize component - TitlePrize */
  const updateTitlePrize = (value: number): void => {
    const newWidth = initialWidth - (value / 3000) * 100;

    if (newWidth < 0) {
      setTotalForWin(0);
      setWidth(`${0}%`);

      storageService.set('widthPrize', `${0}%`);
      storageService.set('totalForWin', '0');
    } else {
      setInitialWidth(newWidth);
      setTotalForWin(totalForWin - value);
      setWidth(`${newWidth}%`);

      storageService.set('widthPrize', `${newWidth}%`);
      storageService.set('totalForWin', (totalForWin - value).toString());
    }
  };

  const checkWin = (exitSlot: any) => {
    let winCash = 0;
    const ymid = storageService.get('userid');
    const winSlotArray = [];

    for (const key in winMatrixData) {
      if (Object.prototype.hasOwnProperty.call(winMatrixData, key)) {
        const { matrix, win } = winMatrixData[key];

        const checkArray = compareArrays(exitSlot, matrix);

        if (checkArray) {
          setDisabledBet(true);
          /** добавляем массив с выигрышными комбинациями */
          // const winSlotArray = [];

          for (let el = 0; el < matrix.length; el += 1) {
            if (matrix[el] === 1) {
              const positionMatrix = el;
              const indexWin = exitSlot[el];
              const winSlot = [positionMatrix, indexWin];

              winSlotArray.push(winSlot);
            }
          }
          setWinNumberSlot(winSlotArray);

          if (total > 50) {
            winCash = Math.round((total * 1.5 + win) / 50) * 50;
          } else {
            winCash += win;
          }
        }
      }
    }

    if (winCash) {
      setTotalWin(winCash + totalWin);

      setTimeout(() => {
        setShowWon(true);
        setDisabledBet(false);
        // window.dataLayer?.push({
        //   event: 'SlotMashineWin',
        //   casinoTotalWin: winCash,
        //   casinoUserid: ymid,
        // });
      }, 500);

      if (!showWon) {
        storageService.set('cash', (cash + winCash).toString());
        setCash(cash + winCash);
        updateTitlePrize(winCash);
      }
    } else if (!winCash && cash <= 0 && !showWon && countStep >= 1) {
      setTimeout(() => {
        // window.dataLayer?.push({
        //   event: 'SlotMashineAddCashShow',
        // });
        audioRefLos?.current?.play();
        setLoss(true);
      }, 500);
    }
  };

  /**  watch for spine */
  useEffect(() => {
    if (!isDisabledBet && countStep >= 1) {
      const exitSlot = Object.values(slotIndexes);

      checkWin(exitSlot);

      if (total > cash) {
        setTotal(cash);
      }
    }
  }, [slotIndexes]);

  const totalMinus = () => {
    setTotal((prevTotal) => {
      const newTotal = prevTotal;
      const step = 50;

      if (total > 0) {
        return newTotal - step;
      }

      return newTotal;
    });
  };

  const totalPlus = () => {
    setTotal((prevTotal) => {
      const newTotal = prevTotal;
      const step = 50;

      if (total < cash) {
        return newTotal + step;
      }

      return newTotal;
    });
  };

  const minusCash = () => {
    if (total <= cash) {
      setCash((prevCash) => prevCash - total);
      storageService.set('cash', (cash - total).toString());
    }
  };

  /** start play */
  const startSlotMachine = () => {
    audioRef1.current?.pause();
    audioRef2.current?.pause();
    audioRef3.current?.pause();
    if (audioRef1.current) {
        audioRef1.current.currentTime = 0;
    }
      
    if (audioRef2.current) {
    audioRef2.current.currentTime = 0;
    }
    if (audioRef3.current) {
      audioRef3.current.currentTime = 0;
    }

    setTotalWin(0);
    minusCash();
    setWinNumberSlot([]);
    const ymid = storageService.get('userid');

    if (total <= cash && total > 0 && isDisabledBet === false) {
      setCountStep((prev) => prev + 1);
      setDisabledBet(true);
      setIsRunning1(true);
      setIsRunning2(true);
      setIsRunning3(true);

      setCash(Number(storageService.get('cash')));

      setTimeout(() => {
        setIsRunning1(false);
        audioRef1.current?.play();
      }, 1000);
      setTimeout(() => {
        audioRef1.current?.pause();
        audioRef2.current?.play();
        setIsRunning2(false);
      }, 1500);
      setTimeout(() => {
        audioRef2.current?.pause();
        audioRef3.current?.play();
        setIsRunning3(false);
        // audioRef3.current.addEventListener('ended', () => {
        //   setDisabledBet(false);
        // });
        setDisabledBet(false);
      }, 2000);
    }

    if (cash <= 0) {
      setDisabledBet(false);
      setIsRunning1(false);
      setIsRunning2(false);
      setIsRunning3(false);
    }
  };

  const [addCashADSDisable, setAddCashADSDisable] = useState(false);
  const [addCashPushDisable, setAddCashPushDisable] = useState(false);
  const [addCashRewardisDisable, setAddCashRewardisDisable] = useState(false);
  const [addCashADS, setAddCashADS] = useState(600);

  /** function after touch on button for fun - test button */
  const addCashForFun = () => {
    setCash(1500);
    setTotal(50);
    setLoss(false);
    storageService.set('cash', '1500');
  };

  /** function after touch on button ads */
  const addCashADSHandler = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const returnUrl = encodeURIComponent(
      window.location.hostname === 'do.th61.com'
        ? `https://do.th61.com/back.html?S=${urlParams.get(
            's',
          )}&Z=${urlParams.get('z')}&topup=${addCashADS}`
        : `${window.location.href}&topup=${addCashADS}`,
    );

    const varParam = urlParams.get('z');
    const ymid = storageService.get('userid');

    // window.dataLayer?.push({
    //   event: 'SlotMashineAddCash',
    //   casinoWatchAds: true,
    //   casinoUserid: ymid,
    // });

    window.open(
      `https://hturnshal.com/link?z=6488031&var=${varParam}&ymid=${ymid}&var_4=${returnUrl}`,
      '_blank',
    );
  };

  /** function after touch on push ads */
  const addCashPushHandler = () => {
    setTimeout(() => {
      storageService.set('cash', '1200');
      setCash(1200);
      setTotal(50);
      setLoss(false);
      setAddCashPushDisable(true);
    }, 10000);

    const varParamO = new URLSearchParams(window.location.search).get('z');
    const varParam = varParamO;
    const ymid = storageService.get('userid');

    // window.dataLayer?.push({
    //   event: 'SlotMashineAddCash',
    //   casinoSubPush: true,
    //   casinoUserid: ymid,
    // });

    window.open(
      `https://oodrampi.com/4/6491841?var=${varParam}&ymid=${ymid}`,
      '_blank',
    );
  };

  /** function after touch on rewardis ads */
  const addCashRewardisHandler = () => {
    setTimeout(() => {
      storageService.set('cash', '2000');
      setCash(2000);
      setTotal(50);
      setLoss(false);
      setAddCashRewardisDisable(true);
    }, 10000);

    const varParamO = new URLSearchParams(window.location.search).get('z');
    const varParam = varParamO;
    const ymid = storageService.get('userid');

    // window.dataLayer?.push({
    //   event: 'SlotMashineAddCash',
    //   casinoRegRevardis: true,
    //   casinoUserid: ymid,
    // });

    window.open(
      `https://ptaumtee.com/link?z=6488027&var=${varParam}&ymid=${ymid}`,
      '_blank',
    );
  };

  /** look for all ads, and after touch for all button - cash for button ads - 1000 */
  useEffect(() => {
    if (addCashADSDisable && addCashPushDisable && addCashRewardisDisable) {
      const cashDefault = 1000;

      setAddCashADS(cashDefault);
      setAddCashADSDisable(false);
    }
  }, [addCashADSDisable, addCashPushDisable, addCashRewardisDisable]);

  return (
    <div className={style.slotMashina}>
      {showWon && <Prize setShowWon={setShowWon} totalWin={totalWin} />}
      {loss && (
        <Advertising
          addCashADSDisable={addCashADSDisable}
          addCashADSHandler={addCashADSHandler}
          addCashPushHandler={addCashPushHandler}
          addCashRewardisHandler={addCashRewardisHandler}
          addCashADS={addCashADS}
          addCashPushDisable={addCashPushDisable}
          addCashRewardisDisable={addCashRewardisDisable}
          addCashForFun={addCashForFun}
        />
      )}
      <div className={style.section}>
        <TitlePrize
          totalForWin={totalForWin}
          addCashRewardisHandler={addCashRewardisHandler}
          widthPrize={widthPrize}
        />
        <div className={style.cashWrapper}>
          <div className={style.cashContainer}>
            <img src={coin.src} alt='image' className={style.coin} />
            <div className={style.cash}>{cash}</div>
          </div>
        </div>
        <SlotContainer
          setSlotIndexes={setSlotIndexes}
          isRunning1={isRunning1}
          isRunning2={isRunning2}
          isRunning3={isRunning3}
          winNumberSlot={winNumberSlot}
        />
        {/* <SlotContainer2 slotIndexes={slotIndexes} /> */}
        <ButtonContainer
          totalMinus={totalMinus}
          startSlotMachine={startSlotMachine}
          isDisabledBet={isDisabledBet}
          total={total}
          totalPlus={totalPlus}
        />
        <audio ref={audioRef1}>
          <source src='/audio/slotMachina/blip.mp3' type='audio/mpeg' />
          {/* Add a track element without captions */}
          <track kind='captions' label='No captions available' />
        </audio>
        <audio ref={audioRef2}>
          <source src='/audio/slotMachina/blip.mp3' type='audio/mpeg' />
          {/* Add a track element without captions */}
          <track kind='captions' label='No captions available' />
        </audio>
        <audio ref={audioRef3}>
          <source src='/audio/slotMachina/blip.mp3' type='audio/mpeg' />
          {/* Add a track element without captions */}
          <track kind='captions' label='No captions available' />
        </audio>
        <audio ref={audioRefLos}>
          <source src='/audio/slotMachina/los.mp3' type='audio/mpeg' />
          {/* Add a track element without captions */}
          <track kind='captions' label='No captions available' />
        </audio>
      </div>
    </div>
  );
};

export default SlotMachina;
