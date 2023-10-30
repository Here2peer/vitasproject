import {Ride} from "./ride";
import {Order} from "./order";

export class StopDTO {
    private id: number;
    private stopNumber: number;
    private postcode: string;
    private houseNumber: string;
    private hasBeenVisited: boolean;
    private ride: Ride;
    private order: Order;

    constructor(id: number, stopNumber: number, postcode: string, houseNumber: string, hasBeenVisited: boolean) {
        this.id = id;
        this.stopNumber = stopNumber;
        this.postcode = postcode;
        this.houseNumber = houseNumber;
        this.hasBeenVisited = hasBeenVisited;
    }
}
