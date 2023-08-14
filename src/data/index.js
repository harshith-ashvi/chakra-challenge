import earthNature from "./../assets/images/Nature_Icon_Earth.svg";
import fireNature from "./../assets/images/Nature_Icon_Fire.svg";
import lightningNature from "./../assets/images/Nature_Icon_Lightning.svg";
import waterNature from "./../assets/images/Nature_Icon_Water.svg";
import windNature from "./../assets/images/Nature_Icon_Wind.svg";

import drawDattebayo from "./../assets/audios/drawDattebayo.mp3";
import sadDattebayo from "./../assets/audios/sadDattebayo.mp3";
import happyDattebayo from "./../assets/audios/happyDattebayo.mp3";
import thankfulDattebayo from "./../assets/audios/thankfulDattebayo.mp3";

export const CHAKRAS = [
  { name: "Fire", img: fireNature },
  { name: "Wind", img: windNature },
  { name: "Lightning", img: lightningNature },
  { name: "Earth", img: earthNature },
  { name: "Water", img: waterNature },
];

export const DATTEBATO_AUDIO = {
  draw: drawDattebayo,
  sad: sadDattebayo,
  happy: happyDattebayo,
  thankful: thankfulDattebayo,
};
