import {Stop} from "./stop";

export class OrderDto {
    private id: number;
    private orderNumber: string;
    private description: string;
    private stops: Array<Stop>;

    constructor(id: number, orderNumber: string, description: string) {
        this.id = id;
        this.orderNumber = orderNumber;
        this.description = description;
    }

}
