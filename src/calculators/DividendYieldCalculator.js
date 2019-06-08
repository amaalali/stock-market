import maths from "mathjs";

export default function DividendYieldCalculator(price, params) {
  if (Object.keys(params).length > 0) {
    const { lastDividend, fixedDividend, parValue } = params;
    const divYield = numerator =>
      maths.divide(numerator, maths.bignumber(price));

    if (fixedDividend) {
      const fixDividendBN = maths.divide(
        maths.bignumber(fixedDividend),
        maths.bignumber(100)
      );
      const parValueBN = maths.bignumber(parValue);

      const numerator = maths.multiply(fixDividendBN, parValueBN);

      return divYield(numerator);
    } else {
      const lastDividendBN = maths.bignumber(lastDividend);

      return divYield(lastDividendBN);
    }
  } else {
    return undefined;
  }
}
