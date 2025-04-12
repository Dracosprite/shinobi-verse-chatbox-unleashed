
import React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { characters, type Character } from '@/data/characters';
import UserAvatar from './UserAvatar';

interface CharacterSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const CharacterSelector: React.FC<CharacterSelectorProps> = ({ 
  value, 
  onChange 
}) => {
  const [open, setOpen] = React.useState(false);
  
  const selectedCharacter = characters.find(c => c.id === value) || characters[0];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between bg-naruto-scroll border-amber-700/30"
        >
          {selectedCharacter ? (
            <div className="flex items-center gap-2">
              <UserAvatar character={selectedCharacter} size="sm" />
              <span>{selectedCharacter.name}</span>
            </div>
          ) : (
            "Select a character..."
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="bg-naruto-scroll">
          <CommandInput placeholder="Search characters..." />
          <CommandEmpty>No character found.</CommandEmpty>
          <CommandGroup className="max-h-[300px] overflow-y-auto">
            {characters && characters.length > 0 ? characters.map((character) => (
              <CommandItem
                key={character.id}
                value={character.id}
                onSelect={() => {
                  onChange(character.id);
                  setOpen(false);
                }}
              >
                <div className="flex items-center gap-2">
                  <UserAvatar character={character} size="sm" />
                  <span>{character.name}</span>
                </div>
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === character.id ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            )) : (
              <CommandItem value="loading">Loading characters...</CommandItem>
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CharacterSelector;
