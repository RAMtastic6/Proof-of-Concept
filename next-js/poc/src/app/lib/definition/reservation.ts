export default class Reservation {
    constructor(
        public id: number,
        public restaurant_id: number,
        public date: string,
        public number: number
    ) {}
    
    public static fromJson(json: any): Reservation {
        return new Reservation(
            json.id,
            json.restaurant_id,
            json.date,
            json.number
        );
    }
}