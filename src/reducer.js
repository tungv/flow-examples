// --@flow
type ResponseType = {
  status: 'OK' | 'NOT_FOUND' | 'UNKNOWN_ERROR',
  body: string
};

type FetchActionType = {
  type: 'FETCH',
  payload: {
    response: ResponseType
  }
};

type ResetActionType = {
  type: 'RESET',
  payload: void
};

type ActionType = FetchActionType | ResetActionType;

const reducer = (state: ResponseType[], action: ActionType): ResponseType[] => [
  ...state,
  action.payload.response,
];

const prevState = [
  {
    status: 'OK',
    body: 'hello'
  },
]

const action = {
  state: 'NOT_FOUND',
  body: 'error'
};

const nextState = reducer(prevState, action);
