import {convertDistance, loadConversionData} from "./1_ConversionData/distanceConverter";
import {process_data} from './2_SortedDataByRules/sortDataByRules'
import {Condition, Result, DataItem} from './2_SortedDataByRules/types'
import * as path from 'path';

// TASK 1
const filePath = path.join(__dirname, '../conversionData.json');
const conversionData = loadConversionData(filePath);
const convertedDistance = convertDistance({ unit: 'm', value: 0.5 }, 'ft', conversionData);
console.log(convertedDistance);

//TASK 2
const firstData: DataItem[] = [
    {name: "John", email: "john2@mail.com"},
    {name: "John", email: "john1@mail.com"},
    {name: "Jane", email: "jane@mail.com"}
]

const secondData: DataItem[] = [
    {"user": "mike@mail.com", "rating": 20, "disabled": false},
    {"user": "greg@mail.com", "rating": 14, "disabled": false},
    {"user": "john@mail.com", "rating": 25, "disabled": true},

]

const firstCondition: Condition = {
    include: [{"name": "John"}],
    sortBy: ["email"]
};

const secondCondition: Condition = {
    exclude: [{"disabled": true}],
    sortBy: ["rating"]
}

const firstResult: Result = process_data(firstData, firstCondition);
const secondResult: Result = process_data(secondData, secondCondition);
console.log('First: ', firstResult);
console.log('Second: ', secondResult);