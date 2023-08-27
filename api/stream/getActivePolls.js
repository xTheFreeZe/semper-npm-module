/**
 * @description Get's all the active polls running on semper stream - FOR STREAMS
 * @returns {Promise} Returns a promise that resolves to the poll data object or false if the request fails.
 */
const getActivePolls = async () => {

  const url = `${process.env.SEMPER_API_URL}stream/poll?accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  try {

    const reponse = await fetch(url, { method: 'GET' });
    const data = await reponse.json();

    return data;

  } catch (error) {

    console.error('[ERROR] Failed to get poll data! - active polls', error);
    return false;

  };
};

module.exports = getActivePolls;