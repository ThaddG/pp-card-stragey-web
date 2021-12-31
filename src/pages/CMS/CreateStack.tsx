import React from 'react';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

// custom components
import StackTemplate from '../../components/CMS/StackTemplate';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../hooks';
import { addStack, clearStack } from '../../redux/actions/stackActions';

// styles

// types

export default function CreateStack() {
  useFirestoreConnect([{ collection: 'cards' }]);

  const dispatch = useDispatch();
  const stack = useSelector((state) => state.stack); //the current stack
  const firebase = useSelector((state) => state.firebase);

  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');

  function clearFields() {
    setTitle('');
    setDescription('');
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  function handleSubmit() {
    const payload = {
      title,
      description,
      owner: {
        id: firebase.auth.uid,
        username: firebase.profile.firstName,
      },
      cards: stack.current.cards,
    };
    dispatch(addStack(payload));
    clearFields();
  }

  React.useEffect(() => {
    dispatch(clearStack());
  }, []);

  return (
    <StackTemplate
      pageTitle="Create Stack"
      title={title}
      description={description}
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      clearFields={clearFields}
      submit={handleSubmit}
    />
  );
}
