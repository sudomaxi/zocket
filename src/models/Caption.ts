import { ICaption } from "../interfaces/Caption.t";
import { Position } from "../interfaces/Position.t";

export class Caption implements ICaption {
  text: string;
  position: Position;
  max_characters_per_line?: number | undefined;
  font_size: number;
  alignment: string;
  text_color: string;
  constructor(caption: ICaption) {
    this.text = caption.text;
    this.position = caption.position;
    this.font_size = caption.font_size;
    this.alignment = caption.alignment;
    this.text_color = caption.text_color;
    this.max_characters_per_line = caption.max_characters_per_line;
  }
}
