export default class ReservationGroup {
    constructor(
        public reservation_id: number,
        public customer_id: number
    ) {}

    public static fromJson(json: any): ReservationGroup {
        return new ReservationGroup(
            json.reservation_id,
            json.customer_id
        );
    }
}