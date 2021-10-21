import React from 'react';
import {StackAction} from '../../types';
import firebase from '../../firebase';

const getAllStacks = () => async (dispatch: React.Dispatch<StackAction>) => {
  const firestore = firebase.firestore();

  firestore.collection('stacks').get()
}

const getStack = () => async (dispatch: React.Dispatch<StackAction>) => {

}