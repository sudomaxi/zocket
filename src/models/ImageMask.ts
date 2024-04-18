import { Dimension } from "../interfaces/Dimension.t";
import { DefaultLayers, IImageMask } from "../interfaces/ImageMask.t";
import { Position } from "../interfaces/Position.t";

export class ImageMask implements IImageMask {
  position: Position;
  src: string;
  dimension: Dimension;
  defaultLayers: DefaultLayers;
  draw: (context: CanvasRenderingContext2D) => {};
  constructor({
    src,
    position,
    dimension,
    defaultLayers,
  }: {
    src: string;
    position: Position;
    dimension: Dimension;
    defaultLayers: DefaultLayers;
  }) {
    this.position = position;
    this.dimension = dimension;
    this.src = src;
    this.defaultLayers = defaultLayers;
  }
}
