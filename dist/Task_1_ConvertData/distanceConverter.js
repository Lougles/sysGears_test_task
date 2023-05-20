"use strict";
// distanceConverter.ts
Object.defineProperty(exports, "__esModule", { value: true });
// Метрична система
const metersToKilometers = (meters) => {
    return meters / 1000;
};
const kilometersToMeters = (kilometers) => {
    return kilometers * 1000;
};
// Імперська система
const milesToYards = (miles) => {
    return miles * 1760;
};
const yardsToMiles = (yards) => {
    return yards / 1760;
};
const feetToInches = (feet) => {
    return feet * 12;
};
const inchesToFeet = (inches) => {
    return inches / 12;
};
// Головна функція конвертації
const convertDistance = (value, fromUnit, toUnit) => {
    // Метрична система
    if (fromUnit === "m" && toUnit === "km") {
        return metersToKilometers(value);
    }
    if (fromUnit === "km" && toUnit === "m") {
        return kilometersToMeters(value);
    }
    // Імперська система
    if (fromUnit === "mi" && toUnit === "yd") {
        return milesToYards(value);
    }
    if (fromUnit === "yd" && toUnit === "mi") {
        return yardsToMiles(value);
    }
    if (fromUnit === "ft" && toUnit === "in") {
        return feetToInches(value);
    }
    if (fromUnit === "in" && toUnit === "ft") {
        return inchesToFeet(value);
    }
    // Не підтримувана одиниця вимірювання
    throw new Error("Unsupported unit.");
};
// Приклади використання
// console.log(convertDistance(1000, "m", "km")); // 1
// console.log(convertDistance(2.5, "km", "m")); // 2500
// console.log(convertDistance(3, "mi", "yd")); // 5280
// console.log(convertDistance(500, "yd", "mi")); // 0.283
// console.log(convertDistance(10, "ft", "in")); // 120
// console.log(convertDistance(24, "in", "ft")); // 2
exports.default = convertDistance;
