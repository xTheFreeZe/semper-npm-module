const dotenv = require('dotenv');
dotenv.config();

/**
 * @module getTeamList
 * @file getTeamList.js
 * @description Returns a list of all teams in a guild including their players.
 * @param {Number} teamId - The team ID.
 * @param {Number} start - The start index.
 * @param {Number} end - The end index.
 * @description getTeamList ('980516998670868530', 0, 10) - Returns the first 10 teams in the guild.
 */
const getTeamList = async (guildId, start, end) => {

  if (guildId === undefined || start === undefined || end === undefined) {

    return console.error('[ERROR] Missing parameters for getTeamList() function.');

  }

  const url = `${process.env.SEMPER_API_URL}teams/list?guildId=${guildId}&start=${start}&end=${end}&accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  try {

    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();

    return data;

  } catch (error) {

    console.error('[ERROR] Failed to fetch team list data from API:', error);
    return false;

  }
};

module.exports = getTeamList;