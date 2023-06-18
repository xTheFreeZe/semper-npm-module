/**
 * @description Gets the mappool data from the Semper API - FOR STREAMS
 * @returns {Promise} Returns a promise that resolves to the mappool data object or false if the request fails.
 */
const getMappoolData = async () => {

  const url = `${process.env.SEMPER_API_URL}/stream/mappool/data?accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  try {

    const reponse = await fetch(url, { method: 'GET' });
    const data = await reponse.json();

    return data;

  } catch (error) {

    console.error('[ERROR] Failed to get mappool data!', error);
    return false;

  };
};

module.exports = getMappoolData;