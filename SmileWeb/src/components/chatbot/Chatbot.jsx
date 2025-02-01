import { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { FaComments, FaTimes } from 'react-icons/fa';

const ChatbotComponent = () => {
  const [showBot, setShowBot] = useState(false);

  const toggleBot = () => {
    setShowBot(!showBot);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {showBot && (
        <div className="mb-4 rounded-lg shadow-xl">
          <div className="bg-teal-600 p-2 rounded-t-lg flex justify-between items-center">
            <span className="text-white font-semibold">SMILE Assistant</span>
            <button
              onClick={toggleBot}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes />
            </button>
          </div>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            headerText="Chat with SMILE Assistant"
          />
        </div>
      )}
      <button
        onClick={toggleBot}
        className="bg-teal-600 hover:bg-teal-700 text-white rounded-full p-4 shadow-lg transition-colors flex items-center justify-center"
      >
        <FaComments className="text-2xl" />
      </button>
    </div>
  );
};

export default ChatbotComponent; 