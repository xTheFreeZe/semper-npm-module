const getTeamData = require('./getTeamData.js');

/**
 * @module editLFPList
 * @file editLFPList.js
 * @description Edits the Looking-for-players list of a team.
 * @param {String} guildId 
 * @param {Number} teamId 
 * @param {Number} roleId 
 * @returns {Object} { status: Boolean, isSearching: Boolean }
 */
const editLFPList = async (guildId, teamId, roleId) => {

  const lookUpData = await getTeamData(teamId, guildId);

  const removeUrl = `${process.env.SEMPER_API_URL}/team/set/lfm/?roleId=${roleId}&teamId=${teamId}&completed=${1}&guildId=${guildId}&accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;
  const addURL = `${process.env.SEMPER_API_URL}/team/set/lfm/?roleId=${roleId}&teamId=${teamId}&completed=${0}&guildId=${guildId}&accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  const searching = lookUpData.teamData.playerSearch[roleId].searchCount;

  console.log('Searching:', searching ? 'Deleting team role from LFP List - searching > 0' : 'Adding team role to LFP List - searching = 0');

  try {

    const response = await fetch(searching ? removeUrl : addURL, { method: 'POST' });
    const data = await response.json();

    if (data.statusId === 1) {

      return { status: true, isSearching: searching };

    } else {

      console.error('[ERROR] Failed to update LFP list!');
      return false;
    }

  } catch (error) {

    console.error('[ERROR] Failed to update LFP API list!', error);
    return false;

  }
};

module.exports = editLFPList;