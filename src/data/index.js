import earthNature from "./../assets/images/Nature_Icon_Earth.svg";
import fireNature from "./../assets/images/Nature_Icon_Fire.svg";
import lightningNature from "./../assets/images/Nature_Icon_Lightning.svg";
import waterNature from "./../assets/images/Nature_Icon_Water.svg";
import windNature from "./../assets/images/Nature_Icon_Wind.svg";

import narutoDraw from "./../assets/images/narutoDraw.jpg";
import narutoLost from "./../assets/images/narutoLost.jpg";
import narutoWin from "./../assets/images/narutoWin.jpg";

import drawDattebayoAudio from "./../assets/audios/drawDattebayo.mp3";
import sadDattebayoAudio from "./../assets/audios/sadDattebayo.mp3";
import happyDattebayoAudio from "./../assets/audios/happyDattebayo.mp3";
import thankfulDattebayoAudio from "./../assets/audios/thankfulDattebayo.mp3";

export const CHAKRAS = [
  { name: "Fire", img: fireNature, color: "red" },
  { name: "Wind", img: windNature, color: "green" },
  { name: "Lightning", img: lightningNature, color: "yellow" },
  { name: "Earth", img: earthNature, color: "brown" },
  { name: "Water", img: waterNature, color: "blue" },
];

const drawDattebayo = new Audio(drawDattebayoAudio);
const sadDattebayo = new Audio(sadDattebayoAudio);
const happyDattebayo = new Audio(happyDattebayoAudio);
const thankfulDattebayo = new Audio(thankfulDattebayoAudio);

export const DATTEBATO_AUDIO = {
  draw: drawDattebayo,
  sad: sadDattebayo,
  happy: happyDattebayo,
  thankful: thankfulDattebayo,
};

export const winAudio = [DATTEBATO_AUDIO.happy, DATTEBATO_AUDIO.thankful];

export const NARUTO_IMAGES = {
  narutoDraw,
  narutoLost,
  narutoWin,
};
