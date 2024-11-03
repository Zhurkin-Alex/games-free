"use client"
import style from './Advertising.module.scss';
import React from "react";
import coin from '../../img/slots/coin.png'

interface IAdvertising {
  addCashADSHandler: () => void
  addCashPushHandler: () => void
  addCashRewardisHandler: () => void
  addCashADS: number
  addCashPushDisable: boolean
  addCashRewardisDisable: boolean
  addCashForFun: () => void
}

const Advertising = ({
  addCashADSHandler,
  addCashPushHandler,
  addCashRewardisHandler,
  addCashADS,
  addCashPushDisable,
  addCashRewardisDisable,
  addCashForFun,
}: IAdvertising) => {
  return (
    <div className={style.won_wrapper}>
      <div className={style.won_box}>
        <div className={style.task}>
          <span className={style.title}>
            You have lost, complete the tasks and get the money
          </span>
          <button
            className={style.buttonCash}
            type='button'
            onClick={addCashForFun}
          >
            <span className={style.text}> For fun </span>
            <span className={style.addCash}>
              <img
                src={coin.src}
                alt='image'
                className={style.coin}
              />
              <div className={style.cash}>1500</div>
            </span>
          </button>
          <button
            className={style.buttonCash}
            type='button'
            onClick={addCashADSHandler}
          >
            <span className={style.text}> Watch ads </span>
            <span className={style.addCash}>
              <img
                src={coin.src}
                alt='image'
                className={style.coin}
              />
              <div className={style.cash}>{addCashADS}</div>
            </span>
          </button>
          <button
            className={
              addCashPushDisable ? style.buttonCashFalse : style.buttonCash
            }
            type='button'
            onClick={addCashPushHandler}
            disabled={addCashPushDisable}
          >
            <span className={style.text}>
              {' '}
              Unlock Exclusive Benefits – Register Here!{' '}
            </span>
            <span className={style.addCash}>
              <span className={style.addCash}>
                <img
                  src={coin.src}
                  alt='image'
                  className={style.coin}
                />
                <div className={style.cash}>1200</div>
              </span>
            </span>
          </button>
          <button
            className={
              addCashRewardisDisable ? style.buttonCashFalse : style.buttonCash
            }
            type='button'
            onClick={addCashRewardisHandler}
            disabled={addCashRewardisDisable}
          >
            <span className={style.text}> register and complete task </span>
            <span className={style.addCash}>
              <span className={style.addCash}>
                <img
                  src={coin.src}
                  alt='image'
                  className={style.coin}
                />
                <div className={style.cash}>2000</div>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Advertising;
