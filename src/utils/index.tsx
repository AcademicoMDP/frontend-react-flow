const capitalize = (s: string) => {
  return s.slice(0, 1).toUpperCase() + s.slice(1, s.length);
};

const roundOneDecimal = (n: number) => {
  return Math.round(n * 10) / 10;
};

export {capitalize, roundOneDecimal};
