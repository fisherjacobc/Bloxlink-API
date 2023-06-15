(async () => {
    const global = require('../global')

    global.setGlobalApiKey("YOUR-API-KEY-HERE")


    const request1 = await global.DiscordToRoblox("756614666066591836");

    const request2 = await global.RobloxToDiscord("531761235");

    console.log(`The Roblox ID belonging to the Discord ID is ${request1.robloxID}`)

    console.log(`The Discord ID(s) belonging to the Roblox ID are ${request2.discordIDs}`)
})();