const dotenv = require('dotenv');
dotenv.config();

/**
 * @module getTeamData
 * @file getTeamData.js
 * @description Get all data for a team.
 * @param {Number} teamId - The team ID.
 * @param {String} guildId - The guild ID.
 */
const getTeamData = async (teamId, guildId) => {

  if (teamId === undefined || guildId === undefined) {

    return console.error('[ERROR] Missing parameters for getTeamData() function.');

  }

  const url = `${process.env.SEMPER_API_URL}team/get/data/?teamId=${teamId}&guildId=${guildId}&accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  try {

    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();

    return data;

  } catch (error) {

    console.error(error);
    return false;

  }
};

module.exports = getTeamData;