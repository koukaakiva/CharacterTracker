import Novel from "./Novel.type";

export default class Character {
  id: number;
  name: string;
  description: string;
  quote: string;
  isBiggerThanABreadBox: boolean;
  fromNovel: Novel;

  constructor(
    id: number,
    name: string,
    description: string,
    quote: string,
    isBiggerThanABreadBox: boolean,
    fromNovel: Novel
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quote = quote;
    this.isBiggerThanABreadBox = isBiggerThanABreadBox;
    this.fromNovel = fromNovel;
  }
}
