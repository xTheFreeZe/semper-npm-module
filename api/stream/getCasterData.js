/**
 * @description Gets the caster data from the Semper API - FOR STREAMS
 * @returns {Promise} Returns a promise that resolves to the caster data object or false if the request fails.
 */
const getCasterData = async () => {

  const url = `${process.env.SEMPER_API_URL}/stream/caster/data?accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  try {

    const reponse = await fetch(url, { method: 'GET' });
    const data = await reponse.json();

    return data;

  } catch (error) {

    console.error('[ERROR] Failed to get caster data!', error);
    return false;

  };
};

module.exports = getCasterData;