export default class Customer {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public email: string
    ) {}
    
    static fromJson(json: any): Customer {
        return new Customer(
            json.id,
            json.name,
            json.surname,
            json.email
        );
    }
}