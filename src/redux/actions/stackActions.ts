import React from 'react';
import {
  StackAction,
  StackActionTypes,
  StackProps,
  CardProps,
} from '../../types';
import firebase from '../../firebase';

const getAllStacks = () => async (dispatch: React.Dispatch<StackAction>) => {
  const firestore = firebase.firestore();

  firestore.collection('stacks').get();
};

export const getStackById =
  (id: string) => async (dispatch: React.Dispatch<StackAction>) => {
    const firestore = firebase.firestore();

    try {
      const stack = firestore.collection('stacks').doc(id);
      const doc = await stack.get();
      const s = doc.data();
      console.log('Stack:', s);
      if (s) {
        // FIXME: there has to be a better way to do this.
        // FIXME: this way does not give me the created/updated date
        const typedStack: StackProps = {
          id,
          title: s.title,
          description: s.description,
          owner: s.owner,
          cards: s.cards,
        };
        dispatch({ type: StackActionTypes.GET_STACK, payload: typedStack });
      }
    } catch (err) {
      dispatch({
        type: StackActionTypes.STACK_ERROR,
        payload: `Get Card By Id Error: ${err}`,
      });
    }
  };

export const addCardToStack =
  (card: CardProps) => (dispatch: React.Dispatch<StackAction>) => {
    dispatch({
      type: StackActionTypes.ADD_CARD_TO_STACK,
      payload: card,
    });
  };

export const removeCardFromStack =
  (card: CardProps) => (dispatch: React.Dispatch<StackAction>) => {
    dispatch({
      type: StackActionTypes.REMOVE_CARD_FROM_STACK,
      payload: card,
    });
  };

export const clearStack = () => (dispatch: React.Dispatch<StackAction>) => {
  dispatch({
    type: StackActionTypes.CLEAR_STACK
  })
}

export const addStack = (stack: StackProps) => (dispatch: React.Dispatch<StackAction>) => {
  const firestore = firebase.firestore();
  const payload: StackProps = {
    ...stack,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  firestore
    .collection('stacks')
    .add(payload)
    .then(() => {
      dispatch({
        type: StackActionTypes.ADD_STACK,
        payload
      });
    })
    .catch((err) => {
      console.log("Add Stack Error: " + err);
    })
}