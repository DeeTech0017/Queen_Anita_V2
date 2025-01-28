//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348169997565";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhheHFMOTFaekl4TEp6dUp4bnI2VHlMMEZBdVFoL3RYVnhYNEtPczhscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjRIdXF4VGJBUnZkbFZLYlJKMkVrTzdxR0Z3WkpxYzY1RzVuclpyb2lRZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRzlBSzVFaU1GMVlYZWl3M2EzaWxYRXNYVDYrTWpWMytMWGtoclJQQlVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwaHgwYWwrdFVDVDhCVjV6cllFUWxWL3BRWjZnRmFLajNLOTZPcFRPeW5FPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QM0I2aThEZis0NFhMcDJxSmxDV2I5NG9uczRGMDVMUUJpT0oxYzdPVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpKNG51V1hOOGNGeFhkTnNlN2phazRuRUdlcTJJdHRBeDhXQWxhbVY3R2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1BlYzFVK2V1c1Nka2lwWDdVaWJNTDJWbUJUbUdaeDNhTzNRZXMyZ2RXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDF1NjVOdUFLQ3ZLL2pVcFBUaUpFUFUyd3V5SWc4N0xXcHFLekZUNmRWbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlENkFFNVNCci9sNzNiREdia0lZMkFyTXg3dXNOY2w0eXJ6MXVENmg1TFdVY1BNVUQ5dEVwcDlieHdzWitMRkoxbVZJREJrZEVYMGxxNExLbkVHNmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiI2L3B5QmtDVmxJTGpqNlFEUm1TZmtlNzV5VG93Si93cmZmclV6eE02R0dNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNjk5MDc1NjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTgyQjdBQTg1MTJBMTAxNkMxQ0VBMDM2Mjg5RjY5NzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczODA5MzE3OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiM2VVMGUtUjNUcTZURVZWVV9SWW9VQSIsInBob25lSWQiOiI2MTE0ZThiNi0yN2JiLTQ2ZjctOWVjMi00Mjk1OGE3MzM2ZTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlYwZE81Tmp0Y09Kd3pPUGttL1MrTEZOVG9NPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRvQXJaanNUT2lndXBmcFdzWndJTGFjSzR0cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSSk1YTlczWCIsIm1lIjp7ImlkIjoiMjM0ODE2OTkwNzU2NToxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlJBU0hGT1JEIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMdVhoZEVDRU92azVMd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYUzB1Q0VLRlRHb3JDdEs2ZEpZQVZGR05WM0FPWG5CMDExMGdhQ2hlQjNrPSIsImFjY291bnRTaWduYXR1cmUiOiJwQXBDVnQ1RVM0aGV4cU8rd0NoVVlUNk5mWkJnUXRVVU0xYi81UE1RaG0wWTZ4aW5NcWtISUxnUjVCR2w1ZHZwczR4U1c4V3VHVk9wVkZCMFQxWWFBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSnphSENDRTc0cDUrMUdnU2hzazFITW40Y0V3YXlZeVlmSko2OHFqMVAySFpaOHEvdFJtSTd0MEhXR2RtTFlXTW5xN0JvZndUVmVDTmNVN3lNQlBKanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTY5OTA3NTY1OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjB0TGdoQ2hVeHFLd3JTdW5TV0FGUlJqVmR3RGw1d2ROZGRJR2dvWGdkNSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczODA5MzE3NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMT3gifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
