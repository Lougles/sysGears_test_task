"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConversionData = exports.convertDistance = void 0;
const fs = require("fs");
const loadConversionData = (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const jsonData = JSON.parse(fileContent);
    return jsonData;
};
exports.loadConversionData = loadConversionData;
const convertDistance = (distance, convertTo, conversionData) => {
    const { unit, value } = distance;
    if (unit === convertTo) {
        return { unit, value };
    }
    const conversionRule = conversionData.conversions.find((rule) => rule.fromUnit === unit && rule.toUnit === convertTo);
    if (conversionRule) {
        const convertedValue = value * conversionRule.factor;
        return { unit: convertTo, value: roundToTwoDecimals(convertedValue) };
    }
    throw new Error(`Unsupported conversion from ${unit} to ${convertTo}.`);
};
exports.convertDistance = convertDistance;
const roundToTwoDecimals = (value) => {
    return Math.round(value * 100) / 100;
};
