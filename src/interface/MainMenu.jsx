// Copyright (c) 2023 code eye <code.eye1016@gmail.com>

import { useState } from "react";
import useGame from "../stores/useGame.js";
import LogoBall from "../assets/logo_ball_stroke.svg";
// import Wordmark from "../assets/wordmark.svg";
import MichaelLogo from "../assets/mm_white.svg";
import { getLocalStorage, setLocalStorage } from "../stores/utils.js";

export default function MainMenu() {
  const {
    mode,
    setMode,
    blocksCount,
    setBlocksCount,
    level,
    setLevel,
    difficulty,
    setDifficulty,
    setIsInGame,
  } = useGame();

  const [isSettings, setIsSettings] = useState(false);

  document.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      setIsInGame(true);
    }
  });

  return (
    <div className="main-menu">
      <img className="logo-ball" src={LogoBall} />
      <h1 className="wordmark">ボールプレイヤー</h1>
      <div className="main-menu-button" onClick={() => setIsInGame(true)}>
        プレイする
      </div>

      {!isSettings ? (
        <div className="main-menu-button" onClick={() => setIsSettings(true)}>
          設定
        </div>
      ) : (
        <>
          <div className="main-menu-section-title">モード</div>
          <div className="main-menu-selection-area">
            <div
              className={`main-menu-selection ${
                mode === "random" ? "main-menu-selected" : ""
              }`}
              onClick={() => setMode("random")}
            >
              ランダム
            </div>
            <div
              className={`main-menu-selection ${
                mode === "tour" ? "main-menu-selected" : ""
              }`}
              onClick={() => setMode("tour")}
            >
              旅行
            </div>
            <div
              className={`main-menu-selection ${
                mode === "adventure" ? "main-menu-selected" : ""
              }`}
              onClick={() => setMode("adventure")}
            >
              冒険
            </div>
          </div>

          {mode === "random" && (
            <>
              <div className="main-menu-section-title">Difficulty</div>
              <div className="main-menu-selection-area">
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 1 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setDifficulty(1);
                    setLocalStorage("difficulty", 1);
                  }}
                >
                  カンタン
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 3 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setDifficulty(3);
                    setLocalStorage("difficulty", 3);
                  }}
                >
                  ミディアム
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 5 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setDifficulty(5);
                    setLocalStorage("difficulty", 5);
                  }}
                >
                  ハード
                </div>
                {/* <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 10 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setDifficulty(10);
                    setLocalStorage("difficulty", 10);
                  }}
                >
                  悪
                </div> */}
              </div>

              <div className="main-menu-section-title">ブロック数</div>
              <div className="main-menu-selection-area">
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 5 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setBlocksCount(5);
                    setLocalStorage("blocksCount", 5);
                  }}
                >
                  5
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 10 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setBlocksCount(10);
                    setLocalStorage("blocksCount", 10);
                  }}
                >
                  10
                </div>

                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 15 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setBlocksCount(15);
                    setLocalStorage("blocksCount", 15);
                  }}
                >
                  15
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 20 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setBlocksCount(20);
                    setLocalStorage("blocksCount", 20);
                  }}
                >
                  20
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 30 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setBlocksCount(30);
                    setLocalStorage("blocksCount", 30);
                  }}
                >
                  30
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 40 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setBlocksCount(40);
                    setLocalStorage("blocksCount", 40);
                  }}
                >
                  40
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 50 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setBlocksCount(50);
                    setLocalStorage("blocksCount", 50);
                  }}
                >
                  50
                </div>
                <div
                  className={`main-menu-selection main-menu-selection-short ${
                    blocksCount === 100 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setBlocksCount(100);
                    setLocalStorage("blocksCount", 100);
                  }}
                >
                  100
                </div>
              </div>
            </>
          )}

          {mode === "tour" && (
            <>
              <div className="main-menu-section-title">難易度</div>
              <div className="main-menu-selection-area">
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 1 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setDifficulty(1);
                    setLocalStorage("difficulty", 1);
                  }}
                >
                  カンタン
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 3 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setDifficulty(3);
                    setLocalStorage("difficulty", 3);
                  }}
                >
                  中くらい
                </div>
                <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 5 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setDifficulty(5);
                    setLocalStorage("difficulty", 5);
                  }}
                >
                  難しい
                </div>
                {/* <div
                  className={`main-menu-selection ${
                    parseInt(difficulty) === 10 ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setDifficulty(10);
                    setLocalStorage("difficulty", 10);
                  }}
                >
                  悪
                </div> */}
              </div>

              <div className="main-menu-section-title">ビーチ</div>
              <div className="main-menu-selection-area">
                <div
                  className={`main-menu-selection ${
                    level === "copacabana" ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setLevel("copacabana");
                    setLocalStorage("level", "copacabana");
                  }}
                >
                  コパカバーナ
                </div>
                <div
                  className={`main-menu-selection ${
                    level === "santamonica" ? "main-menu-selected" : ""
                  }`}
                  onClick={() => {
                    setLevel("santamonica");
                    setLocalStorage("level", "santamonica");
                  }}
                >
                  サンタモニカ
                </div>
              </div>
              <div className="coming-soon">さらに多くのビーチが近々登場します！</div>
            </>
          )}

          {mode === "adventure" && (
            <div className="coming-soon">近日公開！</div>
          )}
        </>
      )}

      <div className="main-menu-about-section">
        <div className="main-menu-about">
          <a href="https://oyatech.co.jp">
            © 2023 oyatech.co.jp
          </a>
        </div>
      </div>
    </div>
  );
}
