import maths from "mathjs";

export default function GeometricProgressionCalculator(
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
