const { config } = require("dotenv");
const fetch = require("node-fetch");
const AnimeFact = require("anime-facts");
//dotenv
config();
const AnimeFactAPI = new AnimeFact(process.env.ANIME_FACT_TOKEN);
const FactClient = require("waifu.it");
const FactAPI = new FactClient(process.env.ANIME_FACT_TOKEN);

module.exports.fetchAnimeFact = async (message, myType) => {
  if (animuCounter > 0) {
    animuCounter -= 1;
    try {
      await FactAPI.getFact().then(async (res) => {
        if (myType == 0) {
          await message.channel.send(">>> " + res.fact);
        } else {
          await message.reply({
            content: ">>> " + res.fact,
          });
        }
        animuFacts.push(">>> " + res.fact);
        console.log(res);
      });
    } catch (error) {
      console.log("Animu API down");
      await message.reply({ content: "Try again later", ephemeral: true });
    }
  } else {
    if (animuFacts > 0) {
      if (myType == 0) {
        await message.channel.send(
          animuFacts[Math.floor(Math.random() * animuFacts.length)]
        );
      } else {
        await message.reply({
          content: animuFacts[Math.floor(Math.random() * animuFacts.length)],
        });
      }
    }
  }
};
