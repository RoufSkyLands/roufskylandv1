/*
> Script By Sky Gua Masih Belajar
> Script Ini Masih ERROR Belum Sempurna
> ERROR Kunjungi GROUP ( https://chat.whatsapp.com/F7lS7fuRb2AGIVk4x6VFL7 )
> Note : Script Ini Gratis Untuk Semua Orang
> Ada Yang Jual Script Ini Neraka Menunggumu🔥🔥
> Hubungi 6281272275593 Jika Ada Orang Yang Jual Script Ini💢💭
*/

const fs = require('fs')
const chalk = require('chalk')

global.nomerOwner ="6281272275593"
global.nomerOwner2 = "62895388738585"
global.ownerName = "Rouf SkyLands"
global.namabot = "© SkyLands Botz"
global.botName = "© SkyLands Botz"
global.autoJoin = true
global.sessionName = 'session' //hati hati nanti error
global.packName = "sᴋʏ ʙᴏᴛᴢ -ツ"
global.authorName = "@sᴋʏʟᴀɴᴅs°^°"
global.namastore = "SkyLands Store"
global.nodana = "081272275593"
global.nogopay = "081272275593"
global.noovo = "081272275593"
global.qris = "-"
global.TextT = `SkyLands°᭄ᴮᵒᵗ` //
global.textT = `SkyLands°᭄ᴮᵒᵗ` // 
global.sgc = 'https://chat.whatsapp.com/F7lS7fuRb2AGIVk4x6VFL7'
global.syt = ''
global.sig = 'https://instagram.com/roufskyland'
const mess = {
wait: '_Sedang Di Proses Mohon Di Tunggu..._',
query: 'Masukan query',
search: 'Searching...',
scrap: '*Scrapping...*',
success: 'Berhasil!',
err: 'Terjadi Kesalahan Coba Lagi Nanti!',
limit: '[❕] Limit kamu sudah habis silahkan ketik .limit untuk mengecek limit',
claimOn: 'Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam ',
wrongFormat: 'Format salah, coba liat lagi di menu',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},
block:{
Bowner: `Maaf kak command sedang dalam perbaikan coba lagi besok .`,
Bsystem: `Command tersebut telah di block oleh system karena terjadi error`
},
only: {
prem : 'Maaf Kak, Tapi Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium',
group: 'Fitur ini dapat digunakan di dalam group!',
ownerB: 'Fitur khusus Owner Bot!',
owner: 'Maaf Kak Ini Fitur Khusus Owner Ku!!!',
admin: 'Fitur dapat digunakan oleh admin group!',
Badmin: 'Jadikan SkyLands Sebagai Admin Terlebih Dahulu!!!'
}

}

global.mess = mess
//=================================================//
global.fotoRandom = [
    "https://telegra.ph/file/bcc51c3423df47aa2508f.jpg",
    "https://telegra.ph/file/b5532b856c6e8ec5f9162.jpg",
    "https://telegra.ph/file/402598c0fcc1759327a15.jpg",
    "https://telegra.ph/file/73576a4e14a11c08aab30.jpg",
    "https://telegra.ph/file/c39bff047d7334bce32b6.jpg",
   
    ]
// Apikey 
global.api = {
ehz: 'always ehz',
angel: 'zenzkey_af003aedbf', // Apikey Zahwazein
Lol: 'GataDios',
Botcahx: 'Admin',
Apiflash: '9b9e84dfc18746d4a19d3afe109e9ea4',
}
//Gausah Juga
global.gcounti = {
'prem' : 9999,
'user' : 20
} 
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})