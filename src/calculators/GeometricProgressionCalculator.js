import maths from "mathjs";

export default function GeometricProgressionCalculator(
  price,
  previousPriceProduct,
  previousGeometricMeanRoot
) {
  const cachedGeometricMeanRoot = previousGeometricMeanRoot + 1;
  const cachedPriceProduct = maths.multiply(
    previousPriceProduct,
    maths.bignumber(price)
  );
  const geometricMean = maths.nthRoot(
    cachedPriceProduct,
    cachedGeometricMeanRoot
  );

  return {
    cachedGeometricMeanRoot,
    cachedPriceProduct,
    geometricMean
  };
}
