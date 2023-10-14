// Copyright (c) 2023 code eye <code.eye1016@gmail.com>

import {
  BlockEmpty,
  BlockSpinner,
  BlockDoubleSpinner,
  BlockLimbo,
  BlockDoubleLimbo,
  BlockSlidingWall,
  BlockDoubleSlidingWall,
} from "./Blocks.jsx";

const levels = [
  {
    name: "Copacabana",
    difficulty: 1,
    blocks: [
      // 19
      BlockEmpty,
      BlockEmpty,
      BlockSpinner,
      BlockEmpty,
      BlockEmpty,
      BlockSlidingWall,
      BlockEmpty,
      BlockEmpty,
      BlockLimbo,
      BlockEmpty,
      BlockEmpty,
      BlockDoubleSpinner,
      BlockEmpty,
      BlockEmpty,
      BlockDoubleLimbo,
      BlockEmpty,
      BlockEmpty,
      BlockDoubleSlidingWall,
      BlockEmpty,
    ],
  },
  {
    name: "Santa Monica",
    difficulty: 1,
    blocks: [
      // 34
      BlockEmpty,
      BlockEmpty,
      BlockSpinner,
      BlockDoubleSpinner,
      BlockEmpty,
      BlockSlidingWall,
      BlockDoubleSlidingWall,
      BlockEmpty,
      BlockLimbo,
      BlockDoubleLimbo,
      BlockEmpty,
      BlockEmpty,
      BlockDoubleSpinner,
      BlockDoubleSpinner,
      BlockDoubleSlidingWall,
      BlockDoubleSlidingWall,
      BlockDoubleLimbo,
      BlockDoubleLimbo,
      BlockDoubleSpinner,
      BlockDoubleSlidingWall,
      BlockDoubleLimbo,
      BlockDoubleSpinner,
      BlockDoubleSpinner,
      BlockDoubleSpinner,
      BlockDoubleSlidingWall,
      BlockDoubleSlidingWall,
      BlockDoubleSlidingWall,
      BlockDoubleLimbo,
      BlockDoubleLimbo,
      BlockDoubleLimbo,
      BlockDoubleSpinner,
      BlockDoubleSlidingWall,
      BlockDoubleLimbo,
      BlockEmpty,
    ],
  },
];

levels.forEach((level) => {
  level.count = level.blocks.length;
});

export default levels;
