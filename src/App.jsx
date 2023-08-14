import { useEffect, useState } from "react";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CardList from "./components/cardList/CardList";

import { CHAKRAS } from "./data";
import { getRandomChakra, getResult } from "./utils";

function App() {
  const [totalScore, setTotalScore] = useState({
    total: 0,
    user: 0,
    computer: 0,
  });
  const [selected, setSelected] = useState({ user: "Fire", computer: "Fire" });
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!result) {
      const interval = setInterval(() => {
        setSelected({
          user: getRandomChakra(),
          computer: getRandomChakra(),
        });
      }, [250]);
      return () => clearTimeout(interval);
    }
  }, [result]);

  const notify = ({ result, image, audio }) => {
    toast.success(result, {
      icon: <img src={image} alt="Notification" width="100px" height="100px" />,
      onOpen: () => audio.play(),
    });
  };

  const handleUserSelect = (userSelectedChakra) => {
    const compueterSelected = getRandomChakra();
    const challengeResult = getResult(userSelectedChakra, compueterSelected);
    setResult(challengeResult.result);
    setSelected({ user: userSelectedChakra, computer: compueterSelected });
    setTotalScore((prevScore) => ({
      ...prevScore,
      total: prevScore.total + 1,
      ...(challengeResult.result === "You Win"
        ? { user: prevScore.user + 1 }
        : challengeResult.result === "You Lost"
        ? { computer: prevScore.computer + 1 }
        : {}),
    }));
    notify(challengeResult);
  };

  return (
    <>
      <h2>Chakra Challenge</h2>
      <div className="flex-justifyBetween">
        <h4>Total Challenge: {totalScore.total}</h4>
        <h4>Your Score: {totalScore.user}</h4>
        <h4>Computer Score: {totalScore.computer}</h4>
      </div>
      <div className="flex-justifyBetween">
        <h4>Computer Chakra: {selected.computer}</h4>
        <h4>Your Chakra: {selected.user}</h4>
      </div>
      <h4>Result: {result ?? "Challenge not started yet"}</h4>
      <div>
        <CardList items={CHAKRAS} handleCardClick={handleUserSelect} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
