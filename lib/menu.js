/**
 * @ Author: SeroBot Team
 * @ Create Time: 2021-05-31 22:33:11
 * @ Modified by: Danang Dwiyoga A (https://github.com/dngda/)
 * @ Modified time: 2021-07-25 10:40:49
 * @ Description: Menu
 */

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textTnC = () => {
    return `
SeroBot adalah *Bot* yg merupakan akronim dari kata Robot yang berarti sebuah sistem yang diprogram oleh komputer.
Sehingga respon atau balasan yang dilakukan oleh bot bukanlah dari Manusia.

Dengan menggunakan bot ini maka anda *setuju* dengan syarat dan kondisi sebagai berikut:
- Berilah jeda dari setiap perintah.
- Dilarang menelfon bot, atau kalian akan kena block otomatis.
- Dilarang keras melakukan spam. Ketahuan = auto banned.
- Bot tidak akan merespon curhatan kalian.
- Bot tidak menyimpan gambar/media yang dikirimkan.
- Bot tidak menyimpan data pribadi anda di server kami.
- Bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Bot berjalan di server secara terpisah (Bukan dalam HP owner).
- Bot akan secara berkala dimonitoring oleh owner, jadi ada kemungkinan chat akan terbaca oleh owner.
- Bot akan dilakukan pembersihan setiap awal bulan atau saat dirasa diperlukan.

Get interested in this open source project? 
Collaborate now: https://github.com/dngda/bot-whatsapp

Best regards, 

-Danang.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textMenu = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Perkenalkan saya
${q3} ___              ___      _   
/ __| ___ _ _ ___| _ ) ___| |_ 
\\__ \\/ -_) '_/ _ \\ _ \\/ _ \\  _|
|___/\\___|_| \\___/___/\\___/\\__|${q3}

Berikut adalah beberapa fitur yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! $ ^ % & + . , -${q3}

Operasi kalkulator gunakan prefix (=)
(cth: =10+2+4)

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 💬 Informasi 💬 〙✪
╠> ${m('donate')} atau ${m('donasi')}
╠> ${m('ping')} atau ${m('speed')}
╠> ${m('owner')}
╠> ${m('stat')}
╚══✪

╔══✪〘 🤩 More Useful 🤩 〙✪
╠> ${m('tagall')} atau ${m('alle')}
║   Group only. Tag seluruh member.
╠> ${m('join')} atau ${m('sewa')}
║   Sewa bot untuk join group kalau slot tersedia.
╠> ${m('listonline')}
║   Group only. Tag seluruh member yang online.
╠> ${m('remind')}
║   Kirimkan pesan ulang sesuai waktu yg ditentukan.
╠> ${m('list')}
║   Membuat list atau daftar yg disimpan di bot.
╠> ${m('note')}
║   Membuat note atau catatan yg disimpan di bot.
╠> ${m('bye')}
║   Group only. Keluarkan bot.
╠> ${m('del')}
║   Hapus pesan bot.
║
╚══✪〘 *SeroBot* 〙✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, sero, serobot) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textAdmin = (prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

╔══✪〘 Admin Only 〙✪
╠> ${m('mutegroup')} atau ${m('group')} buka/tutup
║   Selain admin gabisa kirim pesan
╠> ${m('enablebot')} atau ${m('disablebot')}
║   Hidupkan atau matikan bot untuk group.
╠> ${m('antilinkgroup')} on/off
║   Kick otomatis yg kirim link group
╠> ${m('antikasarkick')} on/off
║   Kick otomatis yg toksik di group
╠> ${m('antilink')} on/off
║   Kick otomatis yg kirim semua jenis link
╠> ${m('antivirtex')} on/off
║   Kick otomatis yg kirim pesan terlalu panjang
╠> ${m('antidelete')} on/off
║   Anti delete pesan di group
╠> ${m('welcome')} on/off
║   Menyambut member baru join
╠> ${m('setprofile')}
║   Ganti foto group
╠> ${m('setname')}
║   Ganti nama group
╠> ${m('grouplink')}
║   Untuk mendapatkan group link
╠> ${m('promote')}
║   Jadiin admin
╠> ${m('demote')}
║   Cabut hak admin
╠> ${m('revoke')}
║   Reset group link
╠> ${m('kick')}
║   Kick member
╠> ${m('add')}
║   Tambah member
║
║ (fitur welcome sering error, mending gak usah)
║
╚═〘 *SeroBot* 〙
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textOwner = (prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    return `
⚠ [ *Owner Only* ] ⚠ 
Berikut adalah fitur owner yang ada pada bot ini!

╔══✪〘 Owner Only 〙✪
╠> ${m('addkasar')}
║   Add kata kasar ke database. Restart required.
╠> ${m('restart')}
║   Restart nodejs. Windows only.
╠> ${m('listgroup')}
║   Return all group list
╠> ${m('listsewa')}
║   Return all group list
╠> ${m('ban')}
║   Ban user.
╠> ${m('unban')}
║   Unban user.
╠> ${m('bc')}
║   Broadcast all chats.
╠> ${m('bcgroup')}
║   Broadcast all group.
╠> ${m('leaveall')}
║   Leave all group kecuali premium (Pembersihan)
╠> ${m('clearexitedgroup')}
║   Delete chat group yang sudah keluar.
╠> ${m('deleteall')}
║   Delete semua chat termasuk group tanpa keluar group.
╠> ${m('clearall')}
║   Clear semua chat tanpa menghapus chats.
╠> ${m('cleanchat')}
║   Simulate clean all chat seperti saat 01:01
╠> ${m('unblock')} atau ${m('u')}
║   Unblock user.
╠> ${m('getinfo')}
║   Get info dari link group.
╠> ${m('getstory')}
║   Get story wa.
╠> ${m('addprem')}
║   Add group ke premium.
╠> _>_
║   Eval.
╠> _$_
║   Shell.
║
╚═〘 *SeroBot* 〙
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

Ovo/Gopay/Dana: 0851 6146 7958
Pulsa: 0858 7750 2176
Paypal: https://paypal.me/dngda
Saweria: https://saweria.co/dngda
Trakteer: https://trakteer.id/dngda

Bitcoin : 14vHto4CCXmEwC6BVsifyVmMxxsGydRHCS
USDT (Trc20) : TB29LW37akLR5VmCkatK3ppxftUogSA8SU

Berapapun nominalnya akan sangat membantu pengembangan bot ini.
Terimakasih. ~Danang`
}

export default {
    textTnC,
    textMenu,
    textOwner,
    textAdmin,
    textDonasi
}
