import { ICTA } from "../interfaces/CTA.t";
import { Position } from "../interfaces/Position.t";

export class CTA implements ICTA {
  text: string;
  position: Position;
  text_color: string;
  background_color: string;
  constructor(cta: ICTA) {
    this.text = cta.text;
    this.position = cta.position;
    this.text_color = cta.text_color;
    this.background_color = cta.background_color;
  }
}