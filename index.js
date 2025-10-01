const SteamUser = require('steam-user');
const user = new SteamUser();

const logOnOptions = {
  accountName: process.env.STEAM_USER,
  password: process.env.STEAM_PASS
};

user.logOn(logOnOptions);

user.on('loggedOn', () => {
  console.log(`${logOnOptions.accountName} - Successfully logged on`);
  user.setPersona(SteamUser.EPersonaState.Online);
  user.gamesPlayed([440, 730, 570]); // TF2, CS:GO, Dota 2
});
