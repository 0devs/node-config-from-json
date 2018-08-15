var t = require('tap');
var proxyquire = require('proxyquire');

var srcPath = '../../package';

t.test('should require ./JsonPlugin', function (t) {

    var Plugin = proxyquire(srcPath + '/index', {
        './JsonPlugin': {
            default: function () {
                t.end();
            }
        }
    });

    new Plugin();
});
