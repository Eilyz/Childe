import { Client, Collection } from 'discord.js'
import { config } from 'dotenv'
import loader from './util/loader.js'

config()

export const Childe = new Client({ intents: 32767 })
Childe.commands = new Collection()

await loader.loadCommands()
await loader.loadEvents()

await Childe.login()
