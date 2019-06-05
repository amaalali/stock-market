import maths from "mathjs";

export function newGeometricProgressionCalculator(
  price,
  previousPriceProduct,
  previousGeometricMeanRoot
) {
  const newGeometricMeanRoot = previousGeometricMeanRoot + 1;
  const newPriceProduct = maths.multiply(
    previousPriceProduct,
    maths.bignumber(price)
  );
  const newGeometricMean = maths.nthRoot(newPriceProduct, newGeometricMeanRoot);

  return {
    newGeometricMeanRoot,
    newPriceProduct,
    newGeometricMean
  };
}

export function newVolumeWeightedStockPriceCalculator(
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
