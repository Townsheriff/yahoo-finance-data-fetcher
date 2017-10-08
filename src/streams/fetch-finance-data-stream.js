'use strict';

const debug = require('debug');
const Stream = require('stream');
const request = require('request');
const log = debug('app::finance::fetch-data');
const fs = require('fs');

class FetchFinanceDataStream extends Stream.Transform {

  constructor(options) {
    super(options);
  }

  _transform(params, encoding, done) {
    const options = {
      url: `https://query1.finance.yahoo.com/v7/finance/download/${params.ticker}`,
      headers: {
        cookie: params.cookie,
      },
      cookie: params.cookie,
      qs:
        {
          period1: String(params.from),
          period2: String(params.to),
          interval: '1d',
          events: 'history',
          crumb: params.crumbToken
        }
    };

    log(`Making request for ${options.url}`, options);

    new Promise((resolve, reject) => {
      request(options, (error, response) => {
        error ? reject(error) : resolve(response);
      });
    }).then(response => {
      log(`Request was successful ${options.url}`);
      this.push(Object.assign(params, {content: response.body}));
      done();
    }).catch(error => {
      log(`Request was finished with error for uri ${options.uri}, error ${error.message}`);
      log(options);
    });
  }
}

module.exports = FetchFinanceDataStream;

