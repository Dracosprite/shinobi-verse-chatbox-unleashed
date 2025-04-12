
import React from 'react';
import { cn } from '@/lib/utils';
import type { Character } from '@/data/characters';
import UserAvatar from './UserAvatar';

export interface Message {
  id: string;
  text: string;
  sender: Character;
  timestamp: Date;
  isSelf: boolean;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { text, sender, timestamp, isSelf } = message;
  
  const formattedTime = timestamp.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className={cn(
      "flex gap-2 mb-4",
      isSelf ? "flex-row-reverse" : "flex-row"
    )}>
      <UserAvatar character={sender} isSelf={isSelf} />
      
      <div className="flex flex-col">
        <div className={cn(
          "message-sender",
          isSelf ? "text-right" : "text-left"
        )}>
          {sender.name}
        </div>
        
        <div className={cn(
          "message-bubble",
          isSelf ? "message-bubble-self" : "message-bubble-other"
        )}>
          {text}
        </div>
        
        <div className={cn(
          "text-xs text-gray-500 mt-1",
          isSelf ? "text-right" : "text-left"
        )}>
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
