import {Point, Probe, Result} from './type'

function generateAsteroidLocation(): Point {
    return {
        x: getRandomCoordinate(),
        y: getRandomCoordinate(),
        z: getRandomCoordinate(),
    };
}
function generateProbeCoordinates(): Point {
    return {
        x: getRandomCoordinate(),
        y: getRandomCoordinate(),
        z: getRandomCoordinate(),
    };
}
function getDistance(point1: Point, point2: Point): number {
    return Math.sqrt(
        Math.pow(point2.x - point1.x, 2) +
        Math.pow(point2.y - point1.y, 2) +
        Math.pow(point2.z - point1.z, 2)
    );
}
function getRandomCoordinate(): number {
    return Math.floor(Math.random() * 101);
}
function findAsteroid(): Result {
    const asteroidLocation = generateAsteroidLocation();
    const probes: Probe[] = [];

    for (let i = 0; i < 1000; i++) {
        const probeCoordinates = generateProbeCoordinates();
        const distance = getDistance(probeCoordinates, asteroidLocation);
        probes.push({
            coordinates: probeCoordinates,
            distance: distance,
        });
    }

    probes.sort((a, b) => a.distance - b.distance);

    return {
        location: asteroidLocation,
        probes: {
            count: probes.length,
            coordinates: probes.map((probe) => probe.coordinates),
        },
    };
}

export {findAsteroid}

