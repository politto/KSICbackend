import { treaty } from '@elysiajs/eden'
import type {App} from "./src"

const client = treaty<App>('localhost:3000')


// Example: Call a valid method or property of `client`
client.index.get();