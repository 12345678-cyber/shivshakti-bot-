let handler = async m => m.reply(`
☕ *Tokio :* a whatsapp bot\n\n🔗 *URL:* https://github.com/itsajaygaur/tokio-wabot
`.trim()) // repository
handler.help = ['tokio/repo']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
