let handler = async (m, { conn, text }) => {
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    if (!text) throw '*نسيت النص يرجي كتابه نص او اسمك'
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/2d2899be76e41d860a68b.jpg'),
    comment: text,
    username: conn.getName(m.sender)
    }), 'error.png', '*ا𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇*\n*مـــطـــوري*\n*967733707084*',fkontak ,m)
    }
    handler.help = ['ytcomment <comment>']
    handler.tags = ['maker'] 
    handler.command = /^(تويت|ب8|بروفايل8|بروفايلي8)$/i
    export default handler
