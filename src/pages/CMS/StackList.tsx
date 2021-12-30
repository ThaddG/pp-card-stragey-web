import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../hooks';

// styles
import { StyledBox } from '../../styles/components/CMS/StackListItem.styles';

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
        : stacks.map((stack: StackProps) => <StackListItem stack={stack} />)}
    </>
  );
}

type StackItemProps = {
  stack: StackProps;
};
const StackListItem: React.FC<StackItemProps> = ({ stack }) => (
  <StyledBox sx={{ width: 300, height: 300, color: '#fff', m: 1 }}>
    <Typography>{stack.title}</Typography>
  </StyledBox>
);
