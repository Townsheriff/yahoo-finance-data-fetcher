'use strict';

const debug = require('debug');
const Stream = require('stream');
const fs = require('fs');
const path = require('path');

const log = debug('app::finance::export-data');

class ExportFinanceDataStream extends Stream.Transform {

  constructor(options) {
    super(options);
    this.outDir = options.outDir;
  }

  _transform(params, encoding, done) {
    const outPath = path.join(this.outDir, `${params.ticker}.csv`);
    log(`Starting exporting ticker ${params.ticker} to dir ${outPath}`);
    fs.writeFile(outPath, params.content, () => {
      log(`Exporting finished for ticker ${params.ticker}`);
      done();
    });
  }
}

module.exports = ExportFinanceDataStream;

