import faker from 'faker';
import { Mappable } from './CustomMap';

class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor () {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
            <h3>Company: ${this.companyName}</h3>
            <p>${this.catchPhrase}</p>
        `;
    }
}

// by convention TS skips
// keyword default
// import User from './User';
// instead of import { User } from './User';
// however half time people use one or other
export { Company };


