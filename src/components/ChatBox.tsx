
import React, { useState, useEffect, useRef } from 'react';
import { Scroll, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import ChatMessage, { type Message } from './ChatMessage';
import ChatInput from './ChatInput';
import { characters, getRandomCharacter } from '@/data/characters';
import { toast } from '@/components/ui/use-toast';

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Welcome to the Shinobi Chat! I'm Naruto Uzumaki, believe it!",
    sender: characters[0], // Naruto
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    isSelf: false
  },
  {
    id: '2',
    text: "Hmph. Don't be so loud, loser.",
    sender: characters[1], // Sasuke
    timestamp: new Date(Date.now() - 1000 * 60 * 4),
    isSelf: false
  },
  {
    id: '3',
    text: "Sasuke! Be nice! We're welcoming new people to our chat.",
    sender: characters[2], // Sakura
    timestamp: new Date(Date.now() - 1000 * 60 * 3),
    isSelf: false
  },
  {
    id: '4',
    text: "Now now, let's all get along. Welcome to our Shinobi Chat. Share your thoughts on Naruto here!",
    sender: characters[3], // Kakashi
    timestamp: new Date(Date.now() - 1000 * 60 * 2),
    isSelf: false
  }
];

// Bot responses when a user sends a message
const botResponses = [
  "That's an interesting thought, believe it!",
  "I see your point. A true shinobi always considers different perspectives.",
  "Hmph. Not bad.",
  "A worthy observation from a fellow ninja!",
  "As the Hokage would say, very insightful!",
  "Your ninja way is strong!",
  "That's my ninja way too!",
  "Dattebayo! I couldn't agree more!",
  "That's what I've been saying all along!",
  "Interesting! Let's discuss more over ramen sometime!",
  "Excellent point. Your nindo is wise."
];

const getRandomBotResponse = () => {
  const randomIndex = Math.floor(Math.random() * botResponses.length);
  return botResponses[randomIndex];
};

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [userCharacter, setUserCharacter] = useState(getRandomCharacter());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: userCharacter,
      timestamp: new Date(),
      isSelf: true
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botCharacter = characters[Math.floor(Math.random() * 4)]; // Random from first 4 characters
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getRandomBotResponse(),
        sender: botCharacter,
        timestamp: new Date(),
        isSelf: false
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000 + Math.random() * 2000);
  };
  
  const handleChangeCharacter = (characterId: string) => {
    const character = characters.find(c => c.id === characterId);
    if (character) {
      setUserCharacter(character);
      toast({
        title: "Character Changed",
        description: `You are now chatting as ${character.name}`,
        duration: 2000
      });
    }
  };

  return (
    <div className="flex flex-col h-full max-w-3xl w-full mx-auto rounded-lg overflow-hidden shadow-lg border border-amber-800/30">
      {/* Header */}
      <div className="bg-naruto-orange text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Scroll className="h-6 w-6" />
          <h1 className="font-bold text-xl tracking-wide">Shinobi Verse Chat</h1>
        </div>
        <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
          <Sparkles size={16} />
          <span>Naruto Fans</span>
        </div>
      </div>
      
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto scroll-container p-4">
        <div className="scroll-edge scroll-edge-top" />
        
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        <div ref={messagesEndRef} />
        <div className="scroll-edge scroll-edge-bottom" />
      </div>
      
      {/* Input */}
      <ChatInput 
        onSendMessage={handleSendMessage} 
        userCharacter={userCharacter}
        onChangeCharacter={handleChangeCharacter}
      />
    </div>
  );
};

export default ChatBox;
