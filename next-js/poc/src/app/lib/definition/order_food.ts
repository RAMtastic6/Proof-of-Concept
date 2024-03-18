export default class OrderFood {
    constructor(
        public order_id: number,
        public food_id: number,
        public number: number
    ) {}

    public static fromJson(json: any): OrderFood {
        return new OrderFood(
            json.order_id,
            json.food_id,
            json.number
        );
    }
}