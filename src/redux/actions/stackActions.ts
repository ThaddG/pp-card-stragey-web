import React from 'react';
import { StackAction, StackActionTypes, StackProps } from '../../types';
import firebase from '../../firebase';

<<<<<<< HEAD
=======
// useless comment

>>>>>>> 2dba308a468204bcda5eacefeb50eee20c9387ba
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
