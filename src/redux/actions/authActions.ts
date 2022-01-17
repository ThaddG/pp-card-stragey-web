import React from 'react';
import { Auth, Firestore } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { AuthAction, AuthActionTypes, UserProps } from '../../types';

interface LoginProps {
  email: string;
  password: string;
}
interface SignupProps extends LoginProps {
  firstName: string;
  lastName: string;
}

export const signup =
  ({ email, password, firstName, lastName }: SignupProps) =>
  async (dispatch: React.Dispatch<AuthAction>) => {
    try {
      const res = await createUserWithEmailAndPassword(Auth, email, password);

      if (res.user) {
        const user: UserProps = {
          id: res.user.uid,
          email,
          firstName,
          lastName,
          createdAt: new Date(),
          cards: [],
        };
        await addDoc(collection(Firestore, 'users'), user);
        dispatch({ type: AuthActionTypes.SIGNUP });
      }
    } catch (err) {
      console.log('error:', err);
      dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: err.message });
    }
  };

export const login =
  ({ email, password }: LoginProps) =>
  async (dispatch: React.Dispatch<AuthAction>) => {
    signInWithEmailAndPassword(Auth, email, password)
      .then(() => dispatch({ type: AuthActionTypes.LOGIN }))
      .catch((err) => {
        console.log('login error:', err);
        dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: err.message });
      });
  };

export const logout = () => (dispatch: React.Dispatch<AuthAction>) => {
  signOut(Auth)
    .then(() => {
      dispatch({ type: AuthActionTypes.LOGOUT });
    })
    .catch((err) =>
      dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: err })
    );
};

export const sendPasswordReset =
  (email: string, next: () => void) =>
  async (dispatch: React.Dispatch<AuthAction>) => {
    sendPasswordResetEmail(Auth, email)
      .then(() => {
        dispatch({
          type: AuthActionTypes.SEND_EMAIL,
          payload: 'Password reset email sent.',
        });
        if (next) next();
      })
      .catch((err) => {
        console.log('password reset err:', err);
        dispatch({
          type: AuthActionTypes.AUTH_ERROR,
          payload: err.message,
        });
      });
  };

export const clearAuthMessage = () => (dispatch: React.Dispatch<AuthAction>) =>
  dispatch({ type: AuthActionTypes.CLEAR_AUTH_MESSAGE });
