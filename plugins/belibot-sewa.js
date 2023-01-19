var fetch = require("node-fetch");
var handler = async (m, { 
 conn,
 text,
 usedPrefix,
 command
 }) => {
var gh = 'https://github.com/TaxCoding'
  let buttonMessage= {
'document':{'url':gh},
'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName':'Payment Methode',
'fileLength':'99999999999999',
'pageCount':'999',
'contextInfo':{
'externalAdReply':{
'showAdAttribution': true, 
'mediaUrl':gh,
'mediaType':2,
'previewType':'pdf',
'title':'Follow Github Gua',
'body':'© Rimuru Tempest',
'thumbnail':await(await fetch('https://i.ibb.co/f10QRX9/20230119-143413.jpg')).buffer(),
'sourceUrl':gh}},
'caption':'Hi, Silahkan pilih opsi di bawah ini.\n*Payment*\n\n*x* Dana: 081364440831\n*x* Pulsa: 081364440831',
'footer':'©Rimuru BotMD',
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

handler.help = ['sewa'];
handler.tags = ['main'];
handler.command = ['sewa', 'sewabot', 'belibot'];
module.exports = handler;
