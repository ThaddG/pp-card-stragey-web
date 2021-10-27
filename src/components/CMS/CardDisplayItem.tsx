import React from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

// types
import { CardProps } from '../../types';

// styles
import { CardContainer } from '../../styles/components/CMS/CardDisplayItemStyles';

interface Props {
  card: CardProps;
}

export default function CardDisplayItem({ card }: Props) {
  return <CardContainer elevation={4}>
    {card.name}
    <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
  </CardContainer>;
}
