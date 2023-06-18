const getTeamData = require('./api/teams/getTeamData.js');
const getTeamList = require('./api/teams/getTeamList.js');
const getFeedbackList = require('./api/teams/getFeedbackList.js');
const editSkillRating = require('./api/teams/editSkillRating.js');
const editLFPList = require('./api/teams/editLFPList.js');
const setPlayerData = require('./api/teams/setPlayerData.js');

module.exports = { getTeamData, getTeamList, getFeedbackList, editSkillRating, editLFPList, setPlayerData };