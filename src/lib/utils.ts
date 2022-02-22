export const layerKey = Symbol();
export const parentKey = Symbol();
export const stageKey = Symbol();

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

export function excludeKeys(object: any, disallow_list: string[]) {
  let answer = {};
  const filtered = Object.keys(object)
    .filter((key) => !disallow_list.includes(key))
    .map((key) => {
      answer[key] = object[key];
    });
  return answer;
}
