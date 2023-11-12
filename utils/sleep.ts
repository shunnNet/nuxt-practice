export const sleep: (ms: number) => Promise<number> = (ms = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Date.now() + Math.random())
    }, ms)
  })
}
