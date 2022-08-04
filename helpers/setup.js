module.exports = async function setup(client, Routes, TOKEN, CLIENT_ID, GUILD_ID, rest, commands) {
    // code here
    try {
        console.log('Slash Commands');
        await rest.put(Routes.applicationCommands(CLIENT_ID), {
          body: commands,
        });
        //login
        client.login(TOKEN);
      } catch (err) {
        console.log(err);
      }
}

/* const commands = [
      {
        name: 'help',
        description: 'Order something...',
      },
      {
        name: 'optioncommand',
        description: 'option command',
        options: [
            {
                name: 'anime',
                description: 'anime type',
                type: 3,
                required: false,
                choices: [
                    {
                        name: 'happy',
                        value: 'happy',
                    },
                    {
                        name: 'bully',
                        value: 'bully'
                    }
                ]
            }
        ],
      },
    ]; */

/* async function setup() {
    try {
      console.log('Application slash commands.');
      await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
        body: commands,
      });
      //login
      client.login(TOKEN);
    } catch (err) {
      console.log(err);
    }
} */