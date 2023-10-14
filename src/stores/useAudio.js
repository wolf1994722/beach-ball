// Copyright (c) 2023 code eye <code.eye1016@gmail.com>

import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { getLocalStorage, setLocalStorage } from "./utils";

const useAudio = create(
  subscribeWithSelector((set) => ({
    audio: getLocalStorage("audio") ?? true,
    toggleAudio: () => {
      set((state) => {
        const newAudioState = !state.audio;
        setLocalStorage("audio", newAudioState);
        return { audio: newAudioState };
      });
    },
  }))
);

export default useAudio;
