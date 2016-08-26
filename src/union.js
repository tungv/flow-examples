// @flow
type DirectionType = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type PositionType = {
  x: number,
  y: number
};

type TransitionType = {
  direction: DirectionType,
  position: PositionType
};

function fancy(transition: TransitionType): PositionType {
  switch(transition.direction) {
    case 'UP': return {
      x: transition.position.x + 1,
      y: transition.position.y
    };
    case 'DOWN': return {
      x: transition.position.x - 1,
      y: transition.position.y
    };
    case 'LEFT': return {
      x: transition.position.x,
      y: transition.position.y - 1
    };
    case 'RIGHT': return {
      x: transition.position.x,
      y: transition.position.y + 1
    };
  }

  return transition.position;
}

fancy({
  direction: 'UP',
  position: { x: 0, y: 10 }
});
//
// fancy({
//   direction: 'TELEPORT',
//   position: { x: 0, y: 10 }
// });
