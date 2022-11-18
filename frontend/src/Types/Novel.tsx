import Genre from "./Genre";

export default class Novel {
  title: string;
  author: string;
  genre: Genre;
  description: string;

  constructor(
    title: string,
    author: string,
    genre: Genre,
    description: string
  ) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.description = description;
  }
}
