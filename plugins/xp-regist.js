const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  let uname = conn.getName(m.sender)
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar ${namalu}.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 90) throw 'Umur terlalu tua'
  if (age < 5) throw 'Bayi bisa ngetik sesuai format bjir ._.'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  user.serial = sn
  
  m.reply(`
┏──『 *Register* 』──⬣
│⬡ Nomormu Sudah Di Daftar Ke Database Bot
┗──────────⬣
✓ *INFO*
*╭─────────────────╮*
*├❏* Nama : *${name}*
*├❏* Umur : *${age}* Tahun
*├❏* SN: *${sn}*
*╰─────────────────╯*

┏━━〔 Rules 〕━ꕥ
┃✾ *Jangan Spam Bot*
┃✾ *Jangan Telepon / VC Bot*
┃✾ *Minta B0K3P? Banned + Block!*
┃✾ *Minta Script Bot? Chat Owner*
┃✾ *Virtex? Janganlah.. Bukan Bot War..*
┗━━━━━━━━ꕥ
Jika Kamu Melanggar Rules, Owner Akan Kasih Kejutan Buat Kamu 👻
`.trim())
u = 'Hai, ${name}, Silahkan Pilih Tombol Di Bawah Ini\n_Patuhi Rules Demi Kenyamanan Kita Semua_'
await conn.send3But(m.chat, u, wm, 'Ping\n_Mengetes Kecepatan Respon Bot_', '#ping', 'Menu\n_Menampilkan Menu Bot_', '#menu', 'Owner\n_Pemilik Bot_', '#owner',  m)
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
