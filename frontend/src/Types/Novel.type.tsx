import Character from "./Character.type";
import Genre from "./Genre";

export default class Novel {
  id: number;
  title: string;
  author: string;
  genre: Genre;
  description: string;
  characters: Character[];

  constructor(
    id: number,
    title: string,
    author: string,
    genre: Genre,
    description: string,
    characters: Character[]
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.description = description;
    this.characters = characters;
  }
}
