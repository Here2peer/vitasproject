import {Deserializable} from "./deserializable";
import {Stop} from "./stop";

export class Order implements Deserializable {
  private _id: number;
  private _orderNumber: string;
  private _description: string;
  private _Stops: Stop[];

  deserialize(input: any): this {
    return Object.assign(this, input);
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get orderNumber(): string {
    return this._orderNumber;
  }

  set orderNumber(value: string) {
    this._orderNumber = value;
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
}
