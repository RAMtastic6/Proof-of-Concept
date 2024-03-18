export default class Menu {
    constructor(
        public id: number,
        public name: string
    ) {}

    public static fromJson(json: any): Menu {
        return new Menu(
            json.id,
            json.name
        );
    }
}