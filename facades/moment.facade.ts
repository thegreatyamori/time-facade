import moment, { Moment, DurationInputArg1, unitOfTime } from "moment";
import { Time } from "./time.interface";

export default class MomentFacade implements Time {
  _lib: Moment;
  constructor(input?: string, formatString?: string, strict?: boolean) {
    this._lib = moment(input, formatString, strict);
  }

  libName(): string {
    return 'Moment';
  }

  format(str?: string): string {
    return this._lib.format(str);
  }

  add(
    amount?: DurationInputArg1,
    unit?: unitOfTime.DurationConstructor
  ): Moment {
    return this._lib.add(amount, unit);
  }

  substract(
    amount?: DurationInputArg1,
    unit?: unitOfTime.DurationConstructor
  ): Moment {
    return this._lib.subtract(amount, unit);
  }
}
