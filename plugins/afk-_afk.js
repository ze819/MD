        let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
	let tee = `*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*\n\n*مثــال:* *${usedPrefix + command}* *LUFFY*\n*بعض منها تدعم اللغه العربيه*`
	let too = `*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*\n\nمثال:*\n* *${usedPrefix + command}* *LUFFY* *+* *BOT*`
       
	
	
	let type = command.toLowerCase();
	
	switch (type) {
	  case 'ل1':
		if (!text) throw tee;
		let chut = `https://api.caliph.biz.id/api/kaneki?nama=${encodeURIComponent(text)}&apikey=caliphkey`;
		await conn.reply(m.chat, '*انتضر جار التنفيذ..*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐿𝑈𝐹𝐹𝑌-𝐵𝛩𝑇', body: `【𝟐𝟎𝟎𝟓/𝟐/𝟏𝟎】١⁵`, mediaType: 2, sourceUrl: md, thumbnail: imagen1}}}, { quoted: m })
		conn.sendFile(m.chat, chut, 'logo.png', `*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*`, m);
		
		break;
		
	  case 'ل2': 
		if (!text) throw too;
		if (!text.includes('+')) throw too;
		let [a, b] = text.split('+');
		let loda = `https://api.caliph.biz.id/api/girlneko?nama=${encodeURIComponent(a.trim())}&nama2=${encodeURIComponent(b.trim())}&apikey=caliphkey`;
		conn.sendFile(m.chat, loda, 'logo.png', `*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*`, m);
		
		
		break;
		
	  case 'ل3':
		if (!text) throw tee;
		let cp = `https://api.caliph.biz.id/api/rem?nama=${encodeURIComponent(text.trim())}&apikey=caliphkey`;
		conn.sendFile(m.chat, cp, 'logo.png', `*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*`, m);
		
		break;
		
	  case 'لxxx': 
		if (!text) throw tee;
		let gandu = `https://api.caliph.biz.id/api/textpro/matrix?text=${encodeURIComponent(text)}&apikey=caliphkey`;
		conn.sendFile(m.chat, gandu, 'logo.png', `*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*`, m);
		
		break;
		case 'xxل':
    if (!text) throw tee
    const apiUrll = `https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
    conn.sendFile(m.chat, apiUrll, 'logo.png', '*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*', m);
    
    break;

	case 'لxxx': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [c, d] = text.split`+`   
	const apiUrl = `https://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=${lolkeysapi}&text1=${encodeURIComponent(c)}&text2=${encodeURIComponent(d)}`
	conn.sendFile(m.chat, apiUrl, 'logo.png', `*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*`, m)
	
	break 
	case 'ل4': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [e, f] = text.split('+');
	let oda = `https://api.lolhuman.xyz/api/photooxy2/battlefield4?apikey=${lolkeysapi}&text1=${encodeURIComponent(e.trim())}&text2=${encodeURIComponent(f.trim())}`;
	conn.sendFile(m.chat, oda, 'logo.png', `*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*`, m);
	
	
	break 
	case 'ل5': 
	if (!text) throw tee;
	let rand = `https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rand, 'logo.png', `*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*`, m);
	
	break;
	case 'ل6': 
	if (!text) throw tee;
	let randi = `https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randi, 'logo.png', `*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*`, m);
	
	break;
	case 'ل7': 
	if (!text) throw tee;
	let randu = `https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randu, 'logo.png', `*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*`, m);
	
	break;
	case 'ل8': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [g, h] = text.split('+');
	let od = `https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=${lolkeysapi}&text1=${encodeURIComponent(g.trim())}&text2=${encodeURIComponent(h.trim())}`;
	conn.sendFile(m.chat, od, 'logo.png', `*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*`, m);
	
	
	break 
	case 'ل9': 
	if (!text) throw tee;
	let rr = `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rr, 'logo.png', `*🍁𝐌𝐎𝐍𝐊𝐄𝐘 𝐃 𝐋𝐔𝐅𝐅𝐘١⁵🍁*`, m);
	break;

	  default:
	} 
  };
  
  handler.help = ['ل1', 'ل2', 'ل3', 'للل76', 'لل76ل5', '68ةزل6', 'ل4', 'ل5', 'ل6', 'ل7', 'ل8', 'ل9'];
  handler.tags = ['maker'];
  handler.command = /^(ل1|ل2|ل3|ل0850|ل4|ل5|ل6|ل7|ل8|ل9|0ل2)$/i;
  handler.diamond = false;
  
  export default handler;
