"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAsteroid = void 0;
function generateAsteroidLocation() {
    const location = {
        x: getRandomCoordinate(),
        y: getRandomCoordinate(),
        z: getRandomCoordinate(),
    };
    return location;
}
function generateProbeCoordinates() {
    const coordinates = {
        x: getRandomCoordinate(),
        y: getRandomCoordinate(),
        z: getRandomCoordinate(),
    };
    return coordinates;
}
function getDistance(point1, point2) {
    const distance = Math.sqrt(Math.pow(point2.x - point1.x, 2) +
        Math.pow(point2.y - point1.y, 2) +
        Math.pow(point2.z - point1.z, 2));
    return distance;
}
function getRandomCoordinate() {
    return Math.floor(Math.random() * 101);
}
function findAsteroid() {
    const asteroidLocation = generateAsteroidLocation();
    const probes = [];
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
exports.findAsteroid = findAsteroid;
