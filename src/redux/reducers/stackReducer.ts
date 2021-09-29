import { StackAction, StackProps } from '../../types';

interface InitialStateInterface {
  all: Array<StackProps>;
  current: StackProps;
}

const initialState: any = {};

export const stackReducer = (state = initialState, action: StackAction) => {
  switch (action.type) {
    case 'GET_ALL_STACKS':
      return { ...state, all: action.payload };
    case 'GET_STACK':
      return { ...state, ...action.payload };
    case 'STACK_ERROR':
      return { ...state, stackError: action.payload };
    default:
      return state;
  }
};
