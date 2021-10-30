import React from 'react';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

// for the card preview
import Paper from '@material-ui/core/Paper';

// custom components
import CardDisplayItem from '../../components/CMS/CardDisplayItem';
import BackButton from '../../components/BackButton';

// redux
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../hooks';
import {
  addCardToStack,
  removeCardFromStack,
} from '../../redux/actions/stackActions';

// styles
import {
  CreateStackLayout,
  Header,
  PreviewAndCardDisplayContainer,
  StackPreview,
  CardsDisplay,
} from '../../styles/pages/CMS/CreateStackStyles';

// types
import { CardProps } from '../../types';
interface Props {
  title: string;
  description: string;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearFields: () => void;
  submit: () => void;
}

export default function StackTemplate({
  title,
  description,
  handleTitleChange,
  handleDescriptionChange,
  clearFields,
  submit
}: Props) {
  useFirestoreConnect([{ collection: 'cards' }]);
  const cards = useSelector((state) => state.firestore.ordered.cards);

  const dispatch = useDispatch();
  const stack = useSelector((state) => state.stack); //the current stack

  const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  function addToStack(card: CardProps) {
    dispatch(addCardToStack(card));
  }
  function removeFromStack(card: CardProps) {
    dispatch(removeCardFromStack(card));
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    submit();
    setSnackbarOpen(true);
  }

  // FIXME: the check to see if a card is in the stack is not working

  return (
    <CreateStackLayout>
      <BackButton to="/cms" text="Dashboard" />
      <Header>
        <h2 style={{ margin: '0 0 0 150px', padding: '0' }}>Create Stack</h2>
      </Header>

      <PreviewAndCardDisplayContainer>
        <StackPreview>
          {stack.current.cards.map((card: CardProps) => (
            // FIXME: this is messy. CSS needs to be separated
            <Paper
              key={card.id}
              style={{
                maxWidth: '250px',
                height: '200px',
                margin: '0 .25rem',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
              }}
            >
              <img
                src={card.image}
                alt={`${card.name} front face`}
                style={{
                  width: '250px',
                  height: 'auto',
                }}
              />
              <p style={{ margin: '0', padding: '0', alignSelf: 'center' }}>
                {card.name}
              </p>
            </Paper>
          ))}
        </StackPreview>
        <CardsDisplay>
          <h2>Cards</h2>
          {!isLoaded(cards)
            ? 'Loading cards'
            : isEmpty(cards)
            ? 'There are no cards'
            : cards.map((card: CardProps) => (
                <CardDisplayItem
                  key={card.id}
                  card={card}
                  click={
                    stack.current.cards.includes(card)
                      ? () => removeFromStack(card)
                      : () => addToStack(card)
                  }
                  isInStack={stack.current.cards.includes(card)}
                />
              ))}
        </CardsDisplay>
      </PreviewAndCardDisplayContainer>

      <Grid
        container
        style={{
          width: '98vw',
          margin: '0 auto',
          height: 'calc(100vh - 65vh)',
        }}
      >
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <FormControl margin="dense" required={true} fullWidth>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                placeholder="What I Learned In Boating School is..."
                required={true}
                value={title}
                onChange={handleTitleChange}
              />
            </FormControl>
            <FormControl margin="dense" required={true} fullWidth>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={8}
                defaultValue="Default Value"
                variant="outlined"
                value={description}
                onChange={handleDescriptionChange}
              />
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleClose}
        message={`${stack.message}`}
        action={
          <CloseIcon
            onClick={handleClose}
            style={{ cursor: 'pointer' }}
          ></CloseIcon>
        }
      />
    </CreateStackLayout>
  );
}
