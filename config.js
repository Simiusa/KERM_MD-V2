//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237672110033 , https://wa.me/237672110033";
global.sudo = process.env.SUDO || "237672110033";
global.owner = process.env.OWNER_NUMBER || "237672110033";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUovbG1uTWhMdDB2bDNVQitzS3U3Znc5TVRBVjBBOVBSanpzK1IzY01HMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNyeDZJRVQveUM5SlhFLzJnUUNxUUpuSlBsQ0cyY21JVWdWUHlUNGRVND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRmk2dGJrYjJCdHl1USsrR3pKN1ltK2xCcVVDcGNkTjc3bEJFRFhMWDFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHY2oyZnkyelh4Q1NLVUJwYVl2c1pYTWVsdFVUNlNlTzFtNGFMajNuZFZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhHMy9yMUxUamNTMzVQVFZieVVvQzdDY3JsWXFQWTlxZEpxUFZUaG9XblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpSSnNFS3dEaG4wa2JSMFJyZHR2NnRMTmtCSEdzaW01dHJIeXpkT0JjQWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0pYNkpNMG9QM3FPNUhveWNzbVk4R0hFQjhpRnd3OEdzL0ZvbXBZUUJHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlhoYW5sNDFRRFhtdmNJOVkrUEFrdkpXRHNPNEFDZWNnQ0FGdStsd1ZGTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklBODd3bUdxY2NGN3U5WHRneDVpMnk4Y1ZSQkZ1U3VRM29KSnhyaEF2QURjd2N0Z0tsY3Q4QllUemxpWVJaeFRPa3JqQVJhV2pBNDU3UysrRnRwVUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJVc3ZQdkxXckpzOFNBUUlDaVE1dGx3WEZtVmFqZko2NFJERVE2TUtnRDYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY3MjExMDAzM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTA2QTA5NjQ2RjczNUI2OTE4MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3OTYxNjAzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxdzY2bUM0N1RvNnlFMlJnbWhyaEtRIiwicGhvbmVJZCI6IjUzNjQyMDZiLThiNzUtNDQyOS1iYjAwLWRlZGUxNjk1NWVhZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2bW9PYmdPUDI5WktKYml6cEJwUnNzeFhlMlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWM0b3U5aTI1djR2ZEtXWEplbWZPSURHMHdNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxWNkZZU0hRIiwibWUiOnsiaWQiOiIyMzc2NzIxMTAwMzM6MjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVVNBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQQzl6WjRFRVBLeityY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzNnlpNlNIMWVjS1l5TFpHLzh0TjdBNE9GMmJ2VmtHMGRjWWx5VkVtaGh3PSIsImFjY291bnRTaWduYXR1cmUiOiJXaFlVQU4zWnFQTkhERjcrZTlqSUhYQlUyNHpha1lmRUhQbC84MEFwbVlJTUxrMXVvZGxqaFpFcy9UeERzODd4NDNocVU1a1B4N1pOeXBDV2NXUU5oQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOFJCdkMrSUJBU1M0NnhlcUNza210NU12cjBZcmJGQ1FkNk9YZ2JXM1JEaFg0SE9iZ3M3ajVLeTBZNWNCcFFJaFFRcytTSXFOS3I4QjFHOFFIbDFQQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NzIxMTAwMzM6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZCtzb3VraDlYbkNtTWkyUnYvTFRld09EaGRtNzFaQnRIWEdKY2xSSm9ZYyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3OTYxNjAwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUU5WCJ9"
module.exports = 
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
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
