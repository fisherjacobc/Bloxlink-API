(async () => {
    const guild = require('../guild')

    guild.setGuildApiKey("YOUR-API-KEY-HERE")


    const request1 = await guild.DiscordToRoblox("856313620472004629", "756614666066591836");

    const request2 = await guild.RobloxToDiscord("856313620472004629", "531761235");
    
    console.log(`The Roblox ID belonging to the Discord ID is ${request1.robloxID}`)

    console.log(`The Discord ID(s) belonging to the Roblox ID are ${request2.discordIDs}`)
})();