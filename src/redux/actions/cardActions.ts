import React from 'react';
import firebase from '../../firebase';
import {
  CardAction,
  CardActionTypes,
  CardProps,
  RewardTypeProps,
  EditedCardProps,
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

export const editCard =
  (id: string, card: EditedCardProps) =>
  async (dispatch: React.Dispatch<CardAction>) => {
    const firestore = firebase.firestore();

    firestore
      .collection('cards')
      .doc(id)
      .update(card)
      .then(() =>
        dispatch({
          type: CardActionTypes.EDIT_CARD,
          payload: 'Card edited successfully',
        })
      )
      .catch((err) =>
        dispatch({
          type: CardActionTypes.CARD_ERROR,
          payload: `Edit Card Error: ${err}`,
        })
      );
  };

export const clearCardMessage = () => (dispatch: React.Dispatch<CardAction>) =>
  dispatch({ type: CardActionTypes.CLEAR_CARD_MESSAGE });

export const clearCard = () => (dispatch: React.Dispatch<CardAction>) => {
  dispatch({
    type: CardActionTypes.CLEAR_CARD,
    payload: {
      name: '',
      bank: '',
      annualFee: 0,
      rewardTypes: {
        Travel: {
          percent: 0,
          rank: 0,
        },
        Flights: {
          percent: 0,
          rank: 0,
        },
        Hotels: {
          percent: 0,
          rank: 0,
        },
        Dining: {
          percent: 0,
          rank: 0,
        },
        Cashback: {
          percent: 0,
          rank: 0,
        },
        Gas: {
          percent: 0,
          rank: 0,
        },
      },
    },
  });
};

export const getCardById =
  (id: string) => async (dispatch: React.Dispatch<CardAction>) => {
    const firestore = firebase.firestore();

    try {
      const card = firestore.collection('cards').doc(id);
      const doc = await card.get();
      const c = doc.data();
      console.log('Card:', c);
      if (c) {
        // FIXME: there has to be a better way to do this.
        const typedCard: CardProps = {
          id,
          name: c.name,
          bank: c.bank,
          annualFee: c.annualFee,
          rewardTypes: c.rewardTypes,
        };
        dispatch({ type: CardActionTypes.GET_CARD, payload: typedCard });
      }
    } catch (err) {
      dispatch({
        type: CardActionTypes.CARD_ERROR,
        payload: `Get Card By Id Error: ${err}`,
      });
    }
  };
