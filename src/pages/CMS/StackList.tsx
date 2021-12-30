import React from 'react';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../hooks';

// types
import StackProps from '../../models/stack';

export default function StackList() {
  useFirestoreConnect([{ collection: 'stacks' }]);
  const stacks = useSelector((state) => state.firestore.ordered.stacks);
  return (
    <>
      {!isLoaded(stacks)
        ? 'Loading stacks'
        : isEmpty(stacks)
        ? 'There are no cards'
        : stacks.map((stack: StackProps) => <p>{stack.title}</p>)}
    </>
  )
}