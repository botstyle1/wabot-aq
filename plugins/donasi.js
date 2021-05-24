let handler = async m => m.reply(`
╭─「 Donasi • Pulsa & saweri 」
│ • Telkomsel : [082114499086]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [082114499086]
│ • https://saweria.co/botstyle
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
