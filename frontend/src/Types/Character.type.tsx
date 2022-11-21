export default class Character {
  id: number;
  name: string;
  description: string;
  quote: string;
  isBiggerThanABreadBox: boolean;

  constructor(
    id: number,
    name: string,
    description: string,
    quote: string,
    isBiggerThanABreadBox: boolean
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quote = quote;
    this.isBiggerThanABreadBox = isBiggerThanABreadBox;
  }
}
