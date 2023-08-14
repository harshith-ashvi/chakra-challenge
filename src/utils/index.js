import { CHAKRAS, DATTEBATO_AUDIO, NARUTO_IMAGES, winAudio } from "../data";

export const getRandomChakra = () =>
  CHAKRAS[Math.floor(Math.random() * CHAKRAS.length)].name;

export const getResult = (userSelectedChakra, compueterSelectedChakra) => {
  if (userSelectedChakra === compueterSelectedChakra) {
    return {
      result: "Draw",
      image: NARUTO_IMAGES.narutoDraw,
      //   audio: DATTEBATO_AUDIO.draw,
      audio: DATTEBATO_AUDIO.thankful,
    };
  } else if (
    (userSelectedChakra === "Fire" &&
      ["Wind", "Lightning"].includes(compueterSelectedChakra)) ||
    (userSelectedChakra === "Wind" &&
      ["Lightning", "Earth"].includes(compueterSelectedChakra)) ||
    (userSelectedChakra === "Lightning" &&
      ["Earth", "Water"].includes(compueterSelectedChakra)) ||
    (userSelectedChakra === "Earth" &&
      ["Water", "Fire"].includes(compueterSelectedChakra)) ||
    (userSelectedChakra === "Water" &&
      ["Fire", "Wind"].includes(compueterSelectedChakra))
  ) {
    return {
      result: "You Win",
      image: NARUTO_IMAGES.narutoWin,
      //   audio: winAudio[Math.floor(Math.random() * winAudio.length)],
      audio: DATTEBATO_AUDIO.happy,
    };
  } else {
    return {
      result: "You Lost",
      image: NARUTO_IMAGES.narutoLost,
      audio: DATTEBATO_AUDIO.sad,
    };
  }
};
