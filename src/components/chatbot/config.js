import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    createChatBotMessage("Welcome to SMILE - School Management & Innovative Learning Environment!", {
      delay: 500,
    }),
    createChatBotMessage("I can help you learn about our features and functionalities. Try asking about specific features like:\n- Student Management\n- Academic Settings\n- Examination System\n- Reports & Analytics", {
      delay: 1000,
    }),
  ],
  botName: "SMILE Assistant",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#005653",
    },
    chatButton: {
      backgroundColor: "#005653",
    },
  },
  customComponents: {},
  state: {
    category: null,
  },
};

export default config; 