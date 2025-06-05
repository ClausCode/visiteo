import { setupWorker } from "msw/browser"

import { authHandlers } from "./handlers/auth"
import { cardsHandlers } from "./handlers/cards"

export const worker = setupWorker(...authHandlers, ...cardsHandlers)
