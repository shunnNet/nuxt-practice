const jsonplaceholderClient = $fetch.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  onResponse({ response }) {},
})

type TodoItem = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const getTodo = async () => {
  console.log("getTodo")
  await sleep(2000)
  return jsonplaceholderClient<TodoItem>("/todos/1")
}

export const getMessage = async () => {
  return $fetch<{ time: number; message: string }>("/api/hello")
}

export const getPets = async () => {
  return $fetch<string[]>("http://localhost:3000/api/pets")
}

export const getTime = async () => {
  await sleep(1000)
  return Date.now()
}
