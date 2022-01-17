import React from 'react';
import { Firestore } from '../../firebase';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { CardProps } from '../../types';
import StackProps, {
  EditedStackProps,
  StackAction,
  StackActionTypes,
} from '../../models/stack';

const getAllStacks = () => async (dispatch: React.Dispatch<StackAction>) => {
  await getDocs(collection(Firestore, 'stacks'));
  // TODO: i dont think i finished this method when i first wrote it
};

export const getStackById =
  (id: string) => async (dispatch: React.Dispatch<StackAction>) => {
    const stackRef = doc(Firestore, 'stacks', id);
    const stackSnap = await getDoc(stackRef);

    try {
      if (stackSnap.exists()) {
        console.log('Document data:', stackSnap.data());
        dispatch({
          type: StackActionTypes.GET_STACK,
          payload: stackSnap.data() as StackProps,
        });
      } else {
        console.log('Stack does not exist!');
        dispatch({
          type: StackActionTypes.STACK_ERROR,
          payload: 'Stack does not exist!',
        });
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
    type: StackActionTypes.CLEAR_STACK,
  });
};

export const addStack =
  (stack: StackProps) => async (dispatch: React.Dispatch<StackAction>) => {
    const payload: StackProps = {
      ...stack,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await addDoc(collection(Firestore, 'stacks'), payload)
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
  (id: string, stack: EditedStackProps) =>
  async (dispatch: React.Dispatch<StackAction>) => {
    const updatedStack = { ...stack, updatedAt: new Date() };
    const stackRef = doc(Firestore, 'stacks', id);

    await updateDoc(stackRef, { ...updatedStack })
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
