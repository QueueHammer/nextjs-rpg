import Direction from "./terrain/direction";

export default function PlayerKeyMap(e: KeyboardEvent): Actions {
  const key = (e.key || '').replace(/arrow/i, '').toLowerCase();

  switch (key) {
    case 'd':
    case 'right':
      return move(Direction.East);
    case 'a':
    case 'left':
      return move(Direction.West);
    case 'w':
    case 'up':
      return move(Direction.North);
    case 's':
    case 'down':
      return move(Direction.South);
    case 'q':
      return action(ActionTypes.PRIMARY);
    case 'e':
      return action(ActionTypes.SECONDARY);
      break;
    default:
      return action(ActionTypes.NONE);
  }

  function move(direction: Direction): MoveAction {
    return {
      type: ActionTypes.MOVE,
      payload: direction
    };
  }

  function action(action: ActionTypes.PRIMARY | ActionTypes.SECONDARY | ActionTypes.NONE): InterAction | NoAction {
    return {
      type: action,
      payload: {}
    };
  }
}

export type Actions = MoveAction | InterAction | NoAction;

export interface MoveAction {
  type: ActionTypes.MOVE;
  payload: Direction;
  meta?: string;
}

export interface InterAction {
  type: ActionTypes.PRIMARY | ActionTypes.SECONDARY;
  payload: any;
  meta?: string;
}

export interface NoAction {
  type: ActionTypes.NONE;
  payload: any;
  meta?: string;
}

export enum ActionTypes {
  MOVE,
  PRIMARY,
  SECONDARY,
  NONE
}