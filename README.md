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

### Exposing values as only strings from the store

Since all calculations are done in the reducer, the decision was made to expose numeric values (MathJS numeric types) as strings. This forces us to ensure that all computation logic are removed from React Components which will only have rendering logic.

### MathJS for computations

This library provides provides more robust data types or computation, in this case we make use of their BigNumber data type (based on decimal.js). This

### Normalization of stocksSummaries and globalBeverageCorporationExchange

compare to normalizr

## Future improvements
