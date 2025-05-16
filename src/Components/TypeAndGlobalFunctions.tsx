import { Images } from "../assets/Images";

export type TFishAndCount = {
  name: string,
  url: string,
  guess: string,
}

export type ScoreType = {
  correctCount: number,
  incorrectCount: number,
}

export type BoardProps = {
  correctCount: number,
  incorrectCount: number,
  updateScore: (isCorrect: boolean) => void
}

export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

const answersLeft: string[] = ["trout", "salmon", "tuna", "shark"];

export const guessCount = (a: number, b: number) => a + b;

export const nextQuestion = (i: number): string[] => answersLeft.slice(i);

export const nextFish = (fish: string = nextQuestion(guessCount(0, 0))[0]): string => {
  const match = initialFishes.find(data => data.name === fish)
  return match ? match.url : ''
}

export const firstName = nextQuestion(0)[0];