const generateRandomSeed = () => {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0].toString(16);
}

export const getRandomInt = (min, max) => {
    const seed = generateRandomSeed();
    const randomGenerator = new Math.seedrandom(seed);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomGenerator() * (max - min + 1)) + min;
}