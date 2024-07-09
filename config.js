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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_31_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxLFxuICAgICAgICAyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MyxcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIwLFxuICAgICAgICA1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjExLFxuICAgICAgICA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNaMFhBdmtrU1VsK1JEbW5FeEw5SlZIZWdhYjdFU3hmQS90c2Q4NlpoaG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlp2REp0YU9NUVEyc1VDSzlzSUNsRndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWI5OTBhMmYtNTBjOC00NzAxLTllYmQtZTgxZmQzYzg3ZGZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDg0LFxuICAgICAgMTk5LFxuICAgICAgMixcbiAgICAgIDIxNyxcbiAgICAgIDIzNyxcbiAgICAgIDExMCxcbiAgICAgIDE1MSxcbiAgICAgIDIxMyxcbiAgICAgIDEzMSxcbiAgICAgIDE5NixcbiAgICAgIDE1MixcbiAgICAgIDg4LFxuICAgICAgMTQxLFxuICAgICAgMTAyLFxuICAgICAgNjUsXG4gICAgICA1OSxcbiAgICAgIDkwLFxuICAgICAgNTUsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICA2LFxuICAgICAgMTA1LFxuICAgICAgMTYyLFxuICAgICAgMTA2LFxuICAgICAgOTAsXG4gICAgICAyMSxcbiAgICAgIDE2LFxuICAgICAgOTgsXG4gICAgICAzMyxcbiAgICAgIDE4NSxcbiAgICAgIDEwOSxcbiAgICAgIDExMCxcbiAgICAgIDg4LFxuICAgICAgNTksXG4gICAgICAxODYsXG4gICAgICAzLFxuICAgICAgMjQ2LFxuICAgICAgMTU3LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT25yNXJZREVPTHFzN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuWVJ4L2U1RjVLbTJldzkyMFN6RlAxQktsR2c3b0lGcjBxNkZlRkU4N0VvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIms1cHYxOE5wR1V1Z1pXZGRCa0ZpQ3ZNd1BXSVVwaUtiejkwT01oRzFETExHd2l4TExkM0cvYytreVFtcGhWdlAxbVlUcDM5M01lRitRVGcxNDI0NUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFDNzhucTNzZWtXREg2cXJHSHI0d1lEaE9JYXNOSms5WDFjZzFIbFNkY2l5NEFyWHYwZktKZ0lpMFVuRVdHY2xZekRFSE95NTAwcTEwSXpjYXovWUR3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExNDkyOTU4MTo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODA0MDY0ODU0ODU4Mjo4N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTQ5Mjk1ODE6ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUxMzg5N1xufSIKfQ=="  // PUT your SESSION_ID 


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
