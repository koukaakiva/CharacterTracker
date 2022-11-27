import Character from "./Character.type";
import Novel from "./Novel.type";

export default class CharacterResponse {
  character: Character;
  novelID: number;

  constructor(character: Character, novelID: number) {
    this.character = character;
    this.novelID = novelID;
  }
}
