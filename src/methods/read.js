import fs from 'fs';

import JsonPluginError from '../Error';

export default function read (sourcepath) {
    return new Promise((resolve, reject) => {

        fs.readFile(sourcepath, function (error, data) {

            if (error) {

                return reject(
                    new JsonPluginError({
                        code: JsonPluginError.CODES.CANT_READ_SOURCE,
                        message: '@0devs/config-from-json: cant read source = %sourcepath%',
                        data: {
                            sourcepath: sourcepath
                        },
                    })
                );
            }

            resolve(data);
        });

    });
}
