/**
 * @param {number} teamSlot The team slot to get the data for.
 * @description Gets the team data from the Semper API - FOR STREAMS
 * @returns {Promise} Returns a promise that resolves to the team data object or false if the request fails.
 */
const getStreamTeam = async (teamSlot) => {

  if ( teamSlot === undefined) {

    console.error(`[ERROR] No team slot specified - Expected a number but got ${teamSlot} - getStreamTeam()`);
    return false;

  }

  const url = `${process.env.SEMPER_API_URL}/stream/team/data?teamSlot=${teamSlot}&accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  try {

    const reponse = await fetch(url, { method: 'GET' });
    const data = await reponse.json();

    return data;

  } catch (error) {

    console.error('[ERROR] Failed to get stream team data!', error);
    return false;

  };
};

module.exports = getStreamTeam;