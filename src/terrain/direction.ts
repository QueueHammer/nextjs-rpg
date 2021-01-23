import Vector from '../Vector'

export default class Direction implements iDirection {
  public vector: Vector;
  public direction: CardinalDirections;

  public static get North(): Direction {
    return {
      vector: Vector.newScalerY(-1),
      direction: CardinalDirections.North
    };
  }

  public static get East(): Direction {
    return {
      vector: Vector.newScalerX(1),
      direction: CardinalDirections.East
    };
  }

  public static get South(): Direction {
    return {
      vector: Vector.newScalerY(1),
      direction: CardinalDirections.South
    };
  }

  public static get West(): Direction {
    return {
      vector: Vector.newScalerX(-1),
      direction: CardinalDirections.West
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

export enum CardinalDirections {
  North = 'north',
  South = 'south',
  East = 'east',
  West = 'west'
}
