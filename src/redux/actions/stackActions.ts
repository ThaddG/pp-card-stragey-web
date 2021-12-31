import React from 'react';
import { CardProps } from '../../types';
import firebase from '../../firebase';
import StackProps, {
  EditedStackProps,
  StackAction,
  StackActionTypes,
} from '../../models/stack';

const getAllStacks = () => async (dispatch: React.Dispatch<StackAction>) => {
  const firestore = firebase.firestore();

  firestore.collection('stacks').get();
};

export const getStackById =
  (id: string) => (dispatch: React.Dispatch<StackAction>) => {
    const firestore = firebase.firestore();

    firestore
      .collection('stacks')
      .doc(id)
      .get()
      .then((stack) => {
        const stackPayload = stack.data() as StackProps;
        dispatch({
          type: StackActionTypes.GET_STACK,
          payload: stackPayload,
        });
      })
      .catch((err) => {
        console.error('getStackByID error' + err);
        dispatch({
          type: StackActionTypes.STACK_ERROR,
          payload: `Get Card By Id Error: ${err}`,
        });
      });
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
    type: StackActionTypes.CLEAR_STACK,
  });
};

export const addStack =
  (stack: StackProps) => (dispatch: React.Dispatch<StackAction>) => {
    const firestore = firebase.firestore();
    const payload: StackProps = {
      ...stack,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    firestore
      .collection('stacks')
      .add(payload)
      .then(() => {
        dispatch({
          type: StackActionTypes.ADD_STACK,
          payload,
        });
      })
      .catch((err) => {
        console.log('Add Stack Error: ' + err);
      });
  };

export const editStack =
  (id: string, stack: EditedStackProps) => (dispatch: React.Dispatch<StackAction>) => {
    const firestore = firebase.firestore();

    const updatedStack = { ...stack, updatedAt: new Date() };

    console.log("action is working")

    firestore
      .collection('stacks')
      .doc(id)
      .update(updatedStack)
      .then(() =>
        dispatch({
          type: StackActionTypes.EDIT_STACK,
          payload: 'Stack edited successfully',
        })
      )
      .catch((err) =>
        dispatch({
          type: StackActionTypes.STACK_ERROR,
          payload: `Edit Stack Error: ${err}`,
        })
      );

  };
