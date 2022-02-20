export const circleKey = Symbol();
export const ellipseKey = Symbol();
export const layerKey = Symbol();
export const lineKey = Symbol();
export const rectKey = Symbol();
export const stageKey = Symbol();
export const wedgeKey = Symbol();
export const textKey = Symbol();

import { createEventDispatcher } from "svelte";

export const eventNames = [
  "mouseover",
  "mouseout",
  "mouseenter",
  "mouseleave",
  "mousemove",
  "mousedown",
  "mouseup",
  "wheel",
  "click",
  "dblclick",
  "touchstart",
  "touchmove",
  "touchend",
  "tap",
  "dbltap",
  "pointerdown",
  "pointermove",
  "pointereup",
  "pointercancel",
  "pointerover",
  "pointerenter",
  "pointerout",
  "pointerleave",
  "pointerclick",
  "pointerdblclick",
  "dragstart",
  "dragmove",
  "dragend",
  "transformstart",
  "transform",
  "transformend",
];
export function AddEventDispatchers(node, dispatcher) {
  eventNames.forEach((event_name) => {
    node.on(event_name, dispatcher(event_name));
  });
}
