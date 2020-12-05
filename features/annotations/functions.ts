

// all params and what we return
// type inferance but we will not use it
// we always will
const add = (a: number, b: number): number => {
    return a + b;
};
// we could forget to add return 
// we get no error
const subtrct = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number  {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
}

// rare
const throwError = (message: string ): never => {
    throw new Error(message);

}

// avoid
const throwError1 = (message: string ): void => {
    if (!message) {
        throw new Error(message);
    }
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

// object destructuring
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);