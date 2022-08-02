module.exports = {
    name: 'ready',
    once: true,
    async execute (client, commands) {
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
        client.user.setActivity('?help or /help');
    }
}

/* client.once('ready', () =>{
    console.log('bot ready');
}); */