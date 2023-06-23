const getTeamData = require('./api/teams/getTeamData.js');
const getTeamList = require('./api/teams/getTeamList.js');
const getFeedbackList = require('./api/teams/getFeedbackList.js');
const editSkillRating = require('./api/teams/editSkillRating.js');
const editLFPList = require('./api/teams/editLFPList.js');
const setPlayerData = require('./api/teams/setPlayerData.js');

const getCasterData = require('./api/stream/getCasterData.js');
const getEventData = require('./api/stream/getEventData.js');
const getMappoolData = require('./api/stream/getMappoolData.js');
const getSocialData = require('./api/stream/getSocialData.js');
const getStreamTeam = require('./api/stream/getStreamTeam.js');
const getTeamLineUp = require('./api/stream/getTeamLineUp.js');

module.exports = { getTeamData, getTeamList, getFeedbackList, editSkillRating, editLFPList, setPlayerData, getCasterData, getEventData, getMappoolData, getSocialData, getStreamTeam, getTeamLineUp };