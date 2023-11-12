import { setupWorker } from "msw/browser"
import { genHandlers } from "./handlers"

export const worker = setupWorker(...genHandlers(""))
