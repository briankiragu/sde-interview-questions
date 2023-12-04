"use strict";
// Examples:
// 1. Given givenTime = "2?:?8", and referenceTime = "23:57" the function should return "23:58".
// 2. Given givenTime = "?8:4?" and referenceTime = "09:00", the function should return "08:49".
// 3. Given givenTime = "??:??" and referenceTime = "12:00", the function should return "12:00".
// 4. Given givenTime = "06:34" and referenceTime = "12:00", the function should return "06:34"
const getClosestTime = (referenceTime, givenTime) => {
    const referenceTimes = referenceTime.split(':');
    const givenTimes = givenTime.split(':');
    let h1 = [...givenTimes[0].split('')[0]];
    let h2 = [...givenTimes[0].split('')[1]];
    let m1 = [...givenTimes[1].split('')[0]];
    let m2 = [...givenTimes[1].split('')[1]];
    const probabilities = {};
    if (h1.includes('?')) {
        h1 = ['0', '1', '2'];
    }
    if (h2.includes('?')) {
        h2 = ['0', '1', '2', '3'];
    }
    if (m1.includes('?')) {
        m1 = ['0', '1', '2', '3', '4', '5'];
    }
    if (m2.includes('?')) {
        m2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    }
    h1.forEach((i) => {
        h2.forEach((j) => {
            m1.forEach((k) => {
                m2.forEach((l) => {
                    probabilities[`${i}${j}:${k}${l}`] =
                        parseInt(`${i}${j}`, 10) * 60 + parseInt(`${k}${l}`, 10);
                });
            });
        });
    });
    Object.entries(probabilities).forEach(([k, v]) => {
        probabilities[k] = Math.abs(parseInt(referenceTimes[0], 10) * 60 + parseInt(referenceTimes[1], 10) - v);
    });
    const minDifferenceValue = Math.min(...Object.values(probabilities));
    return Object.keys(probabilities).find((key) => probabilities[key] === minDifferenceValue);
};
const results = [
    getClosestTime('23:57', '2?:?8'),
    getClosestTime('09:00', '?8:4?'),
    getClosestTime('12:00', '??:??'),
    getClosestTime('12:00', '06:34'),
];
console.log(results);
//# sourceMappingURL=mock-interview.js.map