export default class Vector implements iVector{
  // https://evanw.github.io/lightgl.js/docs/vector.html
  constructor(public x: number, public y: number, public z: number = 0) { }

  public add(v: Vector | number) {
    return Vector.isVector(v)?
      new Vector(this.x + v.x, this.y + v.y, this.z + v.z):
      new Vector(this.x + v, this.y + v, this.z + v);
  }

  public subtract(v: Vector | number) {
    return Vector.isVector(v)? 
      new Vector(this.x - v.x, this.y - v.y, this.z - v.z):
      new Vector(this.x - v, this.y - v, this.z - v);
  }

  public multiply(v: Vector | number) {
    return Vector.isVector(v)?
      new Vector(this.x * v.x, this.y * v.y, this.z * v.z):
      new Vector(this.x * v, this.y * v, this.z * v);
  }

  public divide(v: Vector | number) {
    return Vector.isVector(v)?
      new Vector(this.x / v.x, this.y / v.y, this.z / v.z):
      new Vector(this.x / v, this.y / v, this.z / v);
  }

  public equals(v: Vector) {
    return this.x == v.x && this.y == v.y && this.z == v.z;
  }

  static isVector(v: Vector | number): v is Vector {
    const a = (v as Vector);
    return a.x !== undefined &&
      a.y !== undefined &&
      a.z !== undefined;
  }

  static newScaler(v: number) {
    return new Vector(v, v, v);
  }

  static newScalerX(v: number) {
    return new Vector(v, 0, 0);
  }

  static newScalerY(v: number) {
    return new Vector(0, v, 0);
  }

  static newScalerZ(v: number) {
    return new Vector(0, 0, v);
  }
}

export interface iVector {
  x: number;
  y: number;
  z: number;
}
