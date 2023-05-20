export type ConversionRule = {
    fromUnit: string;
    toUnit: string;
    factor: number;
};

export type ConversionData = {
    units: string[];
    conversions: ConversionRule[];
};