import { User } from "./types";

const ENDPOINTS = {
  getUserById: "https://jsonplaceholder.typicode.com/users/:id",
};

const logger = {
  error: (message: string) => {
    console.error(message);
  },
};

const parseFetchError = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
};

const getRandomId = () => {
  return String(Math.floor(Math.random() * (10 - 1)) + 1);
};

export const getRandomUser = async () => {
  const id = getRandomId();
  try {
    const response = await fetch(`${ENDPOINTS.getUserById.replace(":id", id)}`);
    const parsedResponse = await response.json();

    return parsedResponse as User;
  } catch (error) {
    logger.error(parseFetchError(error));

    return null;
  }
};
