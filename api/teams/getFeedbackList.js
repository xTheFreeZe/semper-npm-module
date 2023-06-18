const dotenv = require('dotenv');
dotenv.config();

/**
 * @module getFeedbackList
 * @file getFeedbackList.js
 * @description Returns a list of all teams which did not submit feedback in the last 7 days.
 * @param {Number} guildId - The guild ID.
 * @returns {Object} Returns an object containing the team ID and the team name.
 * @error {String} - Returns 
 */
const getFeedbackList = async (guildId) => {

  const url = `${process.env.SEMPER_API_URL}teams/feedback/data/${guildId}?accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  try {

    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();

    return data;

  } catch (error) {

    console.error('[ERROR] Failed to fetch feedback list from API:', error);
    return false;

  }
};

module.exports = getFeedbackList;