import React from 'react';
import { Auth, Firestore } from '../../firebase';
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';
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
    businessOrPersonal: string,
    annualFee: number,
    rewardTypes: RewardTypeProps,
    cardImage: string
  ) =>
  async (dispatch: React.Dispatch<CardAction>) => {
    const card: CardProps = {
      name,
      bank,
      businessOrPersonal,
      annualFee,
      rewardTypes,
      image: cardImage,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await addDoc(collection(Firestore, 'cards'), card)
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
    await deleteDoc(doc(Firestore, 'cards', id))
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
    const updatedCard = { ...card, updatedAt: new Date() };

    const cardRef = doc(Firestore, 'cards', id);

    await updateDoc(cardRef, { ...updatedCard })
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
      businessOrPersonal: 'personal',
      annualFee: 0,
      rewardTypes: {
        Travel: {
          description: '',
          rank: 0,
        },
        Flights: {
          description: '',
          rank: 0,
        },
        Hotels: {
          description: '',
          rank: 0,
        },
        Dining: {
          description: '',
          rank: 0,
        },
        Cashback: {
          description: '',
          rank: 0,
        },
        Gas: {
          description: '',
          rank: 0,
        },
        Groceries: {
          description: '',
          rank: 0,
        },
      },
      image: '',
    },
  });
};

export const getCardById =
  (id: string) => async (dispatch: React.Dispatch<CardAction>) => {
    try {
      const cardRef = doc(Firestore, 'cards', id);
      const cardSnap = await getDoc(cardRef);

      if (cardSnap.exists()) {
        console.log('Document data:', cardSnap.data());
        // FIXME: make these types match and then uncomment it
        // dispatch({ type: CardActionTypes.GET_CARD, payload: cardSnap.data() });
      } else {
        console.log('Card does not exist!');
        dispatch({
          type: CardActionTypes.CARD_ERROR,
          payload: 'Card does not exist!',
        });
      }
    } catch (err) {
      dispatch({
        type: CardActionTypes.CARD_ERROR,
        payload: `Get Card By Id Error: ${err}`,
      });
    }
  };
