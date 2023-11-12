import { setupServer } from "msw/node"
import { genHandlers } from "./handlers"

export const server = setupServer(...genHandlers("http://localhost"))
