const dotenv = require('dotenv');
dotenv.config();

/**
 * @module editSkillRating
 * @file editSkillRating.js
 * @description Edits the skill rating of a team.
 * @param {String} guildId 
 * @param {Number} teamId 
 * @param {String} skillRating 
 * @returns {Object} { status: Boolean, image: String, rating: Number, ratingEmoji: String }
 */
const editSkillRating = async (guildId, teamId, skillRating) => {

  const url = `${process.env.SEMPER_API_URL}team/set/rating?rating=${skillRating}&teamId=${teamId}&guildId=${guildId}&accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  try {

    const response = await fetch(url, { method: 'POST' });
    const data = await response.json();

    if (data.statusId === 1) {

      return { status: true, image: data.image, rating: data.rating, ratingEmoji: data.ratingEmoji };

    } else {

      console.error('[ERROR] Failed to update skill rating!');
      return false;
    }

  } catch (error) {

    console.error('[ERROR] Failed to fetch skill rating API!', error);
    return false;

  }

};

module.exports = editSkillRating;