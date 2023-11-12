import consola from 'consola'
import { sleep } from '~/utils/sleep'

export default defineEventHandler(async (event) => {
  consola.log('Got Request')
  await sleep(500)
  return {
    time: Date.now(),
    message: 'send from server',
  }
})
