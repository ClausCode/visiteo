import { setupServer } from "msw/node"

import { authHandlers } from "./handlers/auth"
import { cardsHandlers } from "./handlers/cards"

export const server = setupServer(...authHandlers, ...cardsHandlers)
