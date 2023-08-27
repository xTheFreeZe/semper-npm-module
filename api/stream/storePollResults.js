/**
 * @description Returns the finished polls data - FOR STREAMS
 * @returns {Promise} Returns a promise that resolves to the poll data object or false if the request fails.
 */
const storePollResults = async () => {

  const url = `${process.env.SEMPER_API_URL}stream/poll/results/store?accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  try {

    const reponse = await fetch(url, { method: 'POST' });
    const data = await reponse.json();

    return data;

  } catch (error) {

    console.error('[ERROR] Failed to get poll data! - finished polls', error);
    return false;

  };
};

module.exports = storePollResults;