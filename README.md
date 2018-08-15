# @0devs/config-from-json

[@0devs/onfig](https://github.com/0devs/node-config) plugin for node.js, get config from json files

## install

```
npm install @0devs/config-from-json
```

## usage

```js
var Config = require('@0devs/config');

var jsonPlugin = require('@0devs/config-from-json');

var config = new Config();

config
    .use(jsonPlugin)
    .from('/configs/config.json', '.')
    .from('/configs/api.json', 'api')
    .from('/configs/db.json', 'db')
    .init()
    .then(() => {
        console.log(config.get('api.test')));
    })
    .catch((error) => {
        logger.error(error);
    });

```

# LICENSE

MIT
