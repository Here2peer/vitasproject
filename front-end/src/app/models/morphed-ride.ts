import {Stop} from "./stop";

export class MorphedRide {
    private _rideNumber: number;
    private _description: string;
    private _Stops: Stop[];
    private _finished: boolean;


    get rideNumber(): number {
        return this._rideNumber;
    }

    set rideNumber(value: number) {
        this._rideNumber = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get Stops(): Stop[] {
        return this._Stops;
    }

    set Stops(value: Stop[]) {
        this._Stops = value;
    }

    get finished(): boolean {
        return this._finished;
    }

    set finished(value: boolean) {
        this._finished = value;
    }
}
