let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Saat Ini, Owner Masih Males Ciptain Vitur Jadi Bot`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, 'Owner', '.owner', 'Back To Menu', '.menu', m) 
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

module.exports = handler
