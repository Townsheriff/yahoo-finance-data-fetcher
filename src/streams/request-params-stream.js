'use strict';

const debug = require('debug');
const Stream = require('stream');
const log = debug('app::finance::request-params-stream');

class StreamRequestParams extends Stream.Transform {

  constructor(options) {
    super(options);

    this.crumbToken = options.crumbToken;
    this.periodFrom = options.periodFrom;
    this.periodTo = options.periodTo;
    this.cookie = options.cookie;
    log(`Created with periodFrom: ${this.periodFrom} and periodTo: ${this.periodTo}`);
  }

  _transform(tickers, enc, next) {
    log(`Received tickers: ${tickers}`);
    tickers.forEach(ticker => {
      this.push({
        ticker: ticker,
        from: this.periodFrom,
        to: this.periodTo,
        crumbToken: this.crumbToken,
        cookie: this.cookie
      });
    });

    log(`Finished pushing request configurations...`);
    next();
  }
}

module.exports = StreamRequestParams;
