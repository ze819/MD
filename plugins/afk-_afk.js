

let handler = async (m, { conn, usedprefix }) => {
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/blur', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/6aac08396f9d8e9f2f7e3.jpg'),
    }), 'hornycard.png', '*🌸𝑀𝐴𝐾𝐼𝑀𝐴-𝐵𝛩𝑇🌸*' ,fkontak ,m)
    }
    handler.help = ['blur','difuminar2']
    handler.tags = ['maker']
    handler.command = /^(بروفايلي2|بروفايل2)$/i
    export default handler
