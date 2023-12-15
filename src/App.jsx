import { useCallback, useEffect, useState } from "react"
import { wordsList } from "./data/wordsList"
import StartScreen from "./components/StartScreen"
import Game from "./components/Game"
import EndGame from "./components/EndGame"
import PersonApresentation from "./components/PersonApresentation"

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
  {id: 4, name: "apresentation"}
]

function App() {
  const [stage, setStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  console.log(words)

  const gameScreen = () => {
    setStage(stages[1].name)
  }

  const personApresentation = () => {
    setStage(stages[3].name)
  }

  return (
    <div className="flex justify-center items-center text-center h-screen bg-happyPink">
      {stage == "start" && <StartScreen gameScreen={gameScreen} personApresentation={personApresentation}/>}
      {stage == "game" && <Game />}
      {stage == "end" && <EndGame />}
      {stage == "apresentation" && <PersonApresentation />}
    </div>
  )
}

export default App
