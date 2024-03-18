export default class Restaurant {
    constructor(
        public id: number,
        public name: string,
        public address: string,
        public city: string,
        public cuisine: string,
        public menu_id: number
    ) {}

    public static fromJson(json: any): Restaurant {
        return new Restaurant(
            json.id,
            json.name,
            json.address,
            json.city,
            json.cuisine,
            json.menu_id
        );
    }
}