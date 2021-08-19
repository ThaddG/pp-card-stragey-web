import React from 'react';
import firebase from '../../firebase';
import {
  CardAction,
  CardActionTypes,
  CardProps,
  RewardTypeProps,
} from '../../types';

export const addCard =
  (
    name: string,
    bank: string,
    annualFee: number,
    rewardTypes: RewardTypeProps
  ) =>
  async (dispatch: React.Dispatch<CardAction>) => {
    const firestore = firebase.firestore();

    const card: CardProps = {
      name,
      bank,
      annualFee,
      rewardTypes,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    firestore
      .collection('cards')
      .add(card)
      .then(() =>
        dispatch({
          type: CardActionTypes.ADD_CARD,
          payload: 'Card added successfully',
        })
      )
      .catch((err) => {
        console.log('Card add fail', err);
        dispatch({
          type: CardActionTypes.CARD_ERROR,
          payload: 'Failed to add card',
        });
      });
  };

export const removeCard =
  (name: string, id: string) =>
  async (dispatch: React.Dispatch<CardAction>) => {
    const firestore = firebase.firestore();

    firestore
      .collection('cards')
      .doc(id)
      .delete()
      .then(() =>
        dispatch({
          type: CardActionTypes.REMOVE_CARD,
          payload: `${name} removed successfully`,
        })
      )
      .catch((err) =>
        dispatch({
          type: CardActionTypes.CARD_ERROR,
          payload: 'Card remove fail',
        })
      );
  };
