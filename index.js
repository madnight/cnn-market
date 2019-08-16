const scrapeIt = require("scrape-it")
const { map } = require("lodash/fp")

const url = "http://money.cnn.com/data/markets/"
const points = i => name => "li:nth-child(" + i + ") span.ticker-" + name
const [dow, nasdaq, sp500] = map(points, [1,2,3])
const nth = i => "div:nth-child(" + i + ") "
const col = "div.column.double-column > div.column.left-column > "
const london = i => col + nth(3) + "> div > " + nth(2) + "> " + nth(1)
    + "> a > span.world-market-" + i
const germany = i => nth(3) + "> div > " + nth(2) + "> " + nth(2)
    + "> a > span.world-market-" + i
const japan = i => nth(1) + nth(1) + nth(1) + "span.world-market-" + i
const yield10 = i => col + nth(2)
    + "> ul > li:nth-child(1) > a > span.column.quote-" + i
const keyStats = (n, i) => col + nth(2) + "> ul > li:nth-child(" + i
    + ") > a > span.column.quote-" + n

const selector = {
    Dow            : dow      ('points'),
    DowChgPcnt     : dow      ('name-change'),
    DowChg         : dow      ('points-change'),
    Nasdaq         : nasdaq   ('points'),
    NasdaqChgPcnt  : nasdaq   ('name-change'),
    NasdaqChg      : nasdaq   ('points-change'),
    SP500          : sp500    ('points'),
    SP500ChgPcnt   : sp500    ('name-change'),
    SP500Chg       : sp500    ('points-change'),
    Japan          : japan    ('change-last'),
    JapanChgPcnt   : japan    ('change-percent'),
    JapanChg       : japan    ('change'),
    London         : london   ('change-last'),
    LondonChgPcnt  : london   ('change-percent'),
    LondonChg      : london   ('change'),
    Germany        : germany  ('change-last'),
    GermanyChgPcnt : germany  ('change-percent'),
    GermanyChg     : germany  ('change'),
    Yield10Y       : keyStats ('col', 1),
    Yield10YChg    : keyStats ('change', 1),
    Oil            : keyStats ('col', 2),
    OilChg         : keyStats ('change', 2),
    Gold           : keyStats ('col', 5),
    GoldChg        : keyStats ('change', 5)
}

const cnnMarket = async () => {
    const { data, _ } = (await (scrapeIt(url, selector)))
    return data
}

module.exports = {
    cnnMarket
}
