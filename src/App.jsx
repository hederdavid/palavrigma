import { useCallback, useEffect, useState } from "react";
import { wordsList } from "./data/wordsList";

// Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import EndGame from "./components/EndGame";
import PersonApresentation from "./components/PersonApresentation";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
  { id: 4, name: "apresentation" },
];

function App() {
  const [stage, setStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(5);
  const [score, setScore] = useState(0);

  const pickedWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  const returnStart = () => {
    setStage(stages[0].name);
  };

  const startGame = useCallback(() => {
    const { word, category } = pickedWordAndCategory();

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(wordLetters);

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setStage(stages[1].name);
  }, [pickedWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses(guesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
    setGuesses(5);
  };

  useEffect(() => {
    if (guesses <= 0) {
      //reset all states
      clearLetterStates();

      setStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    if(uniqueLetters.length === guessedLetters.length && stage === stages[1].name){
      setScore((prevScore) => prevScore + 100);
      clearLetterStates();
      startGame();
    }
  }, [guessedLetters, letters, score, stage, startGame]);

  const personApresentation = () => {
    setStage(stages[3].name);
  };

  const retry = () => {
    setGuesses(5);
    setScore(0);
    setStage(stages[0].name);
  };

  return (
    <div className="bg-blue-200 h-screen">
      {stage == "start" && (
        <StartScreen
          startGame={startGame}
          personApresentation={personApresentation}
        />
      )}
      {stage == "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {stage == "end" && <EndGame score={score} retry={retry} />}
      {stage == "apresentation" && (
        <PersonApresentation returnStart={returnStart} />
      )}
    </div>
  );
}

export default App;
