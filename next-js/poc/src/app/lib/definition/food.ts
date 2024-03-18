export default class Food{
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public menu_id: number
    ) {}

    public static fromJson(json: any): Food {
        return new Food(
            json.id,
            json.name,
            json.price,
            json.menu_id
        );
    }
}