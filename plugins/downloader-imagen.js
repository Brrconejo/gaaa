import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `π *ππ΄πππ»ππ°π³πΎ π³π΄:* ${text}
π *π±ππ²π°π³πΎπ:* Google
`, author, link, link, 'π πππ»', null, null, [
['π ππΈπΆππΈπ΄π½ππ΄ π', `/imagen ${text}`]
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
export default handler
