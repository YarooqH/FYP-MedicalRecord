import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-pro"});


export const chatbotOptions = {
    tooltip: {
        mode: "START",
        text: "Hey! Im your medical assistant!",
    },
    header: {
        title: (
            <h3 style={{margin: 0}} >MedLlama</h3>
        ),
        showAvatar: false,
    },
    notification: {
        disabled: true,
    },
    chatHistory: {
        disabled: false,
        maxEntries: 30,
        storageKey: "medllama-history",
        viewChatHistoryButtonText: "Load Chat History ⟳",
        chatHistoryLineBreakText: "----- Previous Chat History -----",
    },
}