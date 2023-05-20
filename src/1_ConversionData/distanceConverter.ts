import * as fs from 'fs';
import exp = require("constants");
import * as path from 'path';
import {ConversionData, ConversionRule} from './types'

const loadConversionData = (filePath: string): ConversionData => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const jsonData = JSON.parse(fileContent);
    return jsonData as ConversionData;
};

const convertDistance = (
    distance: { unit: string; value: number },
    convertTo: string,
    conversionData: ConversionData
): { unit: string; value: number } => {
    const { unit, value } = distance;

    if (unit === convertTo) {
        return { unit, value };
    }

    const conversionRule = conversionData.conversions.find(
        (rule) => rule.fromUnit === unit && rule.toUnit === convertTo
    );

    if (conversionRule) {
        const convertedValue = value * conversionRule.factor;
        return { unit: convertTo, value: roundToTwoDecimals(convertedValue) };
    }

    throw new Error(`Unsupported conversion from ${unit} to ${convertTo}.`);
};

const roundToTwoDecimals = (value: number): number => {
    return Math.round(value * 100) / 100;
};

export { convertDistance, loadConversionData };
