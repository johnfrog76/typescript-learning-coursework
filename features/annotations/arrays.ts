const carMakers = ['ford'];
const dates = [new Date()];

const carsByMake: string[][] = [];
// help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// flexiable types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];



