import styled from 'styled-components';
import Grid from '@mui/material/Grid';

interface Props {
  isMobile: boolean;
}

export const MobileCenteredGridItem = styled(Grid)<Props>`
  ${(props) =>
    props.isMobile &&
    `
    display: flex;
    justify-content: center;
  `}
`;
