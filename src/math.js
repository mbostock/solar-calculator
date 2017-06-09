export var acos = Math.acos;
export var asin = Math.asin;
export var cos = Math.cos;
export var pi = Math.PI;
export var pow = Math.pow;
export var sin = Math.sin;
export var tan = Math.tan;

export function radians(degrees) {
  return pi * degrees / 180;
}

export function degrees(radians) {
  return 180 * radians / pi;
}
