export function FeedbackOptions({ options, onLeaveFeedback }) {
  //?   console.log(typeof options); ==> object, map doesn't work

  const arrayOfKeys = Object.keys(options[0]);

  return (
    <>
      {arrayOfKeys.map(name => (
        <button key={name} id={name} onClick={onLeaveFeedback}>
          {makeFirstLetterToUppperCase(name)}
        </button>
      ))}
    </>
  );
}

function makeFirstLetterToUppperCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
