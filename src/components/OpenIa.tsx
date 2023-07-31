import OpenAI from "openai";

const openAI = new OpenAI({
  apiKey: import.meta.env.VITE_RENAISS_OPEN_AI_API_KEY,
});

export default openAI;

export const newConversation = async (prompt, role) => {
  const chatCompletion = await openAI.chat.completions.create({
    messages: [
      {
        content: prompt,
        name: prompt,
        role: role || ROLES.USER,
      },
    ],
    model: MODELS[1].value, // "user"
  });

  return chatCompletion;
};

export const TEMPERATURE = 0.7;

export const ROLES = {
  ASSISTANT: "assistant",
  FUNCTION: "function",
  SYSTEM: "system",
  USER: "user",
};

export const MODELS = [
  {
    name: "Completion Model (legacy)",
    value: "text-davinci-003",
  },
  {
    name: "Chat Completion Model 3.5 (standard)",
    value: "gpt-3.5-turbo",
  },
  {
    name: "Chat Completion Model 4",
    value: "gpt-4",
  },
];
