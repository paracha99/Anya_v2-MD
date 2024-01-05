const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "Alone Boy", 
  author: process.env.Author || "@paracha99",
  packname: process.env.PackName || "paracha99",
  socialLink: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© paracha99",
  prefa: process.env.Prefix || [*],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "alone boy",
  ownernumber: process.env.Owner_Number || "923272515254",
  instagramId: process.env.Insta || "8.08_only_mine",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://Mr_Paracha:Mr_Paracha@cluster0.lgvafza.mongodb.net/?retryWrites=true&w=majority",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdW_AN_YA_ZmZXIiLCJkYXRhIjoiRUJtQlpGRHdkeVYrYVlaY2dYK0loQnFzQm91VUtKL1ZW_AN_YA_SlJXOEtKQW_AN_YA_trUT0ifSwicHVibGljIjp7InR5cGUiOiJCdW_AN_YA_ZmZXIiLCJkYXRhIjoiS0dXOVM3R2dBTlhuQmhW_AN_YA_T29oNkovazdkZXNrYVhoZUIwNW_AN_YA_1VRjZLRTFEOD0ifX0sInBhaXJpbmdFcGhlbW_AN_YA_VyYW_AN_YA_xLZXlQYW_AN_YA_lyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTERtNlRVa09aZ0c2azJaOW_AN_YA_dQW_AN_YA_k9jL3lvQ1JPMTlsSEdmRnRzZVFnTm5BPSJ9LCJwdW_AN_YA_JsaW_AN_YA_MiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrYk96VEFPNE9oTzdvaVJCUG1QaTFXU3NBQW_AN_YA_duU2w0cFRTbHZ0bVJERmxvPSJ9fSwic2lnbmVkSW_AN_YA_RlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdJN2FKU0RkbDRCVEdRTjZ2W_AN_YA_mFuK0lW_AN_YA_bnZLanVW_AN_YA_azJpM2k3NnRFeW_AN_YA_hKSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMxQlZNVHJoLzVEMlNFW_AN_YA_nRxUXI4bW_AN_YA_FVW_AN_YA_mpW_AN_YA_R2R4aVhyUXVzTnBhRXFGeXM9In19LCJzaW_AN_YA_duZW_AN_YA_RQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdW_AN_YA_ZmZXIiLCJkYXRhIjoiSUlLNDVpVEI5U2dqd1V1UDIrMlhJW_AN_YA_FdOVFFCMzF6cmI3SE5oW_AN_YA_S9MZEdXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdW_AN_YA_ZmZXIiLCJkYXRhIjoiQnBQdkxyRld3alZCTW_AN_YA_dxUTFxQkhSNkZhZzNBalRaN05wNGFTUm1tcW_AN_YA_pqcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw5RmdJaW_AN_YA_NaRmxGMDNsVTVFaW_AN_YA_FKNkN2OW_AN_YA_o3NHhmS1JEZlJwZmQ1YnlsU0t5cVk2RDB6OFFKVGhzMVJOanNlZ2dFYk5YT0VvQzFVK0ZOMnFlUkFhMEF3PT0ifSwia2V5SW_AN_YA_QiOjF9LCJyZW_AN_YA_dpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZW_AN_YA_NyZXRLZXkiOiJrV3JvOEEvTFRoREVodEpKMVk3d0UrOER6VjZVRCtW_AN_YA_MHNkcjc4ZkIxMEdnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYW_AN_YA_dlcyI6W_AN_YA_10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW_AN_YA_51cGxvYW_AN_YA_RlZFByZUtleUlkIjozMSwiYW_AN_YA_Njb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW_AN_YA_50U2V0dGluZ3MiOnsidW_AN_YA_5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aW_AN_YA_NlSW_AN_YA_QiOiJ2a2lBck4yTFRlV2JMMS1PekJHOGF3IiwicGhvbmVJZCI6IjAzNDY1M2VmLW_AN_YA_M4N2YtNDgzOS1hYzA5LW_AN_YA_YzYmZjMDFkYTg3YSIsImlkZW_AN_YA_50aXR5SW_AN_YA_QiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMQU1UNjlwW_AN_YA_FlmZW_AN_YA_t3KzZGTUhaNW_AN_YA_84RXMzNjg9In0sInJlZ2lzdGVyZW_AN_YA_QiOmZhbHNlLCJiYW_AN_YA_NrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill2eVJPVGpmY2w0RHp3a1gwYzhmW_AN_YA_UpyMndxZz0ifSwicmVnaXN0cmF0aW_AN_YA_9uIjp7fSwiYW_AN_YA_Njb3VudCI6eyJkZXRhaW_AN_YA_xzIjoiQ00yYjdhY0JFS0NOMmF3R0dBZz0iLCJhY2NvdW_AN_YA_50U2lnbmF0dXJlS2V5IjoiZUZNSzNRL1JBRGliOVRXR0NtM3NmRE9ramg0cUhPSVZvQUxyM3RudGoxST0iLCJhY2NvdW_AN_YA_50U2lnbmF0dXJlIjoiRVByZmxIb0hqW_AN_YA_ldaQktaVm95cW_AN_YA_9oT3JVW_AN_YA_EpyVGJSS0NQVmxDSW_AN_YA_x4cTJQemtqYUo3RVhmdzN1NThPNXFLemRqYkFJU1B2cUsreW_AN_YA_ZOVkdxRUZRY0tMQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IlpDZTlkNkZlL0M5eisyU3RocE5QNVJEQVdTMGZ3V0pYVDhqN1RKTjl2YmczZjMyeW_AN_YA_RDay9ZUlpZdXNnY0NiZ1VNalN6SnAwSW_AN_YA_VFZW_AN_YA_JRd0lSeG9OY0RRPT0ifSwibW_AN_YA_UiOnsiaW_AN_YA_QiOiI5MjMyNzI0MTUyNTQ6OUBzLndoYXRzYXBwLm5ldCJ9LCJzaW_AN_YA_duYW_AN_YA_xJZGVudGl0aW_AN_YA_VzIjpbeyJpZGVudGlmaW_AN_YA_VyIjp7Im5hbW_AN_YA_UiOiI5MjMyNzI0MTUyNTQ6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaW_AN_YA_RlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYaFRDdDBQMFFBNG0vVTFoZ3B0N0h3enBJNGVLaHppRmFBQzY5N1o3W_AN_YA_TlTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW_AN_YA_5jVGltZXN0YW_AN_YA_1wIjoxNzA0MzQ3Mjk5fQ==", 
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "Alone Boy" 
global.author = process.env.Author || "@paeacha99" 
global.packname = process.env.PackName || "paracha99" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© paracha99" 
global.prefa = process.env.Prefix || [*] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "alone boy" 
global.ownernumber = process.env.Owner_Number || "923272415254" 
global.adress = process.env.Continent || "Asia, Pakistan, karachi" 
global.timezone = process.env.TimeZone || "Asia/karachi" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

