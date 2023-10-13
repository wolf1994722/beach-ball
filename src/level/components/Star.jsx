// Beachy Beachy Ball
// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Star(props) {
  const { nodes, materials } = useGLTF("./models/logo.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="logo"
        castShadow
        receiveShadow
        geometry={nodes.logo.geometry}
        material={materials.blinn2SG}
        rotation={[1.58, 0, 1.58]}
        position={[0, -10, 0]}
      />
    </group>
  );
}

useGLTF.preload("./models/logo.glb");
