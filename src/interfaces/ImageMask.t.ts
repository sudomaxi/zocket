import { Canvas } from "../models/Canvas";
import { Dimension } from "./Dimension.t";
import { Position } from "./Position.t";

export interface IImageMask {
  position: Position;
  src: string;
  dimension: Dimension;
  draw: (context: CanvasRenderingContext2D)=> void;
  defaultLayers: DefaultLayers;
}

export interface DefaultLayers {
  mask: string;
  stroke: string;
  design_pattern: string;
}
