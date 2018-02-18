const cheerio = require('cheerio');
const rp  =  require('request-promise-native');

let fetchID = async function (playername) {
    const options = {
        uri: encodeURI(`https://pubg.op.gg/user/${playername}`),
        forever: true,
        resolveWithFullResponse: true
    }
    const htmldump = await rp(options)
    const $  =  cheerio.load(htmldump.body)
    return $('[data-user_id]').attr()['data-user_id']
};

module.exports = fetchID;