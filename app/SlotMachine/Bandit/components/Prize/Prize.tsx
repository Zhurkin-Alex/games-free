"use client"
import { useEffect, useRef, useState } from 'react';
import style from './Prize.module.scss';

import win from '../../img/slots/win.png'

function Prize({ setShowWon, totalWin }: any) {
  const [count, setCount] = useState(0);

  const collectHandler = () => {
    setShowWon(false);
    // console.warn('collect');
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioRefCash = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current?.play();
  }, []);

  useEffect(() => {
    const updateTotalHearts = () => {
      setCount((prevValue: number) => prevValue + 1);
    };

    const countTimer = setInterval(() => {
      if (count >= totalWin) {
        audioRefCash.current?.pause();
        audioRefCash.current?.load();
        clearInterval(countTimer);
      } else {
        audioRefCash.current?.play();
        updateTotalHearts();
      }
    }, 8);

    return () => {
      clearInterval(countTimer);
    };
  }, [count]);

  return (
    <div className={style.won_wrapper}>
      <div className={style.won_box}>
        <div className={style.won}>
          <img src={win.src} alt='image' className={style.win_page} />
          <div className={style.coins}> +{count} coins</div>
          <button
            className={style.collect}
            type='button'
            onClick={collectHandler}
          >
            Collect
          </button>
        </div>
      </div>
      <audio ref={audioRef}>
        <source src='/audio/slotMachina/win.mp3' type='audio/mpeg' />
        {/* Add a track element without captions */}
        <track kind='captions' label='No captions available' />
      </audio>
      <audio ref={audioRefCash}>
        <source src='/audio/slotMachina/win-cash.mp3' type='audio/mpeg' />
        {/* Add a track element without captions */}
        <track kind='captions' label='No captions available' />
      </audio>
    </div>
  );
}

export default Prize;
