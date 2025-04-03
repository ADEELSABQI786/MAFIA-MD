const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["mafia","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 MAFIA-MD 〕━━┈⊷*

*👋 HELLO ${pushname}*

*╰──────────────┈⊷*
*╭━━━〔 MY ABOUT 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ᴀᴅᴇᴇʟ-ᴍᴅ-ʙᴏᴛ*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ : ᴀᴅᴇᴇʟ*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : ᴍ ᴀᴅᴇᴇʟ*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ᴍᴀꜰɪᴀ xᴅ*
*┃★│* *ᴀɢᴇ : 18 ʏᴇᴀʀ*
*┃★│* *ᴄɪᴛʏ : ᴘᴇʀsɴᴏʟ ʜᴀɪ*
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • SPECIAL THANKS FOR • ]*
*╭━━━〔 THANKS TO 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *▢ᴀʟᴛᴀᴍᴀsʜ(ʟᴏᴠᴇʟʏ ᴅᴇᴠɪʟ)*
*┃★│* *▢ᴀʜᴍᴇᴅ(xɪᴋʀᴀᴛᴏsx)*
*┃★│* *▢ᴜᴍᴀʀ(ᴅᴀʀᴋ ᴅᴇᴠɪʟ⁷¹⁹)*
*┃★│* *▢ᴜsᴍᴀɴ(sɪʟᴇɪɴᴛ ʟᴏᴠᴇʀ)*
*┃★│* *▢ᴊᴀᴡᴀᴅ(ᴅᴊ)*
*┃★│* *▢ᴀʜꜱᴀɴ ꜱɪᴀʟ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀꜰɪᴀ ᴀᴅᴇᴇʟ³³¹
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://i.imgur.com/XM8Vadf.jpeg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363300351654980@newsletter',
      newsletterName: 'MAFIA-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
