import React from 'react';
import { useParams } from 'react-router-dom';

// custom components
import StackTemplate from '../../components/CMS/StackTemplate';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../hooks';
import {
  getStackNEW,
} from '../../redux/actions/stackActions';

// styles

// types
interface ParamProps {
  id: string;
}

export default function EditStack() {
  const { id } = useParams<ParamProps>();

  const dispatch = useDispatch();
  const stack = useSelector((state) => state.stack); //the current stack
  const firebase = useSelector(state => state.firebase);

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
    // TODO: update stack function goes here
  }

  React.useEffect(() => {
    // dispatch(getStackNEW(id));
    dispatch(getStackNEW('cmha3suoWFeruzTRQ10G'));
  }, []);
  React.useEffect(() => {
    setTitle(stack.current.title);
    setDescription(stack.current.description);
  },[stack.current])

  return (
    <StackTemplate
      title={title}
      description={description}
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      clearFields={clearFields}
      submit={handleSubmit}
    />
  );
}
