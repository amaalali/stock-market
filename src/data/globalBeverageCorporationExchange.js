export const COMMON = "COMMON";
export const PREFERRED = "PREFERRED";

const data = [
  {
    symbol: "TEA",
    type: COMMON,
    lastDividend: 0,
    parValue: 100
  },
  {
    symbol: "POP",
    type: COMMON,
    lastDividend: 8,
    parValue: 100
  },
  {
    symbol: "ALE",
    type: COMMON,
    lastDividend: 23,
    parValue: 60
  },
  {
    symbol: "GIN",
    type: PREFERRED,
    lastDividend: 8,
    fixedDividend: 2,
    parValue: 100
  },
  {
    symbol: "JOE",
    type: COMMON,
    lastDividend: 13,
    parValue: 250
  }
];

export default data;
