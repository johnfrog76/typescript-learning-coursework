
// public, private, protected for methods in the class
class Vehicle {
    constructor(public color: string) {}

    protected drive(): void {
        console.log('chugga chugga!')
    }

    protected honk(): void {
        console.log('beep!')
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
    // overrides parent class
    constructor(public weels: number, color: string) {
        // args to parent
        super(color);
    }
    protected drive(): void {
        console.log('vroooooom!')
    }

    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'blue');
car.startDrivingProcess();
