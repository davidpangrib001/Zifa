let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(asupan), 'asupan.mp4', '', m)
}
handler.help = ['memeindo']
handler.tags = ['tools']
handler.command = /^(memeindo|memefresh)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
"https://telegra.ph/file/2ac6b2210e2a6140e8f4d.jpg",
"https://telegra.ph/file/0bc05f210639fd1db5558.jpg",
"https://telegra.ph/file/b043bb83549fe05f2d4d1.jpg",
"https://telegra.ph/file/4d00bd04d89816d6c883a.jpg",
"https://telegra.ph/file/ea07d573c14c0e7deb8d7.jpg",
"https://telegra.ph/file/aad54c92ba7b5aa820ccc.jpg",
"https://telegra.ph/file/c27091ac2c5b055317463.jpg",
"https://telegra.ph/file/d79279ab9dbbcc84d8ec1.jpg",
"https://telegra.ph/file/4350835207e626bce12c7.jpg",
"https://telegra.ph/file/4429ca5b03c236b190647.jpg",
"https://telegra.ph/file/bc240ee25cfdc3104e680.jpg",
"https://telegra.ph/file/621bf49e74b124150f9bd.jpg",
"https://telegra.ph/file/bec0ad3c33531ad1165f7.jpg",
"https://telegra.ph/file/14dac72af9ab0c1499781.jpg",
"https://telegra.ph/file/eadfb93fc680186524620.jpg",
"https://telegra.ph/file/f5c421d03862cd9ace352.jpg",
"https://telegra.ph/file/9732fcebf0c0ac9630d7f.jpg",
"https://telegra.ph/file/40d213f9055a20ccbaca5.jpg",
"https://telegra.ph/file/5f6c5646aa415babcd909.jpg",
"https://telegra.ph/file/fe49f3ef56c5521817b68.jpg",
"https://telegra.ph/file/2719dda65f39a8a646865.jpg",
"https://telegra.ph/file/240b0245c98c52cb0fbd1.jpg"
]
