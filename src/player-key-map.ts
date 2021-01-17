export default function PlayerKeyMap(e: KeyboardEvent): Action {
  const key = e.key.replace(/arrow/i, '').toLowerCase();

  switch (key) {
    case 'd':
    case 'right':
      return move({ x: 1 });
    case 'a':
    case 'left':
      return move({ x: -1 });
    case 'w':
    case 'up':
      return move({ y: -1 });
    case 's':
    case 'down':
      return move({ y: 1 });
    case 'q':
      return action(ActionTypes.PRIMARY);
    case 'e':
      return action(ActionTypes.SECONDARY);
      break;
    default:
      console.log(key);
  }

  function move(place: {x: number} | {y: number}) {
    return {
      type: ActionTypes.MOVE,
      payload: place
    };
  }

  function action(action: ActionTypes.PRIMARY | ActionTypes.SECONDARY) {
    return {
      type: action,
      payload: {}
    };
  }
}

export interface Action {
  type: ActionTypes;
  payload: any;
  meta?: string;
}

export enum ActionTypes {
  MOVE,
  PRIMARY,
  SECONDARY,
}