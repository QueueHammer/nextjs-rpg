import Vector from '../Vector'

export default class Direction {
  public static get north() { return Vector.newScalerY(1); }

  public static get east() { return Vector.newScalerX(1); }

  public static get south() { return Vector.newScalerY(-1); }

  public static get west() { return Vector.newScalerX(-1); }

  public static asList() { return [
    Direction.north,
    Direction.south,
    Direction.east,
    Direction.west
  ];}

  public static asKeys() { return [
    'north',
    'south',
    'east',
    'west'
  ];}

  public static getDirection(d: Vector) {
    if(d.equals(Direction.north)) { return CardinalDirections.North; }
    if(d.equals(Direction.east)) { return CardinalDirections.East; }
    if(d.equals(Direction.south)) { return CardinalDirections.South; }
    if(d.equals(Direction.west)) { return CardinalDirections.West; }
  }
}

export enum CardinalDirections {
  North = 'north',
  East = 'east',
  South = 'south',
  West = 'west',
}
