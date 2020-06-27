export const delay = (timeMs: number) =>
  new Promise((res) => setTimeout(res, timeMs));
