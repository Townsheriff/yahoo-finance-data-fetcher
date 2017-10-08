'use strict';

const request = require('request');
const debug = require('debug');

const log = debug('app::finance::crumb');

module.exports = () => {
  const regex = /"CrumbStore":[\s]?{"crumb":[\s]?"(\w+)"/;
  const options = {
    method: 'GET',
    url: 'https://finance.yahoo.com/lookup'
  };

  log(`Making request to ${options.url}, for crumbToken`);
  return new Promise(resolve => {
    return request(options, ((error, response) => {
      log(`Parsing response for crumbToken`);

      if (!response.body.match(regex) || response.body.match(regex).length !== 2) {
        return resolve(module.exports());
      }

      resolve({
        crumbToken: response.body.match(regex)[1],
        cookie: response.headers['set-cookie'][0]
      });
    }));
  }).then(sessionParams => {
    log(`session Params:`, sessionParams);
    return sessionParams;
  });
};
