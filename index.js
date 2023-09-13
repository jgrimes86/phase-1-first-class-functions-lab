// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return [...drivers.slice(0, 2)];
}
// console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function(drivers) {
    return [...drivers.slice(-2)];
}
// console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// console.log(selectingDrivers);

const createFareMultiplier = function(int) {
    return function(fare) {
        return fare * int;
    };
};
// console.log(createFareMultiplier());

const fareDoubler = function(fare) {
    let innerMultiplier = createFareMultiplier(2);
    return innerMultiplier(fare)
};
// console.log(fareDoubler(5));

const fareTripler = function(fare) {
    let innerMultiplier = createFareMultiplier(3);
    return innerMultiplier(fare)
}
// console.log(fareTripler(5));

const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
}
