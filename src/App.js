import React, { useEffect, useState } from "react";
import Joke from "./components/Joke";
import "./styles.css";

export default function App() {
  const [joke, setJoke] = useState();
  const [id, setId] = useState(0);

  useEffect(() => {
    async function getJoke() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/bad-jokes/${id}`
        );
        const data = await response.json();

        if (!data?.joke) {
          throw new Error("no joke content");
        }

        setJoke(data.joke);
      } catch (error) {
        setId(0);
      }
    }

    getJoke();
  }, [id, setJoke]); // exhaustive depencies

  function incrementId() {
    setId((oldId) => oldId + 1);
  }

  console.log(id);

  return (
    <>
      <h1>Bad Jokes</h1>
      <Joke joke={joke} onNextJoke={incrementId} />
    </>
  );
}
