module.exports = {
  config: {
    name: "bigfuck",
    aliases: ["lm10"],
    version: "1.0",
    author: "Otineyyyy your dadddy👾😉",
    countDown: 5,
    role: 0,
    shortDescription: "bayjid2",
    longDescription: "",
    category: "busy",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
   var link = [ "http://g-v1.onrender.com/wFGAaLRez.mp4",
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「LIKHON ER MARE CHUDI   𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐁𝐀𝐘𝐉𝐈𝐃」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }
