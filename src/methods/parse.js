import JsonPluginError from '../Error';

export default function parse (sourcepath, data) {

    return new Promise((resolve, reject) => {
        try {
            var json = JSON.parse(data);

            resolve(json);

        } catch (error) {

            return reject(
                new JsonPluginError({
                    code: JsonPluginError.CODES.INVALID_JSON,
                    message: '@0devs/config-from-json: invalid json in %sourcepath%',
                    data: {
                        sourcepath: sourcepath
                    },
                })
            );

        }
    });
}
