/**
 * getRandomInteger
 */

const getRandomInteger = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomInteger;
