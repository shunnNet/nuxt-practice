export const useCounter = () => {
  const counter = ref(0)

  const add = (val = 1) => {
    counter.value++
    return counter.value
  }
  const sub = (val = 1) => {
    counter.value--
    return counter.value
  }

  return {
    counter,
    add,
    sub,
  }
}
