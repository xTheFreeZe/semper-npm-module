/**
 * @module setPlayerData
 * @file setPlayerData.js
 * @description Set the player data for a player who is in a team. In order for this to work, you have to give the function an actual array with roles.
 * It will check if the player is a Discord Booster or Twitch Subscriber and set the values accordingly.
 * @param {Array} playerRoles 
 * @param {String} playerName 
 * @param {String} guildId 
 * @param {Number} playerId 
 * @returns {Boolean} Returns true if the player data was updated successfully, false if not.
 */
const setPlayerData = async (playerRoles, playerName, guildId, playerId) => {

  if (!playerRoles || !playerName || !guildId || !playerId) {

    console.error(`[ERROR] Missing parameters for setPlayerData() - Expected: playerRoles, playerName, guildId, playerId. Received: ${playerRoles}, ${playerName}, ${guildId}, ${playerId}`);

    return false;

  }

  const isDiscordBooster = playerRoles.includes('Server Booster') ? 1 : 0;
  const isTwitchSubscriber = playerRoles.includes('Twitch Subscriber') ? 1 : 0;

  const url = `${process.env.SEMPER_API_URL}/player/set/data?guildId=${guildId}&playerId=${playerId}&name=${playerName}&discordBooster=${isDiscordBooster}&twitchSubscriber=${isTwitchSubscriber}&accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  try {

    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();

    console.log('[INFO] Status code:', data.statusId);

    if (data.statusId === 1) {

      console.log('[INFO] Player data updated successfully!');

      return true;

    } else {

      console.log('[ERROR] Failed to update player data!');

      return false;

    }

  } catch (error) {

    console.log('[ERROR] Failed to update player data!', error);

    return false;

  }
};

module.exports = setPlayerData;