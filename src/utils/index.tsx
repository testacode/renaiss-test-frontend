import { v4 as uuidv4 } from "uuid";

import { ROLES } from "../components/OpenIa";

export const fakePromise = async (data, ms = 1000) =>
  await new Promise((resolve) => {
    return setTimeout(async () => {
      await console.log("Promise resolve: ", data);
      return await resolve(data);
    }, ms);
  });

export const isDevEnv = import.meta.env.MODE === "development";

// Creates an entirely new conversation
export const createConversation = (prompt) => ({
  id: uuidv4(),
  messages: [
    {
      author: "Human",
      content: prompt,
      role: ROLES.USER,
    },
  ],
  name: prompt,
});

// Filter out the passed id from the conversations
export const deleteConversation = (id, conversations) => {
  if (!id) return;
  if (!conversations?.length) return;

  return conversations.filter((conversation) => conversation.id !== id);
};
