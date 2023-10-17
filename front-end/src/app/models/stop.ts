import {Deserializable} from "./deserializable";
import {Ride} from "./ride";
import {Order} from "./order";

export class Stop implements Deserializable {
  private _id: number;
  private _stopNumber: number;
  private _postcode: string;
  private _houseNumber: string;
  private _hasBeenVisited: boolean;
  private _ride: Ride;
  private _order: Order;
  deserialize(input: any): this {
    return Object.assign(this, input);
  }

  get id(): number {
    return this._id;
  }

  get stopNumber(): number {
    return this._stopNumber;
  }

  get postcode(): string {
    return this._postcode;
  }

  get houseNumber(): string {
    return this._houseNumber;
  }

  get hasBeenVisited(): boolean {
    return this._hasBeenVisited;
  }

  set id(value: number) {
    this._id = value;
  }

  set stopNumber(value: number) {
    this._stopNumber = value;
  }

  set postcode(value: string) {
    this._postcode = value;
  }

  set houseNumber(value: string) {
    this._houseNumber = value;
  }

  set hasBeenVisited(value: boolean) {
    this._hasBeenVisited = value;
  }

  get ride(): Ride {
    return this._ride;
  }

  set ride(value: Ride) {
    this._ride = value;
  }

  get order(): Order {
    return this._order;
  }

  set order(value: Order) {
    this._order = value;
  }
}
