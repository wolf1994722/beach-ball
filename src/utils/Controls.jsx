// Copyright (c) 2023 code eye <code.eye1016@gmail.com>

import { KeyboardControls } from "@react-three/drei";

const controls = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
];

function Controls({ children }) {
  return <KeyboardControls map={controls}>{children}</KeyboardControls>;
}

export default Controls;
