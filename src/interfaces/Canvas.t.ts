import { CTA } from "../models/CTA";
import { Canvas } from "../models/Canvas";
import { Caption } from "../models/Caption";
import { ImageMask } from "../models/ImageMask";
import { Dimension } from "./Dimension.t";
import { Position } from "./Position.t";

export interface ICanvas {
  canvas: HTMLCanvasElement;
  dimension: Dimension;
  position: Position;
  context: CanvasRenderingContext2D | null;
  background: string;
  caption: Caption;
  cta: CTA;
  image: ImageMask;

  initialize(): void;
  setBackground: (color: string) => Canvas;
  setPostion: (position: Position) => Canvas;
  setDimension: (dimension: Dimension) => Canvas;

  setCaption: (caption: Caption) => Canvas;
  setCta: (cta: CTA) => Canvas;
  setImage: ({ src, position, dimension, defaultLayers }) => Canvas;
  drawAll: () => void;
}
