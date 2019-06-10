# Simple Stock Market

## Running and testing

- Run app using

  `yarn start`

  and visit port displayed in terminal.

- Run test using

  `yarn test`

## Design decisions

### Testing

Testing framework - Jest. Easy to use and very good cli.
Framework testing - `react-testing-library` (now hosted at `@testing-library/react`) and `user-event`. This library provides testing utilities that promote more robust test, which are closer to integration tests and focus on testing components in a manner that is closer to how a user views and interacts with the an app and discourages testing implementation details.

### Calculations for stocksSummaries

To avoid having to recompute values using all the trades for each stock on a new trade being added, intermediate calculations for _Geometric Mean_, andd _Volume Weighted Stock Price_ are cached in the store (eg: previousPriceProduct, previousGeometricMeanRoot, etc). This should make calculation of these values of order constant time. (_Note_: see considerations of this in the section below)

**Limitation** - since the values are computed using cached values and not computed on the full data set each time, adding functionality like revoking/removing a trade with make updating the stock summary non-trivial as compared to doing naive recalculation each time. In this case, since trades are something that are unlikely to be revoked/removed this may be an acceptable compromise.

### MathJS for computations

This library provides provides more robust data types or computation, in this case we make use of their BigNumber data type (based on decimal.js).

### Values stored as BigNumber in store but exposed as strings

- Values are stored as BigNumbers in the store and only when we expose those values do we choose the level of precision that we wish to display. This is done with this helper that is configurable, but with a sensable :https://github.com/amaalali/stock-market/blob/master/src/redux/store.js#L45-L47 which is used here: https://github.com/amaalali/stock-market/blob/master/src/redux/store.js#L49 and https://github.com/amaalali/stock-market/blob/master/src/redux/store.js#L64-L67.

- Since all calculations are done in the reducer, the decision was made to expose numeric values (MathJS numeric types) as strings. This forces us to ensure that all computation logic are removed from React Components which will only have rendering logic.


### Normalization of stocksSummaries and globalBeverageCorporationExchange

The size of `stocksSummaries` and `globalBeverageCorporationExchange` (https://github.com/amaalali/stock-market/blob/master/src/redux/store.js#L16-L21) grows with each new unique trade and for each new stock for which we have detail exchange data. To ensure that this scales as theses data sets grows (see below) and it makes updating the objects easier.

(`Array.prototype.find` and `Array.prototype.filter` will scale with `O(n)` vs `O(1)` see https://stackoverflow.com/a/38445470 for a discussion).

## Future improvements

- In the store, there is a field for `stockTradeIndex`. This was initially intended to as a way to split each trade by the stock symbol, but this functionally wasn't needed after all. So if a new trade for `XYZ` was recorded then the trade would be added to `tradesChronology` but also to `stockTradeIndex["XYZ"]` (see below). This would make it faster to perform computations on subsets of the trade data for a particular stock as we would not need to partition the full list of trades by symbol.

Eg

```
  {
    tradesChronology : [
      { symbol: "XYZ", price: 1, quantity: 1, timestamp: Date}, // added here
      ... <older trades for all stock> ...
    ],
    stockTradeIndex : {
      "XYZ": [
        { symbol: "XYZ", price: 1, quantity: 1, timestamp: Date}, // also added here
        ... <older trades for "XYZ" only> ...
      ]
    },
    ...
  }
```
