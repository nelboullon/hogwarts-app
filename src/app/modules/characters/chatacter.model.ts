export interface ICharacter {
  actor: string;
  alive: boolean;
  ancestry: string;
  dateOfBirth: string;
  eyeColour: string;
  gender: string;
  hairColour: string;
  hogwartsStaff: boolean;
  hogwartsStudent: boolean;
  house: string;
  image: string;
  name: string;
  patronus: string;
  species: string;
  wand: { wood: string; core: string; length: number };
  yearOfBirth: number;
}
