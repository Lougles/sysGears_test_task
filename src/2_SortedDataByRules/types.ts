export interface DataItem {
    [key: string]: any;
}

export interface Condition {
    include?: DataItem[];
    exclude?: DataItem[];
    sortBy?: string[];
}

export interface Result {
    result: DataItem[];
}