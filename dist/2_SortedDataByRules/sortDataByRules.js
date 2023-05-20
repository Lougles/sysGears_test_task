"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.process_data = void 0;
function process_data(data, condition) {
    const filter = applyCondition(data, condition);
    const sortedData = sort_data(filter, condition.sortBy || []);
    return { result: sortedData };
}
exports.process_data = process_data;
function applyCondition(data, condition) {
    const include = condition.include || [];
    const exclude = condition.exclude || [];
    const items = [];
    for (const item of data) {
        if (checkIncludeRules(item, include) && !checkExcludeRules(item, exclude)) {
            items.push(item);
        }
    }
    return items;
}
function checkIncludeRules(item, includeRules) {
    if (includeRules.length <= 0) {
        return true;
    }
    for (const rule of includeRules) {
        const keys = Object.keys(rule);
        let match = true;
        for (const key of keys) {
            if (item[key] !== rule[key]) {
                match = false;
                break;
            }
        }
        if (match) {
            return true;
        }
    }
    return false;
}
function checkExcludeRules(item, excludeRule) {
    if (excludeRule.length <= 0) {
        return false;
    }
    for (const rule of excludeRule) {
        const keys = Object.keys(rule);
        let match = false;
        for (const key of keys) {
            if (item[key] !== rule[key]) {
                match = true;
                break;
            }
        }
        if (match) {
            return false;
        }
    }
    return true;
}
function sort_data(data, sortBy) {
    return data.sort((a, b) => {
        for (const key of sortBy) {
            if (a[key] < b[key]) {
                return -1;
            }
            else if (a[key] > b[key]) {
                return 1;
            }
        }
        return 0;
    });
}
