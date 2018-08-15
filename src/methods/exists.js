import fs from 'fs';
import JsonPluginError from '../Error';

export default function exists (sourcepath) {
    return new Promise((resolve, reject) => {

        if (fs.existsSync(sourcepath) === false) {
            return reject(
                new JsonPluginError({
                    code: JsonPluginError.CODES.NOT_EXISTS,
                    message: '@0devs/config-from-json: %sourcepath% not exists',
                    data: {
                        sourcepath: sourcepath
                    }
                })
            );
        }

        resolve();
    });
}
