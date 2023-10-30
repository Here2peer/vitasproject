import {Stop} from "./stop";

export class RideDto {
    private id: number;
    private rideNumber: number;
    private date: string;
    private description: string;
    private stops: Array<Stop>;


    constructor(id: number, rideNumber: number, description: string) {
        this.id = id;
        this.rideNumber = rideNumber;
        this.description = description;
    }
}
