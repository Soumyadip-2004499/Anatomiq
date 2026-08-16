// TSL recipes are kept isolated so the viewer can progressively adopt the
// WebGPU renderer while retaining a reliable WebGL fallback for all learners.
import { dot, normalize, positionViewDirection, normalView, pow, oneMinus } from "three/tsl";

export const medicalRimNode = pow(
  oneMinus(dot(normalize(normalView), normalize(positionViewDirection))),
  2.4,
);
