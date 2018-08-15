var Config = require('@0devs/config').default;

var jsonPlugin = require('../package/JsonPlugin').default;

// var logger = require('log4js-nested').getLogger();

var config = new Config();

config
    .use(jsonPlugin)
    .from(__dirname + '/configs/config.json', '.')
    .from(__dirname + '/configs/api.json', 'api')
    .from(__dirname + '/configs/db.json', 'db')
    .init()
    .then(() => {
        console.log(config.isValid());
        console.log(config.get('api.test'));
    })
    .catch((error) => {
        console.log(error);
    });
