/**
 * @description Gets the stream dealay - FOR STREAMS
 * @returns {Promise} Returns a promise that resolves to the stream delay object or false if the request fails.
 */
const getStreamDelay = async () => {

  const url = `${process.env.SEMPER_API_URL}stream/delay?accessToken=${process.env.SEMPER_API_ACCESS_TOKEN}`;

  try {

    const reponse = await fetch(url, { method: 'GET' });
    const data = await reponse.json();

    return data;

  } catch (error) {

    console.error('[ERROR] Failed to get stream!', error);
    return false;

  };
};

module.exports = getStreamDelay;