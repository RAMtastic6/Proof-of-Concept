export default class DaysOpen {
    constructor(
        public restaurantId: number,
        public day: string,
        public opening: string,
        public closing: string
    ) {}

    static fromJson(json: any): DaysOpen {
        return new DaysOpen(
            json.restaurant_id,
            json.day_open,
            json.opening,
            json.closing
        );
    }
}