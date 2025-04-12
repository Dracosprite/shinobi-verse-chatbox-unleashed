
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import CharacterSelector from './CharacterSelector';
import { type Character } from '@/data/characters';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  userCharacter: Character;
  onChangeCharacter: (characterId: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  userCharacter,
  onChangeCharacter
}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="p-4 border-t border-amber-800/30 bg-naruto-scroll/70 backdrop-blur-sm">
      <div className="mb-3">
        <CharacterSelector 
          value={userCharacter.id} 
          onChange={onChangeCharacter} 
        />
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className={cn(
            "naruto-input flex-1",
            "focus-visible:ring-1 focus-visible:ring-naruto-orange focus-visible:ring-offset-0"
          )}
        />
        
        <button 
          type="submit" 
          className="send-button"
          disabled={!message.trim()}
        >
          <Send size={18} />
          <span className="hidden sm:inline">Send</span>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
