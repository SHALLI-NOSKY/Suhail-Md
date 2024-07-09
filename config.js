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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_59_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQwLFxuICAgICAgICA4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI2LFxuICAgICAgICA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDUzLFxuICAgICAgICA4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU0LFxuICAgICAgICA1MixcbiAgICAgICAgMjksXG4gICAgICAgIDU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk3LFxuICAgICAgICA0NixcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk2LFxuICAgICAgICA5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM3LFxuICAgICAgICA5NixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR2JFZUtFelRUMXdvWjZBUWJmZGF4MHVsd2pUUVpDTlUyenFCQVFPRkZhdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS1RiUGRXd3VTLWlseFZKRHBmaS0xd1wiLFxuICBcInBob25lSWRcIjogXCI3NzExZDU1OC03ZDAxLTQzM2QtODBhYi00MWQxNzQ1NGVkYmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxMjIsXG4gICAgICAxMzEsXG4gICAgICAzMCxcbiAgICAgIDkzLFxuICAgICAgMTU0LFxuICAgICAgOTQsXG4gICAgICAyNSxcbiAgICAgIDI0NyxcbiAgICAgIDIsXG4gICAgICAxODIsXG4gICAgICAxNTYsXG4gICAgICA0NyxcbiAgICAgIDQxLFxuICAgICAgODAsXG4gICAgICAxMzksXG4gICAgICAyNTMsXG4gICAgICAyMDgsXG4gICAgICA0OCxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDY5LFxuICAgICAgNTAsXG4gICAgICAyMjQsXG4gICAgICAyMzAsXG4gICAgICAxMDksXG4gICAgICAyMjUsXG4gICAgICA3MixcbiAgICAgIDE3LFxuICAgICAgMTUxLFxuICAgICAgNDQsXG4gICAgICAyNDksXG4gICAgICAyNDUsXG4gICAgICAyMzAsXG4gICAgICAxNTksXG4gICAgICA2OSxcbiAgICAgIDIxNCxcbiAgICAgIDE2NSxcbiAgICAgIDI0NixcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMQkNMUU5GQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExNDkyOTU4MTo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODA0MDY0ODU0ODU4Mjo4NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPanI1cllERU1lL3M3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5ZUngvZTVGNUttMmV3OTIwU3pGUDFCS2xHZzdvSUZyMHE2RmVGRTg3RW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTXRCYVlVdnIzVkhqZTVNdFUrRDU1aSs5VHJqUlJ5ZUJDQ2VCM0VzT255a01FUi9BNXF5OURhN0N4bytGci90WVpUbXQxQVF6dUtXdnViOU1FbkVFQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWEprTzlNTTNBV0lJUnJwcHdWWWtLbWtJQUJXeTVPcmN1Z1hsZ1ZYdk91dXJBaExzbjlTYm5leW4wem5rZ3pLbDUrVWZRam0rWjdmaEw0ZGVxRmNHaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExNDkyOTU4MTo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTA4MzY1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
