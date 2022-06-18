let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Sending Session')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')    
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    m.reply('Reading File...')
    let sesi = await fs.readFileSync('./database.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
}
handler.help = ['getdb']
handler.tags = ['host']
handler.command = /^(getdb)$/i

handler.rowner = true

module.exports = handler
