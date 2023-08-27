<!-- Create a guide on how to use each of the 5 functions and that you need an .env file -->

## Requirements

- Node.js v16.6.0 or higher
- You need to have an .env file in the root directory of your project with the following variables:

```

SEMPER_API_URL= <The URL of the Semper API>
SEMPER_API_ACCESS_TOKEN= <The access token of the Semper API>

```

## Who is this for?

This module is for everyone who wants to use the Semper API in their own projects. It is especially useful for people who want to create their own Discord bots.
This API allows you to create your own commands and functions to interact with the Semper API.
You can also use this module to create your own website or application.

## How to install

```bash

npm install semper-api-module

```

## How to use the functions

### 1. getTeamData(guildId, teamId)

This function returns the data of a team.

```js

const { getTeamData } = require('semper-api-module');

const teamData = await getTeamData('guildId', 'teamId');

console.log(teamData);

```

### 2. getTeamList(guildId, start, end)

This function returns a list of all teams including their players.

```js

const { getTeamList } = require('semper-api-module');

// This will return the first 10 teams
const teamList = await getTeamList('guildId', 0, 10);

console.log(teamList);

```

### 3. getFeedbackList(guildId)

This functions returns a list of all teams which did not submit feedback in the last 7 days.

```js

const { getFeedbackList } = require('semper-api-module');

const feedbackList = await getFeedbackList('guildId');

console.log(feedbackList);

```

### 4. editSkillRating(guildId, teamId, skillRating)

This function edits the skill rating of a team.

```js

const { editSkillRating } = require('semper-api-module');

// This funtions returns an object as a response
// { status: Boolean, image: String, rating: Number, ratingEmoji: String }
const response = await editSkillRating('guildId', 'teamId', 100);

if (response.status) return console.log('Success!');

```

### 5. editLFPList(guildId, teamId, roleId)

This function edits the Looking-For-Player List and either puts or removes a team role slot from it.

```js

const { editLFPList } = require('semper-api-module');

// This funtions returns an object as a response
// { status: Boolean, isSearching: Boolean }
// isSearching is true if the team is now looking for players for that slot/role
const response = await editLFPList('guildId', 'teamId', 'roleId');

if (response.status) return console.log('Success!');

```

### 6. setPlayerData(playerRoles, playerName, guildId, playerId)

This function sets the player data of a player who is in a team.


```js

const { setPlayerData } = require('semper-api-module');

const roleArray = [];
const guild = await client.guilds.fetch(guildId);
const member = await guild.members.fetch(playerDiscordID);
const memberRoles = member.roles.cache;
    
memberRoles.forEach(role => {
  
  // Discord returns the role name with an @ in front of it, so we need to remove it
  roleArray.push((role.name).replace(/@/g, ''));
  
});

// This funtions returns a boolean as a response
const response = await setPlayerData(roleArray, 'playerName', 'guildId', 'playerId');

if (response) return console.log('Success!');

```

### 7. getLangCodeFromUser(interaction)

This function returns the language code of a user (en, de)

```js

const { getLangCodeFromUser } = require('semper-api-module');

// Interactions are only available since Discord.js v13
// For example, slash commands, button clicks, etc.
const langCode = await getLangCodeFromUser(interaction);

console.log(langCode);

```

## Who made this?

This module was made by [Marwin](https://github.com/xTheFreeZe).

I am a developer for the Semper Discord bot and I am also a member of the Semper development team.
I created this module to make it easier for people to use the Semper API.

This module is open source and everyone can use it for free, however, I would appreciate it if you would give me credit if you use it in your project.
Furthermore, this module was mainly made for other semper developers, but everyone is free to use it.
Keep in mind that you need to have an access token to use the Semper API.

## Thank you for using this module!

```
Written by Marwin on 10/06/2023

```