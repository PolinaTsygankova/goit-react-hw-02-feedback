import PropTypes from 'prop-types';
import { Button, Container } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  //?   console.log(typeof options); ==> object, map doesn't work

  const arrayOfKeys = Object.keys(options[0]);

  return (
    <Container>
      {arrayOfKeys.map(name => (
        <Button key={name} id={name} onClick={onLeaveFeedback}>
          {makeFirstLetterToUppperCase(name)}
        </Button>
      ))}
    </Container>
  );
}

function makeFirstLetterToUppperCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.number.isRequired).isRequired
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
