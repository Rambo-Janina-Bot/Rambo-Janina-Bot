 module.exports = {
    config: {
        name: "autoreact",
		      version: "1.0",
	       	author: "RAHAT 🤡",
		      countDo wn: 5,
	       	role: 0,
		      shortDescription: "",
	       	longDescription: "",
		       category: "dont know ",
    },
	onStart: async function (){},
	onChat: async function ({ event ,api}) {
		if (event.body.toLowerCase().indexOf("iloveyou") !== -1) return api.setMessageReaction("😙", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("good night") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("good morning") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("pakyo") !== -1) return api.setMessageReaction("😠", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("ArYan") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("AR Yan") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("😢") !== -1) return api.setMessageReaction("😢", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("😆") !== -1) return api.setMessageReaction("😆", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("😂") !== -1) return api.setMessageReaction("😆", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("🤣") !== -1) return api.setMessageReaction("😆", event.messageID,event.threadID)
    
   	if (event.body.toLowerCase().indexOf("🤬") !== -1) return api.setMessageReaction("😡", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("good morning") !== -1) return api.setMessageReaction("❤", event.messageID,event.threadID)

		if (event.body.toLowerCase().indexOf("good evening") !== -1) return api.setMessageReaction("❤", event.messageID,event.threadID)

		if (event.body.toLowerCase().indexOf("bl") !== -1) return api.setMessageReaction("😡", event.messageID,event.threadID)

    		if (event.body.toLowerCase().indexOf("wow") !== -1) return api.setMessageReaction("😳", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("boss") !== -1) return api.setMessageReaction("😳", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("😘") !== -1) return api.setMessageReaction("😳", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("hi") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("hello") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

        		if (event.body.toLowerCase().indexOf("pending") !== -1) return api.setMessageReaction("⏳", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("help") !== -1) return api.setMessageReaction("🤷‍♂", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("kick") !== -1) return api.setMessageReaction("😏", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("😏") !== -1) return api.setMessageReaction("😏", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("bal") !== -1) return api.setMessageReaction("🤬", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("fuck you") !== -1) return api.setMessageReaction("🤬", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("oii") !== -1) return api.setMessageReaction("👧", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("kiss") !== -1) return api.setMessageReaction("😋", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("i hate you") !== -1) return api.setMessageReaction("😞", event.messageID,event.threadID)
  
    if (event.body.toLowerCase().indexOf("kotta") !== -1) return api.setMessageReaction("🥵", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("moga") !== -1) return api.setMessageReaction("😮", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("shoti") !== -1) return api.setMessageReaction("😏", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("pakhi") !== -1) return api.setMessageReaction("😎", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("love") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("i miss you") !== -1) return api.setMessageReaction("💗", event.messageID,event.threadID)

if (event.body.toLowerCase().indexOf("sad") !== -1) return api.setMessageReaction("😔", event.messageID,event.threadID)
    
  }
};
