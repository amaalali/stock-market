import maths from "mathjs";

export default function VolumeWeightedStockPriceCalculator(
  lastTradedPrice,
  lastTradedQuantity,
  previousSumTradedPriceQuantity,
  previousSumQuantity
) {
  const productOfLastPriceQuantity = maths.multiply(
    maths.bignumber(lastTradedQuantity),
    maths.bignumber(lastTradedPrice)
  );

  const newSumTradedPriceQuantity = maths.add(
    previousSumTradedPriceQuantity,
    productOfLastPriceQuantity
  );

  const newSumQuantity = maths.add(
    previousSumQuantity,
    maths.bignumber(lastTradedQuantity)
  );

  const newVolumeWeightedStockPrice = maths.divide(
    newSumTradedPriceQuantity,
    newSumQuantity
  );

  return {
    newVolumeWeightedStockPrice,
    newSumTradedPriceQuantity,
    newSumQuantity
  };
}
