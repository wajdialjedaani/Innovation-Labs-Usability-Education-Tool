import { heuristic1Meta, Heuristic1Text } from "./heuristic1";
import { Heuristic2Text, heuristic2Meta } from "./heuristic2";
import { Heuristic3Text, heuristic3Meta } from "./heuristic3";
import { Heuristic4Text, heuristic4Meta } from "./heuristic4";
import { Heuristic5Text, heuristic5Meta } from "./heuristic5";
import { Heuristic6Text, heuristic6Meta } from "./heuristic6";
import { Heuristic7Text, heuristic7Meta } from "./heuristic7";
import { Heuristic8Text, heuristic8Meta } from "./heuristic8";
import { Heuristic9Text, heuristic9Meta } from "./heuristic9";
import { Heuristic10Text, heuristic10Meta } from "./heuristic10";


export default function heuristicSelector(heuristic){
  switch (heuristic){
    case 2:
      return {
        meta: heuristic2Meta,
        TextContents: Heuristic2Text
      }
    case 3:
      return {
        meta: heuristic3Meta,
        TextContents: Heuristic3Text
      }
    case 4:
      return {
        meta: heuristic4Meta,
        TextContents: Heuristic4Text
      }
    case 5:
      return {
        meta: heuristic5Meta,
        TextContents: Heuristic5Text
      }
    case 6:
      return {
        meta: heuristic6Meta,
        TextContents: Heuristic6Text
      }
    case 7:
      return {
        meta: heuristic7Meta,
        TextContents: Heuristic7Text
      }
    case 8:
      return {
        meta: heuristic8Meta,
        TextContents: Heuristic8Text
      }
    case 9:
      return {
        meta: heuristic9Meta,
        TextContents: Heuristic9Text
      }
    case 10:
      return {
        meta: heuristic10Meta,
        TextContents: Heuristic10Text 
      }
    default:
      return {
        meta: heuristic1Meta,
        TextContents: Heuristic1Text
      }
  }
}