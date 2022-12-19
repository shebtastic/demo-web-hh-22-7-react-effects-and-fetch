export default function Joke({ joke, onNextJoke }) {
  // pure component
  // input definiert zu 100% output => pure fuctions
  return (
    <>
      <h2>{joke}</h2>
      <button type="button" onClick={onNextJoke}>
        Next Joke
      </button>
    </>
  );
}
