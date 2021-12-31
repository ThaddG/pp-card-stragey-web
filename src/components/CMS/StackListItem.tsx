import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

// styles
import { StyledBox } from '../../styles/components/CMS/StackListItem.styles';

// types
import StackProps from '../../models/stack';
type Props = {
  stack: StackProps;
};

const StackListItem: React.FC<Props> = ({ stack }) => (
  <Link to={`/cms/stack/edit/${stack.id}`}>
    <StyledBox sx={{ width: 300, height: 300, color: '#fff', m: 1 }}>
      <Typography>{stack.title}</Typography>
    </StyledBox>
  </Link>
);

export default StackListItem;
