
import React from 'react';
import { cn } from '@/lib/utils';
import type { Character } from '@/data/characters';

interface UserAvatarProps {
  character: Character;
  isSelf?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const UserAvatar: React.FC<UserAvatarProps> = ({ 
  character, 
  isSelf = false,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-10 h-10 text-xl',
    lg: 'w-12 h-12 text-2xl'
  };

  return (
    <div 
      className={cn(
        "character-avatar", 
        isSelf ? "character-avatar-self" : "character-avatar-other",
        sizeClasses[size]
      )}
      style={{ 
        borderColor: character.color,
        backgroundColor: `${character.color}20`
      }}
    >
      <span className="select-none">{character.image}</span>
    </div>
  );
};

export default UserAvatar;
