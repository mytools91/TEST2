/*
* Add the author's name
* Author WH173 5P1D3R
*/
// IF YOU'RE CAREFULLY CHANGE NTAR GA WORK, IT WAS WRONG this is
// AND YG LOVELY LOVELY CREDIT REMEMBER BRO LO WASTE
const {
  WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')

const fs = require("fs")
const axios = require('axios')
const request = require('request')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const google = require('google-it')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const cd = 4.32e+7
const lolis = require('lolis.life')
const loli = new lolis()

const { BarBarApi, ZeksApi, TechApi, TobzApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const publik = JSON.parse(fs.readFileSync('./database/json/public.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'))
const hekerbucin = JSON.parse(fs.readFileSync('./database/json/hekerbucin.json'))
const katailham = JSON.parse(fs.readFileSync('./database/json/katailham.json'))
const adminNumber = JSON.parse(fs.readFileSync('./database/json/admin.json'))
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
let {
instagram, yt, groupLink
} = setting

const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { color, bgcolor } = require('./lib/color')
const { bahasa, help, donasi, limitend, limitcount, bottt } = require('./Fxc7/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:WH173 5P1D3R\n'
            + 'ORG:WH173 5P1D3R;\n'
            + 'TEL;type=CELL;type=VOICE;waid=917736807522:+917736807522\n'
            + 'END:VCARD'
       
const vcard1 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:WH173 5P1D3R\n'
            + 'ORG:WH173 5P1D3R;\n'
            + 'TEL;type=CELL;type=VOICE;waid=917994876705:+917994876705\n'
            + 'END:VCARD'

prefix = "."
name = "W5-BOT"
rdaftar = "W5-BOT"
rmenu = "W5-BOT"
botinfo = "W5-BOT"
limitt = 999999999
memberLimit = 1
ban = []
premium = ["917736807522@s.whatsapp.net","917994876705@s.whatsapp.net"]

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Hour ${pad(minutes)} Minute ${pad(seconds)} Second`
}

async function starts() {
	const denz = new WAConnection()
	denz.logger.level = 'warn'
	console.log(banner.string)
	denz.on('qr', () => {
		console.log(color('[','red'), color('!','yellow'), color(']','red'), color(' Scan the qr code above', 'green'))
	})

	fs.existsSync('./Fxc7.json') && denz.loadAuthInfo('./Fxc7.json')
	denz.on('connecting', () => {
		start('2', 'Connecting...')
	})
	denz.on('open', () => {
		success('2', 'Connected')
	})
	await denz.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Fxc7.json', JSON.stringify(denz.base64EncodedAuthInfo(), null, '\t'))

	denz.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await denz.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `ʜᴇʟʟᴏ @${num.split('@')[0]}👋\nᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ɢʀᴏᴜᴘ *${mdata.subject}*\n\n ━━━━━━━━━━━━━━━

🥳 WELCOME 🫂`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*_「 ᴘʀᴏᴍᴏᴛᴇ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\n@${num.split('@')[0]} ᴍᴏɴᴜsᴇ ᴄᴏɴɢʀᴀᴛs ʏᴏᴜ ᴀʀᴇ ɴᴏᴡ ᴀᴅᴍɪɴ`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*_「 ᴅᴇᴍᴏᴛᴇ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\n@${num.split('@')[0]} ᴍᴇʜ ᴍᴏᴏɴᴊɪ ʜᴇʜᴇ...ʏᴏᴜ ᴀʀᴇ ᴅᴇɴᴏᴛᴇᴅ ᴀs ᴍᴇᴍʙᴇʀ`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `ɢᴏᴏᴅ ʙʏᴇ @${num.split('@')[0]}👋\nʀᴇsᴛ ɪɴ ᴘᴇᴀᴄᴇ🕊️`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'yellow'))
		}
	})

		denz.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	denz.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return 
			mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const DnsBot = ["917736807522@s.whatsapp.net"] // ubah aja gapapa
			const farhan = mek.message.conversation
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = denz.contacts[nameReq] != undefined ? denz.contacts[nameReq].vname || denz.contacts[nameReq].notify : undefined

			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Kolkata').format('HH:mm:ss')
			const jam = moment.tz('Asia/Kolkata').format('HH:mm')

            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const Far = args.join(' ')
			const isCmd = body.startsWith(prefix)
			denz.chatRead(from)
			

			mess = {
				wait: '*👻 ᴡᴀɪᴛ ᴛᴏ ᴘʀᴏᴄᴇssᴇᴅ...*',
				success: '*sᴜᴄᴄᴇss...*',
				error: {
					stick: '*ғᴀɪʟᴇᴅ, ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀs ᴡʜᴇɴ ᴄᴏɴᴠᴇʀᴛɪɴɢ ᴛʜᴇ ɪᴍᴀɢᴇ ᴛᴏ ᴛʜᴇ sᴛɪᴄᴋᴇʀ*',
					Iv: '*ᴍᴀᴀꜰ ʟɪɴᴋ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ!*'
				},
				only: {
					group: '*sᴏʀʀʏ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴩ!*',
					benned: '*ᴍᴀᴀꜰ ɴᴏᴍᴇʀ ᴋᴀᴍᴜ ᴋᴇ ʙᴀɴɴᴇᴅ ꜱɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ ᴀɢᴀʀ ᴍᴇᴍʙᴜᴋᴀ ʙᴀɴɴᴇᴅ ᴀɴᴅᴀ*',
					ownerG: '*sᴏʀʀʏ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ʙʏ ᴏᴡɴᴇʀ ɢʀᴏᴜᴩ!*',
					ownerB: '*sᴏʀʀʏ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ʙʏ ᴏᴡɴᴇʀ ʙᴏᴛ!* ',
					premium: '*sᴏʀʀʏ ᴛʜɪs ᴜsᴇʀ sᴘᴇᴄɪғɪᴄ ғᴇᴀᴛᴜʀᴇ ᴩʀᴇᴍɪᴜᴍ!*',
					userB: `ʜᴇʏ ʙʀᴏ *${pushname2}*, ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪsᴛᴇʀᴇᴅ ᴘʟᴇᴀsᴇ ᴛʏᴘᴇ \n*${prefix}verify*`,
					admin: '*sᴏʀʀʏ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ʙʏ ᴀᴅᴍɪɴ ɢʀᴏᴜᴩ!*',
					Badmin: '*sᴏʀʀʏ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ᴡʜᴇɴ ʙᴏᴛ ʙᴇᴄᴏᴍᴇs ᴀᴅᴍɪɴ!*',
					publikG: `sᴏʀʀʏ ᴛʜᴇ ʙᴏᴛ ɪs ɴᴏᴡ ᴘʀɪᴠᴀᴛᴇ ʙʏ ᴏᴡɴᴇʀ\nғᴏʀ ᴍᴏʀᴇ ᴄʟᴇᴀʀʟʏ ᴛʏᴘᴇ \n*${prefix}infobot*`
				}
			}

			const botNumber = denz.user.jid
			const ownerNumber = ["917736807522@s.whatsapp.net","917994876705@s.whataapp.net"] // owner number ubah aja
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await denz.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const totalchat = await denz.chats.all()
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false 
			const isPublic = isGroup ? publik.includes(from) : false 
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender)
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				denz.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				denz.sendMessage(hehe, teks, text)
	        }
				const sendPtt = (teks) => {
		    denz.sendMessage(from, audio, mp3, {quoted:mek})
			}
			const costum = (pesan, tipe, target, target2) => {
			denz.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? denz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : denz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green', 'aqua']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			const checkLimit = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitt - lmt.limit
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        denz.sendMessage(from, limitcount(limitCounts), text, { quoted : mek})
                    }
                                }
                        if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberLimit) {
					    denz.sendMessage(from, `ᴍᴀᴀғ W5-BOT ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴀꜱᴜᴋ ɢʀᴏᴜᴘ ᴋᴀʀɴᴀ ᴍᴇᴍʙᴇʀ ɢʀᴏᴜᴘ *${groupMetadata.subject}* ᴛɪᴅᴀᴋ ᴍᴇᴍᴇɴᴜʜɪ ʟɪᴍɪᴛ ᴍᴇᴍʙᴇʀ\n\nᴍɪɴɪᴍᴀʟ ᴍᴇᴍʙᴇʀ *${memberLimit}*`, text)
					setTimeout( () => {
                            denz.groupLeave(from)
                            }, 100)
		setTimeout( () => {
		denz.updatePresence(from, Presence.composing)
					}, 10)
		setTimeout( () => {
		reply(`ᴍᴀᴀғ W5-BOT ꜱᴇɢᴇʀᴀ ᴋᴇʟᴜᴀʀ ᴅᴀʀɪ ɢʀᴏᴜᴘ *${groupMetadata.subject}*`)
		}, 0)
		}
					
		       } catch (err) { console.error(err)  }
 	 
 
        }
           const isLimit = (sender) =>{
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitt ) {
                  position = true
                    denz.sendMessage(from, limitend(pushname2), text, {quoted: mek})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        if (bad.includes(messagesLink)) {
        denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/AUD-20210326-WA2978.m4a')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (adminNumber.includes(messagesLink)){
        	hasil = `        ────────────────
ʜᴇʏ *${pushname2}* ᴛʀʏ ᴛʏᴘɪɴɢ *${prefix}menu*
        ────────────────`
denz.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "type #menu sis", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
}
		if (bad.includes(messagesLink)) {
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*${pushname2}* ɪs ᴛʜᴇ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ʏᴏᴜ ᴡɪʟʟ ɴᴏᴛ ʙᴇ ᴀᴛ ᴋɪᴄᴋ`)
		denz.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*sᴀʏᴏɴᴀʀᴀ ʙᴇʙᴀɴ ɢʀᴜᴘ*`)
		}, 100)
		setTimeout( () => {
		denz.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		setTimeout( () => {
		reply(`*_「 ʙᴀᴅᴡᴏʀᴅ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\nsᴏʀʀʏ *${pushname2}* ʏᴏᴜ ᴀʀᴇ ᴛᴀʟᴋɪɴɢ ᴅɪʀᴛʏ!, ʏᴏᴜ ᴀʀᴇ ɪᴍᴍᴇᴅɪᴀᴛᴇʟʏ ɪɴ ᴛʜᴇ ᴋɪᴄᴋ ᴏғ ᴛʜᴇ ɢʀᴏᴜᴘ *${groupMetadata.subject}*`)
		}, 0)
		}
		
     	   if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

                switch(command) {
				case '~':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			dmenu = `╓───「 *_W5-BOT_* 」
║𝐻𝐴𝐼 𝐼'𝑀 𝐵𝑂𝑇  🕊️
╙───々
╓───「 *_ʙᴏᴛ ɪɴғᴏ_* 」
║🧧 OWNER: WH173 5P1D3R
║🕯️ ᴘʀᴇғɪx: ${prefix}
╙───々
╓───「 *_ᴜꜱᴇʀ ɪɴғᴏ_* 」
║👁️‍🗨️ ɴᴀᴍᴇ: ${pushname2}
║👁️‍🗨️ ʟɪᴍɪᴛ: ${limitt}
║👁️‍🗨️ ʀᴇɢɪꜱᴛᴇʀᴇᴅ: √
╙───々
╓───「 *_ᴀʙᴏᴜᴛ ʟᴜᴀ ʙᴏᴛ_* 」
║⚡ ${prefix}ʀᴇᴘᴏʀᴛ
║⚡ ${prefix}ɪɴғᴏ
║⚡ ${prefix}ᴏᴡɴᴇʀ
║⚡ ${prefix}ᴄᴏᴏᴡɴᴇʀ
║⚡ ${prefix}ꜱᴘᴇᴇᴅ
║⚡ ${prefix}ʙʟᴏᴄᴋʟɪꜱᴛ
║⚡ ${prefix}ʙᴀɴʟɪꜱᴛ
╙───々
͏͏͏͏͏͏͏╓───「 *_ɢʀᴜᴘ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴏᴘᴇɴᴛɪᴍᴇ
║❏ ${prefix}ᴄʟᴏꜱᴇᴛɪᴍᴇ
║❏ ${prefix}ᴀɴᴛɪʟɪɴᴋ ᴏɴ/ᴏғғ
║❏ ${prefix}ᴀɴᴛɪʙᴀᴅᴡᴏʀᴅ
║❏ ${prefix}ʟɪꜱᴛʙᴀᴅᴡᴏʀᴅ
║❏ ${prefix}ᴡᴇʟᴄᴏᴍᴇ ᴏɴ/ᴏғғ
║❏ ${prefix}ɢʀᴜᴘ ᴏᴘᴇɴ/ᴄʟᴏꜱᴇ
║❏ ${prefix}ᴏᴡɴᴇʀɢʀᴜᴘ
║❏ ${prefix}ꜱᴇᴛᴘᴘ
║❏ ${prefix}ɪɴғᴏɢᴄ
║❏ ${prefix}ᴀᴅᴅ
║❏ ${prefix}ᴋɪᴄᴋ 
║❏ ${prefix}ᴋɪᴄᴋᴛɪᴍᴇ 
║❏ ${prefix}ᴘʀᴏᴍᴏᴛᴇ 
║❏ ${prefix}ᴅᴇᴍᴏᴛᴇ
║❏ ${prefix}ꜱᴇᴛɴᴀᴍᴇ
║❏ ${prefix}ꜱᴇᴛᴅᴇꜱᴄ
║❏ ${prefix}ᴛᴀɢᴍᴇ
║❏ ${prefix}ʜɪᴅᴇᴛᴀɢ
║❏ ${prefix}ᴛᴀɢᴀʟʟ
║❏ ${prefix}ᴍᴇɴᴛɪᴏɴᴀʟʟ
║❏ ${prefix}ʟɪꜱᴛᴀᴅᴍɪɴ
║❏ ${prefix}ꜱɪᴍɪʜ
╙───々
╓───「 *_ᴏᴡɴᴇʀ ᴍᴇɴᴜ_* 」
║♦️ ${prefix}ᴀᴅᴅᴘʀᴇᴍ
║♦️ ${prefix}ʀᴇᴍᴏᴠᴇᴘʀᴇᴍ
║♦️ ${prefix}ᴀᴅᴅʙᴀᴅᴡᴏʀᴅ
║♦️ ${prefix}ᴅᴇʟʙᴀᴅᴡᴏʀᴅ
║♦️ ${prefix}ᴀᴅᴅʙᴜᴄɪɴ
║♦️ ${prefix}ᴀᴅᴅᴀᴜᴅɪᴏ
║♦️ ${prefix}ᴀᴅᴅꜱᴛɪᴄᴋᴇʀ
║♦️ ${prefix}ꜱᴇᴛᴍᴇᴍʟɪᴍɪᴛ
║♦️ ${prefix}ʀᴇꜱᴇᴛʟɪᴍɪᴛ
║♦️ ${prefix}ꜱᴇᴛʟɪᴍɪᴛ
║♦️ ${prefix}ꜱᴇᴛʀᴇᴘʟʏ
║♦️ ${prefix}ꜱᴇᴛᴘʀᴇғɪx
║♦️ ${prefix}ꜱᴇᴛɴᴀᴍᴇʙᴏᴛ
║♦️ ${prefix}ꜱᴇᴛᴘᴘʙᴏᴛ
║♦️ ${prefix}ʙᴄ
║♦️ ${prefix}ʙᴄɢᴄ
║♦️ ${prefix}ʙᴀɴ
║♦️ ${prefix}ᴜɴʙᴀɴ
║♦️ ${prefix}ʙʟᴏᴄᴋ
║♦️ ${prefix}ᴜɴʙʟᴏᴄᴋ
║♦️ ${prefix}ᴄʟᴇᴀʀᴀʟʟ
║♦️ ${prefix}ᴅᴇʟᴇᴛᴇ
║♦️ ${prefix}ᴄʟᴏɴᴇ
║♦️ ${prefix}ʟᴇᴀᴠᴇ
╙───々`
const loli = fs.readFileSync('./mp3/endiii.mp3')                
denz.sendMessage(from, dmenu, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "mwonu   𝙇𝙐𝘼 𝙎𝙀𝙍❤️", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')}}}})
denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) 	    
            break
            


            
					

					
					case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return denz.sendMessage(from, `Use of features antidelete :\n\n*${prefix}antidelete [active/mati]* (For groups)\n*${prefix}antidelete [ctactive/ctmati]* (for all contacts)\n*${prefix}antidelete banct 9177367xxxxxxx* (banlist contact)`, MessageType.text)
				if (argz[1] == 'active') {
					if (isGroup) {
						if (isRevoke) return denz.sendMessage(from, `Antidelete has been activated in this group before!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						denz.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						denz.sendMessage(from, `For use contact *${prefix}antidelete ctactive*`, MessageType.text)
					}
				} else if (argz[1] == 'ctactive') {
					if (!isGroup) {
						if (isCtRevoke) return denz.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						denz.sendMessage(from, `Antidelete activated in all contacts!`, MessageType.text)
					} else if (isGroup) {
						denz.sendMessage(from, `For groups of use *${prefix}antidelete active*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return denz.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return denz.sendMessage(from, `Enter the number starting with 91! example 9185928xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./lib/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					denz.sendMessage(from, `Contact ${argz[2]} has been added to the antidelete banlist permanently!`, MessageType.text)
				} else if (argz[1] == 'close') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						denz.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						denz.sendMessage(from, `For use contact *${prefix}antidelete ctclose*`, MessageType.text)
					}
				} else if (argz[1] == 'ctclose') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						denz.sendMessage(from, `Antidelete turned off in all contacts!`, MessageType.text)
					} else if (isGroup) {
						denz.sendMessage(from, `For groups of use *${prefix}antidelete close*`, MessageType.text)
					}
				}
				break
				



					
				
				
					
				
				case 'daftar':
				case 'verify':
					denz.updatePresence(from, Presence.composing)
					if (isUser) return reply('*ʏᴏᴜ ᴀʀᴇ ʀᴇɢɪsᴛᴇʀᴇᴅ!*')
					if (isBanned) return reply(mess.only.benned)
					user.push(sender)
					fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
					try {
					ppimg = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `╭─「 *_ʀᴇɢɪsᴛʀᴀᴛɪᴏɴ_* 」\`\`\`\n│ sᴜᴄᴄᴇssғᴜʟ ʀᴇɢɪsᴛʀᴀᴛɪᴏɴ ꜱɴ: \n│TM08GK8PPHBSJDH10J\`\`\`\n│\n│\`\`\`ᴏɴ ${date} ${time}\`\`\`\n│\`\`\`「 ɴᴀᴍᴇ 」: ${pushname2}\`\`\`\n│\`\`\`「 ɴᴜᴍʙᴇʀ 」: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`ᴛᴏ ᴜsᴇ ᴛʜᴇ ʙᴏᴛ\`\`\`\n│\`\`\`ᴘʟᴇᴀsᴇ\`\`\`\n│\`\`\`sᴇɴᴅ ${prefix}menu\`\`\`\n│\`\`\`\n│ᴛᴏᴛᴀʟ ᴜsᴇʀ: ${user.length} ᴘᴇʀsᴏɴ\`\`\`\n╰────────────────`
					brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    daftarimg = await getBuffer(ppimg)
					denz.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya})
					denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype:'./mp3/verify.m4a',ptt:true})
					break 
                    case 'profile':
    				denz.updatePresence(from, Presence.composing)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
    				try {
					profil = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *_ᴘʀᴏғɪʟᴇ ɪɴғᴏ* 」\n│• *ɴᴀᴍᴇ:* ${pushname2}\n│• *ᴜꜱᴇʀ ʀᴇɢɪsᴛᴇʀᴇᴅ:* √\n│• *ʟɪɴᴋ:* wa.me/${sender.split("@")[0]}\n╰────────────────`
					buff = await getBuffer(profil)
					denz.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
				
				case 'info':
					me = denz.user
					user.push(sender)
					uptime = process.uptime()
					teks = `➽ *𝐧𝐚𝐦𝐞 ʙᴏᴛ* : ${me.name}\n➽ *ᴏᴡɴᴇʀ ʙᴏᴛ* : W5-BOT\n➽ *ᴘʀᴇғɪx* : | ${prefix} |\n➽ *ᴛᴏᴛᴀʟ ʙʟᴏᴄᴋ* : ${blocked.length}\n➽ *ᴀᴄᴛɪᴠᴇ sɪɴᴄᴇ* : ${kyun(uptime)}\n➽ *ᴛᴏᴛᴀʟ ᴜsᴇʀ* : ${user.length} ᴜꜱᴇʀ\n➽ *ɪɴꜱᴛᴀɢʀᴀᴍ* :  lua.sis\n➽ *telegram* : lua bro\n➽ *ꜱᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋꜱ ᴛᴏ* :\n➽ ɪʀғᴀɴ\n➽ 𝟒 𝟒 𝟒`
					const daca = fs.readFileSync('dnsnew.jpg');
				    denz.sendMessage(from, daca, image, {quoted: mek, caption: teks})
				    brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break 
				case 'totaluser':
					denz.updatePresence(from, Presence.composing) 
									
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `╭────「 *TOTAL USER ${name}* 」\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total User : ${user.length}\n╰──────⎿ *${name}* ⏋────`
					denz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'blocklist':
					teks = 'List Block :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					denz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'banlist':
				ben = '```List Banned``` :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total : ${ban.length}`
					denz.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
				case 'ban':
					denz.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
					


				case 'addprem':
					denz.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					addpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid
					premium = addpremium
					reply(`*Added Success ${premium} to database User Premium*`)
					break
				case 'removeprem':
					if (!isOwner) return reply(mess.only.ownerB)
					rprem = body.slice(13)
					premium.splice(`${rprem}@s.whatsapp.net`, 1)
					reply(`It works Remove wa.me/${rprem} From User Premium`)
					break
					case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					reply(`Number wa.me/${bnnd} telah di unban!`)
					break
				case 'block':
				 denz.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					denz.blockUser (`${body.slice(7)}@c.us`, "add")
					denz.sendMessage(from, `Received orders, block ${body.slice(7)}@c.us`, text)
					break
				case 'unblock':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    denz.blockUser (`${body.slice(9)}@c.us`, "remove")
					denz.sendMessage(from, `Received orders, unblock ${body.slice(9)}@c.us`, text)
				    break 
				case 'readmore':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Where the text, uncle?')
					var kls = body.slice(9)
					var has = kls.split("/")[0];
					var kas = kls.split("/")[1];
					if (args.length < 1) return reply(mess.blank)
					denz.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
					break
				case 'resetlimit':
				if (!isOwner) return reply(mess.only.ownerB)
				  var obj = []
				   fs.writeFileSync('./database/json/limit.json', JSON.stringify(obj))
				  await reply(`LIMIT BERHASIL DI RESET`)
				break
					
				
				case 'img2url':
			if (!isUser) return reply(mess.only.userB)
							
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var media = await  denz.downloadAndSaveMediaMessage(encmedia)
            var imgbb = require('imgbb-uploader')
            imgbb('727e7e43f6cda1dfb85d888522fd4ce1', media)
                .then(data => {
                    var caps = `「 *IMAGE TO URL* 」\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     denz.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                })
                .catch(err => {
                    throw err
                })
            await limitAdd(sender) 	
            break  

                 
				case 'owner':
                 denz.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 denz.sendMessage(from, '*_ꜱᴀᴠᴇ ʏᴇs ɴᴛᴀʀ ꜱᴀᴠᴇ ʙᴀᴄᴋ :)_*',text, { quoted: mek} )
                 break
                 case 'coowner':
                 denz.sendMessage(from, {displayname: "jeff", vcard: vcard1}, MessageType.contact, { quoted: mek})
                 denz.sendMessage(from, '*_ᴛʜᴀᴛ’s ᴍʏ ʙᴏʏғʀɪᴇɴᴅ ᴏʜʜ ᴍᴇᴀɴ ᴏᴡɴᴇʀ ғʀɪᴇɴᴅ_*',text, { quoted: mek} )
                 break
               

				case 'infogc':
				case 'groupinfo':
				case 'infogrup':
				case 'grupinfo':
				if (isBanned) return reply(mess.only.benned)  
				 				
				if (!isUser) return reply(mess.only.userB)
                denz.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                try {
					ppUrl = await denz.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                reply(mess.wait) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        denz.sendMessage(from, buffer, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
                break
				
				
				
				case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				case 'gruplink':
				case 'grouplink':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await denz.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    denz.sendMessage(from, yeh, text, {quoted: mek})
			        break
				case 'hidetag':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var value = body.slice(9)
					var group = await denz.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					denz.sendMessage(from, options, text)
					break
					
				
				  case 'ownergrup':
				  case 'ownergroup':
               denz.updatePresence(from, Presence.composing) 
              options = {
          text: `Owner Group This is : wa.me/${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           denz.sendMessage(from, options, text, { quoted: mek } )
				break
				case 'leave': 
				    if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
			    	anu = await denz.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
	                break
				case 'setname':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                denz.groupUpdateSubject(from, `${body.slice(9)}`)
                denz.sendMessage(from, `\`\`\`âœ“Successfully Changing Group Name To\`\`\` *${body.slice(9)}*`, text, {quoted: mek})
                break
                case 'setdesc':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                denz.groupUpdateDescription(from, `${body.slice(9)}`)
                denz.sendMessage(from, `\`\`\`âœ“Successfully Changing Group Descriptions\`\`\` *${groupMetadata.subject}* Becomes: *${body.slice(9)}*`, text, {quoted: mek})
                break
				
				
				case 'setpp':
	            if (isBanned) return reply(mess.only.benned)    
	            if (!isUser) return reply(mess.only.userB)
	      				
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await denz.downloadAndSaveMediaMessage(mek)
                    await denz.updateProfilePicture (from, media)
                    reply(mess.wait)
                    reply(`\`\`\`âœ“Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
                    break
                
                case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                denz.sendMessage(from, `┏━━━━━━━━━━━━━━━
┠⊷️Oi, ${pushname2}
┠⊷️sᴘᴇᴇᴅ: ${latensi.toFixed(4)} _ms_
┠⊷️ᴅᴇᴠɪᴄᴇ: ɪᴘʜᴏɴᴇ 7
┠⊷️ᴛᴏᴛᴀʟ ᴜꜱᴇʀ: *${user.length}* ᴜꜱᴇʀꜱ
┗━━━━━━━━━━━━━━━`, text, { quoted: mek})
                    break
                case 'tagme':
                if (isBanned) return reply(mess.only.benned)
          				
                if (!isUser) return reply(mess.only.userB)
					var nom = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} tag!`,
					contextInfo: { mentionedJid: [nom] }
					}
					denz.sendMessage(from, tag, text, {quoted: mek})
					break
          
			    case 'infonomor':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        infonomor = `*Number* \n${anu.nomor} *Country* \n${anu.international}`
			        reply(infonomor)
			        await limitAdd(sender) 
			        break 
			   	
			case 'closetime': 
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              denz.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪᴛᴜᴛᴜᴘ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ʜᴀɴʏᴀ ᴀᴅᴍɪɴ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
					contextInfo: { mentionedJid: [nomor] }
					}
					denz.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
				case 'opentime': 
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              denz.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ᴍᴇᴍʙᴇʀ* ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
					contextInfo: { mentionedJid: [nomor] }
					}
					denz.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
				
			    case 'tagall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]} wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔═══✪ Tag By *${pushname2}* ✪══`+ teks +'╚═══〘 *ʟᴜᴀ sᴇʀ ᴏғᴄ* 〙═══', members_id, true)
					break
			    case 'mentionall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔══〘  *${body.slice(12)}*  〙✪══`+teks+'╚═〘 *ʟᴜᴀ sᴇʀ ᴏғᴄ* 〙', members_id, true)
					break
			    
					case 'grup':
					case 'gc':
					case 'group':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
									
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'open') {
					    reply(`\`\`\`✓Success in Opening Group\`\`\` *${groupMetadata.subject}*`)
						denz.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`\`\`\`✓Success in Closeing the Group\`\`\` *${groupMetadata.subject}*`)
						denz.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				
				case 'clearall':
					if (!isOwner) return reply('Who are you?')
					anu = await denz.chats.all()
					denz.setMaxListeners(25)
					for (let _ of anu) {
						denz.deleteChat(_.jid)
					}
					reply(`\`\`\`Sukses delete all chat DNS BOT\`\`\``)
					break
                                case 'bcgc':
					denz.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bcgc = await denz.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							denz.sendMessage(_.jid, bcgc, image, {caption: `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ ɢʀᴏᴜᴘ_* 」\n*ɢʀᴏᴜᴘ* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ ɢʀᴏᴜᴘ_* 」\n*ɢʀᴏᴜᴘ* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Success broadcast group')
					}
					break
				case 'bc':
					if (!isOwner) return reply('Who are you?')
					if (args.length < 1) return reply('.......')
					anu = await denz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, bc, image, {caption: `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`})
						}
						denz.sendMessage(_.jid, bc, image, {caption: `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`})
						reply('Success broadcast')
						} else {
						for (let _ of anu) {
							sendMess(_.jid, `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`)
						}
						reply('Success broadcast')
					}
					break
				case 'add':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Who do you want to add???')
					if (args[0].startsWith('08')) return reply('Please use the country code')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						denz.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Failed to add target, maybe because it private')
					}
					break
			    case 'kick':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orders received, issued :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						denz.groupRemove(from, mentioned)
					} else {
						mentions(`Orders received, issued : @${mentioned[0].split('@')[0]}`, mentioned, true)
						denz.groupRemove(from, mentioned)
					}
					break 
				case 'kicktime':
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
									
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('The target tag you want to kick!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					denz.sendMessage(from, 'no Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('success min:D')
					}, 7000)
					setTimeout( () => {
					denz.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					denz.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					denz.sendMessage(from, 'Its cool to get food:D', text)
					}, 2500)
					setTimeout( () => {
					reply('Orders Received min:D')
					}, 0)
					break
				case 'promote':
				case 'pm':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('The target that you want to be an admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orders accepted, you become admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						denz.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Order received, @${mentioned[0].split('@')[0]} You Become an Admin in the Group *${groupMetadata.subject}*`, mentioned, true)
						denz.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
					case 'del':
					case 'd':
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					denz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
			    case 'demote':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('The Target that you want to not be an admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orders accepted, you are not an admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						denz.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Order received, Decrease : @${mentioned[0].split('@')[0]} Become a Member`, mentioned, true)
						denz.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'simih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isSimi) return reply('Sim mode is active')
						samih.push(from)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`\`\`\`Successfully activate simi mode in the group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						samih.splice(from, 1)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`\`\`\`âœ“Successfully deactivating simi mode in the group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On to activate, Off to deactivate')
					}
					break
			    case 'nsfw':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('NSFW mode is active')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓“Successfully activate nsfw mode in group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓“Successfully deactivated nsfw mode in group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On to activate, Off to deactivate')
					}
					break
				case 'modeanime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAnime) return reply('Anime mode is already active')
						anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓“Successfully activate anime mode in the group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓“Successfully deactivated anime mode in the group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On to activate, Off to deactivate')
					}
					break
				case 'welcome':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('Already active, bro')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓“Successfully activated the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓“Successfully deactivating the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On to activate, Off to deactivate')
					}
					break 
				case 'antilink':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('type !antilink on to activate')
					if ((args[0]) === 'on') {
						if (isAntiLink) return reply('anti link already on')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓“Successfully activated the anti link feature in the group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiLink) return reply('anti link already off')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓“Successfully deactivating the anti link feature in the group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on to activate, off to deactivate')
					}
					break
				case 'antibadword':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('on to activate, off to deactivate')
                if (args[0] === 'on') {
                if (isBadWord) return reply('anti badword already on')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                  	   reply(`\`\`\`✓“Successfully activate the anti badword feature in the group\`\`\` *${groupMetadata.subject}*`)
              	  } else if (args[0] === 'off') {
                    	if (!isBadWord) return reply('anti badword already off')
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                 	    reply(`\`\`\`✓“Successfully deactivating the anti badword feature in the group\`\`\` *${groupMetadata.subject}*`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
                    case 'do':
                    if (!isOwner) return reply(mess.only.ownerB)
					denz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                    case 'addbadword':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Success Add Bad Word!')
                    break
                case 'delbadword':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Success Remove BAD WORD!')
                    break 
                case 'listbadword':
                    let lbw = `This is list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
				
				

				case 'clone':
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag gan')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await denz.getProfilePicture(id)
						buffer = await getBuffer(pp)
						denz.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
//setting bot
				case 'setprefix':
				case 'setpref':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break 
					case 'setlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					limitt = args[0]
					reply(`Limit berhasil di ubah menjadi : ${limitt}`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					memberLimit = args[0]
					reply(`Limit Member berhasil di ubah menjadi : ${memberLimit}`)
					break 
				case 'setnamebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`Nama Bot berhasil di ubah menjadi : ${name}`)
					break 
				
////////////
				
			

         
			
		
				case 'setppbot':
					if (!isOwner) return reply(mess.only.owner)
				    denz.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(enmedia)
					await denz.updateProfilePicture(botNumber, media)
					reply('Thanks for the new profile☺️™‚')
					break

// Fitur Defacer

				case 'dorking':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				dork = `${body.slice(9)}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					denz.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				
// akhir encrypt & decrypt Fitur

			case 'google':
                const googleQuery = body.slice(8)
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*sᴇᴀʀᴄʜ ʀᴇsᴜʟᴛ : ${googleQuery}* ɴᴏᴛ ғᴏᴜɴᴅ`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*sᴇᴀʀᴄʜ ʀᴇsᴜʟᴛ : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*ᴛɪᴛʟᴇ* : ${results[i].title}\n\n*ᴅᴇsᴄʀɪᴘᴛɪᴏɴ* : ${results[i].snippet}\n\n*ʟɪɴᴋ* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    denz.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break 
                
                
					
					
				default:
				if (budy.includes("://chat.whatsapp.com/")){
					
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*${pushname2}* ɪs ᴛʜᴇ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ʏᴏᴜ ᴡɪʟʟ ɴᴏᴛ ʙᴇ ᴋɪᴄᴋᴇᴅ`)
		denz.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*ʀᴇsᴛ ɪɴ ᴘᴇᴀᴄᴇ🚶*`)
		}, 100)
		setTimeout( () => {
		denz.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		setTimeout( () => {
		reply(`*_「 ʟɪɴᴋ ɢʀᴜᴘ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\nsᴏʀʀʏ ʏᴏᴜʀ, *${pushname2}* is putting group link!,\nʏᴏᴜ ᴀʀᴇ ɪᴍᴍᴇᴅɪᴀᴛᴇʟʏ ᴋɪᴄᴋᴇᴅ ғʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ *${groupMetadata.subject}*`)
		}, 0)
		}
		
        
                  if (budy.includes(`Abdu`)) {
                  reply(`ʏᴏᴜ ᴡᴇʟᴄᴏᴍᴇ, sɪs *${pushname2}*, HI >-<`)
                  }
                  if (body.startsWith(`${prefix}${command}`)) {
comd = `      ────────────────\nʜᴇʏ *${pushname2}* !!!\nᴄᴏᴍᴍᴀɴᴅ *${prefix}${command}*\nɴᴏᴛ ɪɴ ᴏᴜʀ ᴍᴇɴᴜ*${prefix}menu*\n      ────────────────`
denz.sendMessage(from, comd, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "ɴᴏᴛ ɪɴ #menu", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
				  }
                  if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[db]','aqua'), 'Unregistered Command', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'white'))
		}
	})
}
starts()
    
