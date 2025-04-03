const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *MAFIA ADEEL*

> *MAFIA MD REPO:*
*|* *https://github.com/ADEELSABQI786/MAFIA-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029VavP4nX0G0XggHzhVg0R*
*╰──────────────●●►*

> *update command Done*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363300351654980@newsletter',
      newsletterName: "ᴍᴀꜰɪᴀ-ᴀᴅᴇᴇʟ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'MAFIA MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/ADEELSABQI786/MAFIA-MD" ,
thumbnailUrl: "https://ibb.co/NdSPRLYD" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
