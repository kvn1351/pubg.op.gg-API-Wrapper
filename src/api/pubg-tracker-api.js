const queryString = require('query-string');
const Profile = require('./profile-object');
const fetchID = require('../util/fetchid')

class PubgTrackerAPI {

  getProfileByID(playerid, season, server, queuesize, mode) {
    const uri = `https://pubg.op.gg/api/users/${playerid}/ranked-stats?season=${season}&server=${server}&queue_size=${queuesize}&mode=${mode}`;
    return this.handleCache(uri)
      .then((content) => new Profile(content));
  }

  getProfileByNickname(playername, season, server, queuesize, mode) {
    return fetchID(playername)
      .then((playerid) => {
        const uri = `https://pubg.op.gg/api/users/${playerid}/ranked-stats?season=${season}&server=${server}&queue_size=${queuesize}&mode=${mode}`;
        return this.handleCache(uri)
      })
      .then((content) => new Profile(content));
  }
}

module.exports = PubgTrackerAPI;