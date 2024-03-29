"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const distanceConverter_1 = require("./1_ConversionData/distanceConverter");
const sortDataByRules_1 = require("./2_SortedDataByRules/sortDataByRules");
const path = require("path");
const Asteroid_1 = require("./3_Asteroids/Asteroid");
// TASK 1
const filePath = path.join(__dirname, '../conversionData.json');
const conversionData = (0, distanceConverter_1.loadConversionData)(filePath);
const convertedDistance = (0, distanceConverter_1.convertDistance)({ unit: 'm', value: 0.5 }, 'ft', conversionData);
console.log(convertedDistance);
//TASK 2
const firstData = [
    { name: "John", email: "john2@mail.com" },
    { name: "John", email: "john1@mail.com" },
    { name: "Jane", email: "jane@mail.com" }
];
const secondData = [
    { "user": "mike@mail.com", "rating": 20, "disabled": false },
    { "user": "greg@mail.com", "rating": 14, "disabled": false },
    { "user": "john@mail.com", "rating": 25, "disabled": true },
];
const firstCondition = {
    include: [{ "name": "John" }],
    sortBy: ["email"]
};
const secondCondition = {
    exclude: [{ "disabled": true }],
    sortBy: ["rating"]
};
const firstResult = (0, sortDataByRules_1.process_data)(firstData, firstCondition);
const secondResult = (0, sortDataByRules_1.process_data)(secondData, secondCondition);
console.log('First: ', firstResult);
console.log('Second: ', secondResult);
//3 task
const result = (0, Asteroid_1.findAsteroid)();
const firstProbe = result.probes.coordinates[0];
const lastProbe = result.probes.coordinates[result.probes.coordinates.length - 1];
const modifiedResult = Object.assign(Object.assign({}, result), { probes: Object.assign(Object.assign({}, result.probes), { coordinates: [firstProbe, lastProbe] }) });
console.log(JSON.stringify({ result: modifiedResult }, null, 2));
