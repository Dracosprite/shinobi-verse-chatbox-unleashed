
export type Character = {
  id: string;
  name: string;
  village: Village;
  color: string;
  image: string;
};

export type Village = 
  | 'leaf'
  | 'sand'
  | 'mist'
  | 'cloud'
  | 'stone'
  | 'sound'
  | 'akatsuki';

export const villages = {
  leaf: {
    name: 'Hidden Leaf Village',
    color: '#4CAF50'
  },
  sand: {
    name: 'Hidden Sand Village',
    color: '#E6C069'
  },
  mist: {
    name: 'Hidden Mist Village',
    color: '#B3E0F2'
  },
  cloud: {
    name: 'Hidden Cloud Village',
    color: '#F0F0F0'
  },
  stone: {
    name: 'Hidden Stone Village',
    color: '#707070'
  },
  sound: {
    name: 'Hidden Sound Village',
    color: '#9B87F5'
  },
  akatsuki: {
    name: 'Akatsuki',
    color: '#DF3A4A'
  }
};

export const characters: Character[] = [
  {
    id: 'naruto',
    name: 'Naruto Uzumaki',
    village: 'leaf',
    color: '#FF7800',
    image: '🦊'
  },
  {
    id: 'sasuke',
    name: 'Sasuke Uchiha',
    village: 'leaf',
    color: '#3D5AFE',
    image: '👁️'
  },
  {
    id: 'sakura',
    name: 'Sakura Haruno',
    village: 'leaf',
    color: '#F06292',
    image: '🌸'
  },
  {
    id: 'kakashi',
    name: 'Kakashi Hatake',
    village: 'leaf',
    color: '#78909C',
    image: '📖'
  },
  {
    id: 'gaara',
    name: 'Gaara',
    village: 'sand',
    color: '#E53935',
    image: '🏺'
  },
  {
    id: 'itachi',
    name: 'Itachi Uchiha',
    village: 'akatsuki',
    color: '#D32F2F',
    image: '🔴'
  },
  {
    id: 'hinata',
    name: 'Hinata Hyuga',
    village: 'leaf',
    color: '#9575CD',
    image: '👀'
  },
  {
    id: 'shikamaru',
    name: 'Shikamaru Nara',
    village: 'leaf',
    color: '#8D6E63',
    image: '🦌'
  },
  {
    id: 'jiraiya',
    name: 'Jiraiya',
    village: 'leaf',
    color: '#B71C1C',
    image: '🐸'
  },
  {
    id: 'tsunade',
    name: 'Tsunade',
    village: 'leaf',
    color: '#7CB342',
    image: '💎'
  }
];

export const getRandomCharacter = (): Character => {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
};
