'use strict';

process.env.DEBUG = 'app::finance::*';
const tickers = process.argv.splice(2);
console.log(`Fetching ticker: ${tickers}`);
require('./src')(tickers);

/*
wget --quiet \
  --method GET \
  --header 'cookie: JSESSIONID=wea55ikf5ja31v01ue57e5d2s; B=ajto6upbf7cfu&b=3&s=99; PRF=t%3DBA; ucs=lnct=1507477779&pnid=&pnct=' \
  --header 'cache-control: no-cache' \
  --output-document \
  - 'https://query1.finance.yahoo.com/v7/finance/download/CL?period1=1302780039&period2=1505458438&interval=1d&events=history&crumb=ltwvtuh7CGr'
 */

// wget --quiet \
//   --method GET \
//   --header 'cookie: B=ajto6upbf7cfu&b=3&s=99' \
//   --header 'cache-control: no-cache' \
//   --output-document \
//   - 'https://query1.finance.yahoo.com/v7/finance/download/CL?period1=1302780039&period2=1505458438&interval=1d&events=history&crumb=ltwvtuh7CGr'

// var browser = {
//   "host": "localhost:3000",
//   "connection": "keep-alive",
//   "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
//   "upgrade-insecure-requests": "1",
//   "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
//   "dnt": "1",
//   "accept-encoding": "gzip, deflate, br",
//   "accept-language": "en-US,en;q=0.8,lv;q=0.6",
//   "cookie": "Webstorm-4dfa38f1=c01bfc53-80e5-43ef-ab85-bb5f58cf28c9; _ga=GA1.1.518082292.1497173654; Webstorm-4dfa3cb0=00faeffc-1aba-4071-9a78-413d3a1332fc; olfsk=olfsk9943259943306126; hblid=7CSoVEyvgx3dUPxw3m39N0MMRE0QBrF7; Webstorm-4dfa3cb1=b2a83850-8656-472a-88a7-c8c414574994"
// };
//
// var woInterceptor = {
//   "host": "localhost:3000",
//   "connection": "keep-alive",
//   "cache-control": "no-cache",
//   "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
//   "accept": "*/*",
//   "dnt": "1",
//   "accept-encoding": "gzip, deflate, br",
//   "accept-language": "en-US,en;q=0.8,lv;q=0.6"
// }
//
// var wInterceptor = {
//   "host": "localhost:3000",
//   "connection": "keep-alive",
//   "x-postman-interceptor-id": "198dfb5f-7bd1-2392-a5fb-fde291725276",
//   "cache-control": "no-cache",
//   "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
//   "accept": "*/*",
//   "dnt": "1",
//   "accept-encoding": "gzip, deflate, br",
//   "accept-language": "en-US,en;q=0.8,lv;q=0.6",
//   "cookie": "_ga=GA1.1.518082292.1497173654; olfsk=olfsk9943259943306126; hblid=7CSoVEyvgx3dUPxw3m39N0MMRE0QBrF7"
// };