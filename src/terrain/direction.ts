import Vector from '../Vector'

export default class Direction implements iDirection {
  public vector: Vector;
  public direction: CardinalDirections;

  public static get North(): Direction {
    return {
      vector: Vector.newScalerY(1),
      direction: 'north'
    };
  }

  public static get East(): Direction {
    return {
      vector: Vector.newScalerX(1),
      direction: 'east'
    };
  }

  public static get South(): Direction {
    return {
      vector: Vector.newScalerY(-1),
      direction: 'south'
    };
  }

  public static get West(): Direction {
    return {
      vector: Vector.newScalerX(-1),
      direction: 'west'
    };
  }

  public static asList() { return [
    Direction.North,
    Direction.South,
    Direction.East,
    Direction.West
  ];}
}

export interface iDirection {
  vector: Vector;
  direction: CardinalDirections;
}

export type CardinalDirections = 'north' | 'south' | 'east' | 'west';
