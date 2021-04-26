import { DateTime } from "luxon";
import { Time } from "./time.interface";

export default class LuxonFacade implements Time {
  _lib: any;
  constructor(input?: string, formatString?: string, strict?: boolean) {
    this._lib = dayjs(input, formatString, strict);
  }

  libName(): string {
    return 'Luxon';
  }

  format(str?: string): string {
    return this._lib.format(str);
  }

  add(value: number, unit: QUnitType): Dayjs {
    return this._lib.add(value, unit);
  }

  substract(value: number, unit: QUnitType): Dayjs {
    return this._lib.subtract(value, unit);
  }
}
