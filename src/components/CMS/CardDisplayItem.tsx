import React from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

// types
import { CardProps } from '../../types';

// styles
import { CardContainer } from '../../styles/components/CMS/CardDisplayItemStyles';

interface Props {
  card: CardProps;
  click:() => void;
  isInStack: boolean;
}

export default function CardDisplayItem({ card, click, isInStack }: Props) {
  return <CardContainer elevation={4} onClick={click}>
    {card.name}
    {isInStack
      ? <CheckBoxIcon></CheckBoxIcon>
      : <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
    }
   
  </CardContainer>;
}
