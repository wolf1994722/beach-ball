// Copyright (c) 2023 code eye <code.eye1016@gmail.com>

import { useKeyboardControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { addEffect } from "@react-three/fiber";
import useGame from "../stores/useGame.js";
import useAudio from "../stores/useAudio.js";
import Logo from "../assets/logo_white.svg";

export default function Interface() {
  const time = useRef();
  const { mode, setMode, restart, phase, setIsInGame } = useGame();
  const { audio, toggleAudio } = useAudio();
  // const forward = useKeyboardControls((state) => state.forward);
  // const backward = useKeyboardControls((state) => state.backward);
  // const leftward = useKeyboardControls((state) => state.leftward);
  // const rightward = useKeyboardControls((state) => state.rightward);
  // const jump = useKeyboardControls((state) => state.jump);

  /**
   * Mode
   */
  const [modeName, setModeName] = useState(mode);

  useEffect(() => {
    switch (mode) {
      case "random":
        setModeName("Random");
        break;
      case "tour":
        setModeName("Tour");
        break;
      case "adventure":
        setModeName("Adventure");
        break;
    }
  }, [mode]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Restart game
      if (e.code === "Escape") {
        setIsModalOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, setIsModalOpen]);

  const clearData = () => {
    window.localStorage.clear();
  };

  const handleRestart = () => {
    restart();
  };

  const [selectedMode, setSelectedMode] = useState(null);

  useEffect(() => {
    setSelectedMode(modeOptions.find((m) => m.name === mode));
  }, []);

  function handleModeClick(mode) {
    setSelectedMode(mode);
  }

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState();

      let elapsedTime = 0;

      if (state.phase === "playing") {
        elapsedTime = Date.now() - state.startTime;
      } else if (state.phase === "ended") {
        elapsedTime = state.endTime - state.startTime;
      }

      elapsedTime /= 1000;
      elapsedTime = elapsedTime.toFixed(2);

      if (time.current) {
        time.current.textContent = elapsedTime;
      }
    });

    return () => {
      unsubscribeEffect();
    };
  }, []);

  let modes = [
    { id: "0", text: "ランダム", name: "random" },
    { id: "1", text: "旅行", name: "tour" },
    { id: "2", text: "冒険", name: "adventure" },
  ];

  const modeOptions = modes.map((mode) => (
    <div
      key={mode.id}
      className={`mode-selection ${
        selectedMode && selectedMode.name === mode.name ? "selected-mode" : ""
      }`}
      onClick={() => {
        handleModeClick(mode);
        setMode(`${mode.name}`);
        window.localStorage.setItem("mode", `"${mode.name}"`);
        handleRestart();
      }}
    >
      {mode.text}
    </div>
  ));

  return (
    <div className="interface">
      {/* Logo */}
      <img className="logo" src={Logo} alt="Beachy Beachy Ball Logo" />
      {/* Restart */}
      {phase === "ended" && (
        <div className="restart">
          <div className="finished">終了した！</div>
          <img
            src="./icons/replay.png"
            className="restart-button"
            onClick={restart}
          />
          <div>再びプレー</div>
        </div>
      )}
      {/* Control Buttons (top-right) */}
      <div className="control-buttons">
        <div className="control-button" id="sound" onClick={toggleAudio}>
          {audio ? (
            <img src="./icons/sound_on.svg" />
          ) : (
            <img src="./icons/sound_off.svg" />
          )}
        </div>
        <div
          className="control-button"
          id="menu"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <img src="./icons/menu.svg" />
        </div>
      </div>
      {/* Bottom */}
      <div className="bottom">
        {/* Controls */}
        <div className="controls">
          {/* Mode */}
          <div className="bottom-label">モード</div>
          <div className="mode">{mode}</div>
          {/* <div className="raw">
            <div className={`key ${forward ? "active" : ""}`}></div>
          </div>
          <div className="raw">
            <div className={`key ${leftward ? "active" : ""}`}></div>
            <div className={`key ${backward ? "active" : ""}`}></div>
            <div className={`key ${rightward ? "active" : ""}`}></div>
          </div>
          <div className="raw">
            <div className={`key large ${jump ? "active" : ""}`}></div>
          </div> */}
        </div>
        {/* Time */}
        <div className="bottom-right">
          <div className="time-container">
            <div className="bottom-label">タイム</div>
            <div className="time" ref={time}></div>
            {/* <div className="mode">{mode}</div> */}
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">メニュー</div>

            <div className="modal-main">
              <div className="section-title">モード</div>
              <div className="mode-area">{modeOptions}</div>
              <div
                className="modal-button disabled"
                onClick={() => {
                  console.log("High Scores");
                }}
              >
                高得点
              </div>
              <div
                className="modal-button"
                onClick={() => {
                  clearData();
                }}
              >
                データのクリア
              </div>
              <div
                className="modal-button disabled"
                onClick={() => {
                  console.log("Help");
                }}
              >
                ヘルプ
              </div>
              <div
                className="modal-button disabled"
                onClick={() => {
                  console.log("Credits");
                }}
              >
                クレジット
              </div>
              <div
                className="modal-button"
                onClick={() => {
                  setIsInGame(false);
                }}
              >
                メインメニュー
              </div>
              <div
                className="modal-button"
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                戻る
              </div>
            </div>
            <div className="modal-about-area">
              <div className="modal-about">
                <a href="https://oyatech.co.jp">
                  © 2023 Oyatech.
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
