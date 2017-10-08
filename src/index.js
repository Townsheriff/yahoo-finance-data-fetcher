'use strict';

const debug = require('debug');
const log = debug('app::finance::index');

const fetchCrumbToken = require('./fetch-session-params');
const RequestParamsStream = require('./streams/request-params-stream');
const FetchFinanceDataStream = require('./streams/fetch-finance-data-stream');
const ExportFinanceDataStream = require('./streams/export-finance-data-stream');

module.exports = tickers => {
  fetchCrumbToken().then(sessionParams => {
    log(sessionParams);

    const reqParamsStream = new RequestParamsStream({
      objectMode: true,
      periodFrom: 1200760039,
      periodTo: 1505458439,
      crumbToken: sessionParams.crumbToken,
      cookie: sessionParams.cookie
    });

    const fetchFinanceDataStream = new FetchFinanceDataStream({
      objectMode: true
    });

    const exportFinanceDataStream = new ExportFinanceDataStream({
      objectMode: true,
      outDir: 'out'
    });

    reqParamsStream.write(tickers);

    reqParamsStream
      .pipe(fetchFinanceDataStream)
      .pipe(exportFinanceDataStream);

  }).catch(error => {
    log(error.message, error);
  });
};
