/**
 * @module getLangCodeFromUser
 * @file getLangCodeFromUser.js
 * @description Gets the language code from the user. This functions takes an interaction object as a parameter.
 * Interactions are slash commands, button clicks, etc. All you need to do, is to pass the interaction object
 * AS OF NOW, THIS FUNCTION ONLY RETURNS "de" OR "en" AS A STRING. OTHER LANGUAGES ARE NOT NEEDED YET.
 * @param {Object} interaction 
 * @returns {String} Returns the language code of the user (de,en)
 */
const getLangCodeFromUser = (interaction) => {

  const roleArray = [];
  const roles = interaction.member.roles.cache;

  roles.forEach(role => {

    roleArray.push((role.name).replace(/@/g, ''));

  });

  if (roleArray.includes('German')) {

    return 'de';

  } else if (roleArray.includes('Englisc')) {

    return 'de';

  } else {

    return 'en';

  }
};

module.exports = getLangCodeFromUser;