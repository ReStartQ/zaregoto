
module.exports = {
    name: 'ready',
    once: true,
    async execute (client, commands, ActivityType) {
        console.log('bot ready');
        /*      
            ActivityTypes
            PLAYING
            STREAMING
            LISTENING
            WATCHING
            CUSTOM
            COMPETING 
        */
        client.user.setActivity('/help', { type: ActivityType.Playing });
/*         setInterval(() => {client.user.setActivity('/help', { type: ActivityType.Playing });}, 60000);  */

    }
}
