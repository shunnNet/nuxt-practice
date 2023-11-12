export const useData = async () => {
  return useAsyncData('data', () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: Date.now() + Math.random() })
      }, 1000)
    })
  })
}
