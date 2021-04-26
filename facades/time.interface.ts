export interface Time {
  // new(input?: string, format?: string, strict?: boolean);
  libName(): string;
  format(formatStr?: string): string;
  add(amount: any, unit: string): any;
  substract(amount: any, unit: string): any;
}
