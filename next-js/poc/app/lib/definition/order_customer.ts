export default class OrderCustomer {
    constructor(
        public id: number,
        public customer_id: number
    ) {}

    public static fromJson(json: any): OrderCustomer {
        return new OrderCustomer(
            json.id,
            json.customer_id
        );
    }
}