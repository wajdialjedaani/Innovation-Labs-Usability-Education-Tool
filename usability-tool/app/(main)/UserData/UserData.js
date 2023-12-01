import { createContext } from "react";

//userData is an object

//The heuristicData key hold data about each individual heuristic. It is an array
//The index of each element corresponds with the data for that heuristic (plus 1 because of 0 indexing)
//For example, userData[0] holds data for heuristic 1. userData[1] holds data for heuristic 2,...

//The 'data' key in each userData element holds the data for that heuristic that will be display in a graph
//Anything not displayed as a graph is outside of that key

const userData = {
  heuristicData: [
    {
      data: [
        {
          name: "Number of Questions Right",
          value: 0,
        },
        {
          name: "Number of Questions Wrong",
          value: 0,
        },
      ],
      questionsWrong: ["First Question Wrong", "Second Question Wrong"],
    },
    {
      data: [
        {
          name: "Number of Questions Right",
          value: 0,
        },
        {
          name: "Number of Questions Wrong",
          value: 0,
        },
      ],
      questionsWrong: ["First Question Wrong", "Second Question Wrong"],
    },
    {
      data: [
        {
          name: "Number of Questions Right",
          value: 0,
        },
        {
          name: "Number of Questions Wrong",
          value: 0,
        },
      ],
      questionsWrong: ["First Question Wrong", "Second Question Wrong"],
    },
    {
      data: [
        {
          name: "Number of Questions Right",
          value: 0,
        },
        {
          name: "Number of Questions Wrong",
          value: 0,
        },
      ],
      questionsWrong: ["First Question Wrong", "Second Question Wrong"],
    },
    {
      data: [
        {
          name: "Number of Questions Right",
          value: 0,
        },
        {
          name: "Number of Questions Wrong",
          value: 10,
        },
      ],
      questionsWrong: ["First Question Wrong", "Second Question Wrong"],
    },
    {
      data: [
        {
          name: "Number of Questions Right",
          value: 0,
        },
        {
          name: "Number of Questions Wrong",
          value: 0,
        },
      ],
      questionsWrong: ["First Question Wrong", "Second Question Wrong"],
    },
    {
      data: [
        {
          name: "Number of Questions Right",
          value: 10,
        },
        {
          name: "Number of Questions Wrong",
          value: 0,
        },
      ],
      questionsWrong: ["First Question Wrong", "Second Question Wrong"],
    },
    {
      data: [
        {
          name: "Number of Questions Right",
          value: 0,
        },
        {
          name: "Number of Questions Wrong",
          value: 0,
        },
      ],
      questionsWrong: ["First Question Wrong", "Second Question Wrong"],
    },
    {
      data: [
        {
          name: "Number of Questions Right",
          value: 0,
        },
        {
          name: "Number of Questions Wrong",
          value: 0,
        },
      ],
      questionsWrong: ["First Question Wrong", "Second Question Wrong"],
    },
    {
      data: [
        {
          name: "Number of Questions Right",
          value: 20,
        },
        {
          name: "Number of Questions Wrong",
          value: 0,
        },
      ],
      questionsWrong: ["First Question Wrong", "Second Question Wrong"],
    },
  ],
  progressData: [
    {
      name: "Total completed",
      value: 10,
    },
    {
      name: "Total incomplete",
      value: 20,
    },
  ],
};

export const userContext = createContext(userData);
