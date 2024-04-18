import { Position } from "./Position.t";

export interface ICaption {
  text: string;
  position: Position;
  max_characters_per_line?: number;
  font_size: number;
  alignment: string;
  text_color: string;
}