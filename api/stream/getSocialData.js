/**
 * @description Gets the social data from the Semper API - FOR STREAMS
 * @returns {Promise} Returns a promise that resolves to the social data object or false if the request fails.
 */
const getSocialData = async () => {

  const url = `${process.env.SEMPER_API_URL}/stream/social/data?accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  try {

    const reponse = await fetch(url, { method: 'GET' });
    const data = await reponse.json();

    return data;

  } catch (error) {

    console.error('[ERROR] Failed to get social data!', error);
    return false;

  };
};

module.exports = getSocialData;