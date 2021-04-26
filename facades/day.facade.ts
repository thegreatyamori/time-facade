import dayjs, { Dayjs, QUnitType } from "dayjs";
import { Time } from "./time.interface";

export default class DayJSFacade implements Time {
  _lib: Dayjs;
  constructor(input?: string, formatString?: string, strict?: boolean) {
    this._lib = dayjs(input, formatString, strict);
  }

  libName(): string {
    return 'Dayjs';
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
