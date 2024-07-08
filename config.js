const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://steezy_maxwell:Steezy._.and._.Maxwell@maxwellandsteezy.wbmgyr4.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349114929581";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "tru8";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_00_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDY5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgODMsXG4gICAgICAgIDIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk3LFxuICAgICAgICA1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDYsXG4gICAgICAgIDk0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMjksXG4gICAgICAgIDYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTczLFxuICAgICAgICA0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI3LFxuICAgICAgICA2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MSxcbiAgICAgICAgODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MCxcbiAgICAgICAgODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDkwLFxuICAgICAgICA3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgxLFxuICAgICAgICA3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg5LFxuICAgICAgICA5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImZReUZ3V2Fvc21GR0lkQjVNc3dlSXh0aFNZMXRwZGZpR0hYM3dNNVhDVVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5VSlh3cXhTUVlHb0tCRWNfcFlEZmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMThmNTYyNjQtNDg0ZC00NjE0LWFjZGMtMjA1ZWJhYmEzZjA3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDI1MSxcbiAgICAgIDEyNyxcbiAgICAgIDgyLFxuICAgICAgMTk3LFxuICAgICAgMTY5LFxuICAgICAgODMsXG4gICAgICAxMixcbiAgICAgIDEzOSxcbiAgICAgIDEwLFxuICAgICAgNzAsXG4gICAgICAxMzMsXG4gICAgICAxOTgsXG4gICAgICAxNjgsXG4gICAgICAxODEsXG4gICAgICAyMzEsXG4gICAgICA2NSxcbiAgICAgIDEzMyxcbiAgICAgIDg0LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDU0LFxuICAgICAgMTEyLFxuICAgICAgMTMwLFxuICAgICAgMTgsXG4gICAgICAxOTYsXG4gICAgICA4MixcbiAgICAgIDI1NCxcbiAgICAgIDgsXG4gICAgICAxMDgsXG4gICAgICA5NSxcbiAgICAgIDIyOCxcbiAgICAgIDYxLFxuICAgICAgNjEsXG4gICAgICA0NSxcbiAgICAgIDc3LFxuICAgICAgMTk0LFxuICAgICAgNzYsXG4gICAgICA4OCxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09mcjVyWURFTEcyc0xRR0dBMGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibllSeC9lNUY1S20yZXc5MjBTekZQMUJLbEdnN29JRnIwcTZGZUZFODdFbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlTHFqRkV5Q3MyNll0WXNvckhYcml0M2xJRUF4ODIvT0ZHSnZUWXBLeitYakFXVjZueWE1QXFHQ3VYOXRrVU1Zb0NUeHV6N1Ntd2NoWjA2WGJCcUZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXRmNjajgwdlU2NFhCU1pJY3dFZGIrU2dtQVhNY1FsMmF1cU56NVJmYnRMME5sTUZkUkxmT2VwbmIxSDJQaFFLYjlUaWxWTVF0K05tb0lKM3ZjWGlCQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTQ5Mjk1ODE6ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgwNDA2NDg1NDg1ODI6ODVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE0OTI5NTgxOjg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NTgwMzdcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "⚡",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "☠︎︎Shalli-nosky☠︎︎",
  packname: process.env.PACK_NAME || "☠︎︎Shalli-nosky☠︎︎",
  botname : process.env.BOT_NAME  || "☠︎︎Shalli-nosky☠︎︎",
  ownername:process.env.OWNER_NAME|| "☠︎︎Shalli-nosky☠︎︎",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
