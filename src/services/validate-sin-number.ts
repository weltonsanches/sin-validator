const validateSinNumber = (sinNumber: string) => {
  const arraySin = sinNumber
    .split("")
    .reduce<number[]>((arr, value) => {
      const digit = Number(value);
      if (digit || digit === 0) arr.push(digit);
      return arr;
    }, []);

  if (arraySin.length !== 9) return false;

  const total = arraySin
    .map((current, index) => index % 2 === 0 ? current : current * 2)
    .join('')
    .split('')
    .reduce((total, value) => total + Number(value), 0);

  return total % 10 === 0;
};

export default validateSinNumber;
