/**
 * @description Gets the team lineup from the Semper API - FOR STREAMS
 * @returns {Promise} Returns a promise that resolves to the lineup data object or false if the request fails.
 */
const getTeamLineUp = async () => {

  const url = `${process.env.SEMPER_API_URL}/stream/team/lineup/data?accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  try {

    const reponse = await fetch(url, { method: 'GET' });
    const data = await reponse.json();

    return data;

  } catch (error) {

    console.error('[ERROR] Failed to get team lineup data!', error);
    return false;

  };
};

module.exports = getTeamLineUp;