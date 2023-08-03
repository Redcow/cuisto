import { User } from "domain/user/Types.d.ts";

export default class Meal {

    public readonly id?: string;
    public readonly name: string;
    public readonly description: string;

    public readonly price: number;

    public readonly user: User;

    constructor(
        name: string,
        description: string,
        price: number,
        user: User,
        id?: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.user = user;
    }
}