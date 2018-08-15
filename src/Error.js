import Zerror from '@0devs/error';

class JsonPluginError extends Zerror {}

JsonPluginError.CODES = {
    INVALID_LOGGER: '@0devs/config-from-json: no logger.debug method passed in constructor',
    NOT_EXISTS: '@0devs/config-from-json: %sourcepath% not exists',
    INVALID_JSON: '@0devs/config-from-json: invalid json in %sourcepath%',
    CANT_READ_SOURCE: '@0devs/config-from-json: cant read source = %sourcepath%'
};

export default JsonPluginError;
