const { fetchManga } = require("../functions/fetchManga");

module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute (interaction, commands, fetchWaifuPic, fetchWaifuPicGif, fetchWaifuPicGifOption, waifuPicGifOptionMenu, help, helpChannel, waifuPicOptionsGifs, waifuPicOptions, fetchAnimeImageGif, fetchAnimeFact, fetchRandomTheme, fetchRandomQuote, fetchRandomAnime, fetchRandomManga, fetchAnime, fetchManga) {
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
                if(options._hoistedOptions.length==0){
                    help(interaction, 1, false);
                }
                else{
                    if(options._hoistedOptions[0].value==='private'){
                        help(interaction, 1, true);
                    }
                    else{
                        help(interaction, 1, false);
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
            case 'anime':
                if(options._hoistedOptions.length==0){
                    fetchRandomAnime(interaction,1);
                }
                else{
                    console.log(options._hoistedOptions[0].value);
                    fetchAnime(interaction, options._hoistedOptions[0].value, 1);
                }
                break;
            case 'manga':
                if(options._hoistedOptions.length==0){
                    fetchRandomManga(interaction,1);
                }
                else{
                    console.log(options._hoistedOptions[0].value);
                    fetchManga(interaction, options._hoistedOptions[0].value, 1);
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