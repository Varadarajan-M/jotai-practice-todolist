import { v4 as uuidv4 } from "uuid";

export const generateId = () => uuidv4();

export const sleep = (ms: number) => {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
};
