/**
 * 
 */
module users {
    export class User implements Person {
        private _userId: string;
        private _firstName: string;
        private _lastName: string;
        private _email: string;
        private _phoneNumber: string;
        private _mobile: string;
        private _address: Address;
        private _age: number;
        private _gender: string;

        constructor(person: Person) {
            this._firstName = person.firstName;
            this._lastName = person.lastName;
            this._email = person.email;
            this._phoneNumber = person.phoneNumber;
            this._mobile = person.mobile;
            this._address = person.address;
            this._age = person.age;
            this._gender = person.gender;
        }
        get userId(): string {
            return this._userId;
        }
        get firstName(): string {
            return this._firstName;
        }
        set firstName(value: string) {
            this._firstName = value;
        }
        get lastName(): string {
            return this._lastName;
        }
        set lastName(value: string) {
            this._lastName = value;
        }
        get email(): string {
            return this._email;
        }
        set email(value: string) {
            this._email = value;
        }
        get phoneNumber(): string {
            return this._phoneNumber;
        }
        set phoneNumber(value: string) {
            this._phoneNumber = value;
        }
        get mobile(): string {
            return this._mobile;
        }
        set mobile(value: string) {
            this._mobile = value;
        }
        get address(): Address {
            return this._address;
        }
        set address(value: Address) {
            this._address = value;
        }
        get age(): number {
            return this._age;
        }
        set age(value: number) {
            this._age = value;
        }
        get gender(): string {
            return this._gender;
        }
        set gender(value: string) {
            this._gender = value;
        }
    }
}
