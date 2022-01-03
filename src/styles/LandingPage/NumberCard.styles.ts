import styled from 'styled-components';
import Box from '@mui/material/Box';

export const Container = styled(Box)`
  max-width: 362px;
  height: 235px;
  background-color: #dfede5;
  border-radius: 28px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Number = styled.div`
  font-family: 'Yeseva One';
  font-size: 130px;
  position: absolute;
  left: 8.78%;
  top: -30%;
  color: #5becad;
`;
