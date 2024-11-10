import { init, isCuid } from "@paralleldrive/cuid2";
// const length = 10; // 50% odds of collision after ~51,386,368 ids
// console.log(cuid()); // nw8zzfaa4v

interface ICuid {
  random?: (() => number) | undefined;
  counter?: (() => number) | undefined;
  length?: number | undefined;
  fingerprint?: string | undefined;
}

export function Cuid() {
  function createId(props: ICuid) {
    return init({ ...props })()
  }

  return { createId, isCuid };
}
