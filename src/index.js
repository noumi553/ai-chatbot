import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ChatBord from './chat-bord/ChatBord';

createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ChatBord />
   </React.StrictMode>
);

reportWebVitals();
