# usage planning


```js
var Config = require('@0devs/config');


var config = new Config();

config
    .use(require('@0devs/config-from-json'))
    .init()
    .then(() => {
        config.get('some.config.param');
    })
    .catch((error) => {
        //
    });

```
