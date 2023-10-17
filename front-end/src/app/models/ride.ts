import {Deserializable} from "./deserializable";
import {Stop} from "./stop";

export class Ride implements Deserializable {
  private _id: number;
  private _rideNumber: number;
  private _date: string;
  private _description: string;
  private _Stops: Stop[];
  private _finished: boolean;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get rideNumber(): number {
    return this._rideNumber;
  }

  set rideNumber(value: number) {
    this._rideNumber = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get Stops(): Array<Stop> {
    return this._Stops;
  }

  set Stops(value: Array<Stop>) {
    this._Stops = value;
  }


  get finished(): boolean {
    return this._finished;
  }

  set finished(value: boolean) {
    this._finished = value;
  }
}
