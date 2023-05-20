export interface Point {
    x: number;
    y: number;
    z: number;
}

export interface Probe {
    coordinates: Point;
    distance: number;
}

export interface Result {
    location: Point;
    probes: {
        count: number;
        coordinates: Point[];
    };
}