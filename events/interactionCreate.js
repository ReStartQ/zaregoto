module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute (interaction, commands, fetchWaifuPic, fetchWaifuPicGif, fetchWaifuPicGifOption, waifuPicGifOptionMenu, help, helpChannel, waifuPicOptionsGifs, waifuPicOptions, fetchAnimeImageGif, fetchAnimeFact, fetchRandomTheme, fetchRandomQuote) {
        if (interaction.isChatInputCommand()) {
            console.log('command coming');
        }

        const { commandName, options } = interaction;

        switch(commandName){
            case 'theme':
                fetchRandomTheme(interaction,1);
                break;
            case 'quote':
                fetchRandomQuote(interaction, 1);
                break;
            case 'pic':
                fetchWaifuPic(interaction, 1);
                break;
            case 'fact':
                fetchAnimeFact(interaction,1);
                break;
            case 'help':
                console.log(options);
                if(options._hoistedOptions.length==0){
                    console.log('default')
                    help(interaction, 1);
                }
                else{
                    if(options._hoistedOptions[0].value==='sends help menu by DM'){
                        console.log('dm');
                        help(interaction, 1);
                    }
                    else{
                        console.log('channel');
                        help(interaction, 1);
                    }
                }
                break;
            case 'gif':
                if(options._hoistedOptions.length==0){
                    fetchWaifuPicGif(interaction,1);
                }
                else{
                    fetchWaifuPicGifOption(interaction, options._hoistedOptions[0].value, 1);
                }
                break;
        }

    }
}

/* client.on('interactionCreate', async (interaction) => {
    if (interaction.isChatInputCommand()) {
      console.log('Hello');
      interaction.reply( { content:'hey' } );
    }
}); */