module.exports = {
    name: 'ready',
    once: true,
    async execute (client, commands) {
        console.log('bot ready');
    }
}

/* client.once('ready', () =>{
    console.log('bot ready');
}); */