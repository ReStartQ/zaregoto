const { fetchManga } = require("../functions/fetchManga");

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute (message, commands, fetchWaifuPic, fetchWaifuPicGif, fetchWaifuPicGifOption, waifuPicGifOptionMenu, help, helpDM, waifuPicOptionsGifs, waifuPicOptions, fetchAnimeImageGif, fetchAnimeFact, fetchRandomTheme, fetchRandomQuote, fetchRandomAnime, fetchRandomManga, fetchAnime) {
        switch(message.content.toLocaleLowerCase()){
            case '?theme':
                await fetchRandomTheme(message, 0);
                break;
            case '?quote':
                await fetchRandomQuote(message, 0);
                break;
            case '?pic':
                await fetchWaifuPic(message, 0);
                break;
            case '?fact':
                await fetchAnimeFact(message, 0);
                break;
            case '?gif':
                await fetchWaifuPicGif(message, 0);
                break;
            case '?gif-option':
                await waifuPicGifOptionMenu(message);
                break;
            case '?help':
                help(message, 0, false);
                break;
            case '?help-dm':
                helpDM(message);
                break;
            case '?anime':
                fetchRandomAnime(message,0);
                break;
            case '?manga':
                fetchRandomManga(message,0);
                break;
            default:
        }
        //gif-options
        if(message.content.toLocaleLowerCase().startsWith('?gif-')){ //5 characters
            let myStartsWithIndex = 5; //this number will change depending on the command
            let myOption = message.content.toLocaleLowerCase().substring(myStartsWithIndex, message.content.toLocaleLowerCase().length);
            console.log(myOption);
            if(waifuPicOptionsGifs.includes(myOption)){ //check to see if its one of the options
                await fetchWaifuPicGifOption(message, myOption, 0);
            }
        }
        //anime-name
        if(message.content.toLocaleLowerCase().startsWith('?anime-')){ //7 characters
            let myStartsWithIndex = 7; //this number will change depending on the command
            let myOption = message.content.toLocaleLowerCase().substring(myStartsWithIndex, message.content.toLocaleLowerCase().length);
            console.log(myOption);
            await fetchAnime(message, myOption, 0);
        }
        //anime-name
        if(message.content.toLocaleLowerCase().startsWith('?manga-')){ //7 characters
            let myStartsWithIndex = 7; //this number will change depending on the command
            let myOption = message.content.toLocaleLowerCase().substring(myStartsWithIndex, message.content.toLocaleLowerCase().length);
            console.log(myOption);
            await fetchManga(message, myOption, 0);
        }
    }
}

