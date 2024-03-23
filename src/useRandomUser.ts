import { useState } from "react";
import { getRandomUser } from "./api";
import { User } from "./types";

export const useRandomUser = () => {
  const [user, setUser] = useState<User | null>(null);

  const receiveRandomUser = async () => {
    const user = await getRandomUser();

    if (user) {
      setUser(user);
    }
  };

  return {
    user,
    receiveRandomUser,
  };
};
