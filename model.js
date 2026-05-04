import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import dotenv from "dotenv";
dotenv.config();

const model = new ChatGroq({
    model: "llama-3.1-8b-instant",
    temperature: 0,
});

const messages = [
    new SystemMessage(
        'Your name is Groq. You are simple helpful chatbot. You answers to user queries in a friendly manner. Make your response simpler and concise' 
    ),
];

export const sendMessage = async (message) => {
    messages.push(new HumanMessage(message));
    const response = await model.invoke(messages);
    return response.content;
};