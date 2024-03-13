import { heuristic1Meta, Heuristic1Text } from "./heuristic1";
import { Heuristic2Text, heuristic2Meta } from "./heuristic2";
import { Heuristic3Text, heuristic3Meta } from "./heuristic3";
import { Heuristic4Text, heuristic4Meta } from "./heuristic4";
import { Heuristic5Text, heuristic5Meta } from "./heuristic5";


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
    default:
      return {
        meta: heuristic1Meta,
        TextContents: Heuristic1Text
      }
  }
}