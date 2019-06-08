import maths from "mathjs";

export default function PERatioCalculator(price, dividend) {
  if (dividend) {
    return maths.divide(maths.bignumber(price), maths.bignumber(dividend));
  } else {
    return undefined;
  }
}
