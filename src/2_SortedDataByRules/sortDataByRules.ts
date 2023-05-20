import {Condition, Result, DataItem} from './types'
function process(data: DataItem[], condition: Condition): Result {
    const filter = applyCondition(data, condition);
    const sortedData = sort(filter, condition.sortBy || []);
    return { result: sortedData };
}

function applyCondition(data: DataItem[], condition: Condition): DataItem[] {
    const include = condition.include || [];
    const exclude = condition.exclude || [];
    const items: DataItem[] = [];
    for (const item of data) {
        if (checkIncludeRules(item, include) && !checkExcludeRules(item, exclude)) {
            items.push(item);
        }
    }
    return items;
}

function checkIncludeRules(item: DataItem, includeRules: DataItem[]): boolean {
    if(includeRules.length <= 0 ) {
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
function checkExcludeRules(item: DataItem, excludeRule: DataItem[]): boolean {
    if(excludeRule.length <= 0) {
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
function sort(data: DataItem[], sortBy: string[]): DataItem[] {
    return data.sort((a, b) => {
        for (const key of sortBy) {
            if (a[key] < b[key]) {
                return -1;
            } else if (a[key] > b[key]) {
                return 1;
            }
        }
        return 0;
    });
}

export {process}
