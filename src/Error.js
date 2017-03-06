var JsonPluginError = require('maf-error').create('JsonPluginError', {
    INVALID_LOGGER: 'maf-config-from-json: no logger.debug method passed in constructor',
    NOT_EXISTS: 'maf-config-from-json: %sourcepath% not exists',
    INVALID_JSON: 'maf-config-from-json: invalid json in %sourcepath%',
    CANT_READ_FILE: 'maf-config-from-json: cant read %sourcepath%'
});

module.exports = JsonPluginError;
