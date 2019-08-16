# cnn-market
Stock market information from CNN

# Usage

```js
const { cnnMarket } = require("cnn-market")

cnnMarket().then( data => console.log(data) )
```
Example Output:
```
{
  Dow: '25,864.63',          // Dow Jones Industrial Average
  DowChgPcnt: '+1.12%',      // Dow Jones Change in Percent
  DowChg: '+285.24',         // Dow Jones Absolute Change
  Nasdaq: '7,896.06',
  NasdaqChgPcnt: '+1.67%',
  NasdaqChg: '+129.45',
  SP500: '2,888.21',         // Standard and Poors 500
  SP500ChgPcnt: '+1.43%',
  SP500Chg: '+40.61',
  Japan: '20,418.81',        // NIKKEI 225
  JapanChgPcnt: '+0.06%',
  JapanChg: '+13.17',
  London: '7,117.15',        // FTSE 100
  LondonChgPcnt: '+0.71%',
  LondonChg: '+50.50',
  Germany: '11,562.74',      // DAX 30
  GermanyChgPcnt: '+1.31%',
  GermanyChg: '+152.04',
  Yield10Y: '1.56%',         // U.S. 10 Year Treasury Note (Bond)
  Yield10YChg: '+0.03',
  Oil: '$54.62',
  OilChg: '+0.28',
  Gold: '$1,523.50',
  GoldChg: '-0.50'
 }
```
