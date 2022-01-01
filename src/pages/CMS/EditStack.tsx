import React from 'react';
import { useParams } from 'react-router-dom';

// custom components
import StackTemplate from '../../components/CMS/StackTemplate';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../hooks';
import { getStackById, editStack } from '../../redux/actions/stackActions';

// types
import { EditedStackProps } from '../../models/stack';
interface ParamProps {
  id: string;
}

export default function EditStack() {
  const { id } = useParams<ParamProps>();

  const dispatch = useDispatch();
  const stack = useSelector((state) => state.stack);

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
    const stackPayload: EditedStackProps = {
      title,
      description,
      cards: stack.current.cards,
    };
    dispatch(editStack(id, stackPayload));
  }

  React.useEffect(() => {
    dispatch(getStackById(id));
  }, []);
  React.useEffect(() => {
    setTitle(stack.current.title);
    setDescription(stack.current.description);
  }, [stack.current]);

  return (
    <StackTemplate
      pageTitle="Edit Stack"
      title={title}
      description={description}
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      clearFields={clearFields}
      submit={handleSubmit}
    />
  );
}
