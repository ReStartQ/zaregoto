const { EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');
const urlAnimeThemes = "https://api.animethemes.moe/video/?q=";
//make embed menu for search results
module.exports.fetchTheme = async(message, myOption, myType) => {
    if(animeThemesCounter>0){
        animeThemesCounter-=1;
        try {
            await fetch(urlAnimeThemes+myOption)
            .then( res => res.json() )
            .then( data => {
                //iterate through and if there is a match return the result. Else return an embed object menu.
                let myIndex = 0;
                let myFlag = false;
                const exampleEmbed = new EmbedBuilder()
                .setColor(0x2C3E50)
                .setTitle('Opening/Ending Themes \n')
                .setDescription('*Set the option for* **/theme [name]**.\n'+
                                '__**Command Usage Example:**__ \n'+
                                '*The usage of* `name:` *indicates that the option has been selected or autocompleted.* \n' +
                                '**/theme** `name: Bakemonogatari-OP1`\n\n'+
                                '*The following results are based off the name that you provided:* ' + '**'+ myOption +'**'+ '\n')
                .setFooter({ text: 'Only shows up to the first 15 anime op/ed theme results. \n' + 'For more accurate results, be specific with the anime name.'});

                console.log(data);
                data.videos.map((video, index) => {
                    exampleEmbed.addFields(	
                        {   
                            name: 'Name:', 
                            value: '`' + video.filename + '`' 
                        },
                    )
                    if(myOption.toLocaleLowerCase().replaceAll(' ', '')===video.filename.toLocaleLowerCase().replaceAll(' ', '')){
                        console.log('found');
                        myFlag=true;
                        myIndex=index;
                    }
                });

                if(myFlag){
                    if(myType==0){
                        message.channel.send(
                            '**' + data.videos[0].filename + '**' + '\n' + data.videos[0].link
                        );
                    }
                    else{
                        message.reply(
                            { content: '**' + data.videos[0].filename + '**' + '\n' + data.videos[0].link }
                        )
                    }
                }
                else{
                    if(myType==0){
                        message.channel.send(
                            {embeds:[exampleEmbed]}
                        );
                    }
                    else{
                        message.reply({embeds:[exampleEmbed]})
                    }
                }
            });   
        } catch (error) {
            console.log(error);
        }
    }
    else{
        if(myType==0){
            message.channel.send(
                'Try again in a minute.'
            );
        }
        else{
            message.reply(
                'Try again in a minute.'
            )
        }
    }
}

