import { ICanvas } from "../interfaces/Canvas.t";
import { Dimension } from "../interfaces/Dimension.t";
import { Position } from "../interfaces/Position.t";
import { CTA } from "./CTA.ts";
import { Caption } from "./Caption.ts";
import { ImageMask } from "./ImageMask.ts";

interface ICanvasProps {
  caption: Caption;
  cta: CTA;
  image: ImageMask;
}

export class Canvas implements ICanvas {
  canvas: HTMLCanvasElement;
  dimension: Dimension;
  position: Position;
  context: CanvasRenderingContext2D | null;
  background: string;
  caption: Caption;
  cta: CTA;
  image: ImageMask;
  strokeImage: HTMLImageElement;
  maskImage: HTMLImageElement;
  mainImage: HTMLImageElement;
  designPatternImage: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement, template?: ICanvasProps) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.context!.globalCompositeOperation = "source-over";
    this.background = "#0369A1";
    this.caption =
      template?.caption ??
      new Caption({
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        position: {
          x: 50,
          y: 50,
        },
        font_size: 44,
        alignment: "left",
        text_color: "#FFFFFF",
      });
    this.cta =
      template?.cta ??
      new CTA({
        text: "Press here",
        position: {
          x: 190,
          y: 320,
        },
        text_color: "FFFFFF",
        background_color: "#000000",
      });
    this.setImage(
      template?.image ?? {
        src: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        position: {
          x: 0,
          y: 0,
        },
        dimension: {
          width: 1080,
          height: 1080,
        },
        defaultLayers: {
          design_pattern:
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          stroke:
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          mask: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        },
      }
    );
  }
  drawAll(): void {
    this.drawBackground();
    this.drawCaption();
    this.drawCta();
    this.context!.createPattern(this.designPatternImage, "repeat");
    this.context!.drawImage(
      this.strokeImage,
      this.image.position.x,
      this.image.position.y,
      this.image.dimension.width,
      this.image.dimension.height
    );
    this.context!.drawImage(
      this.maskImage,
      this.image.position.x,
      this.image.position.y,
      this.image.dimension.width,
      this.image.dimension.height
    );
    this.context!.drawImage(
      this.mainImage,
      this.image.position.x,
      this.image.position.y,
      this.image.dimension.width,
      this.image.dimension.height
    );
  }
  drawBackground(): void {
    this.context!.fillStyle = this.background;
    this.context!.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  drawCaption(): void {
    this.context!.fillStyle = this.caption.text_color;
    this.context!.font = `${this.caption.font_size}px Arial`;
    this.context!.textAlign = this.caption.alignment as CanvasTextAlign;
    this.context!.fillText(
      this.caption.text,
      this.caption.position.x,
      this.caption.position.y
    );
  }
  drawCta(): void {
    this.context!.fillStyle = this.cta.background_color;
    this.context!.fillRect(this.cta.position.x, this.cta.position.y, 100, 50);
    this.context!.fillStyle = this.cta.text_color;
    this.context!.font = "20px Arial";
    this.context!.fillText(
      this.cta.text,
      this.cta.position.x + 10,
      this.cta.position.y + 30
    );
  }
  initialize(): void {}
  setBackground(color: string): Canvas {
    this.background = color;
    this.drawAll();
    return this;
  }
  setPostion(position: Position): Canvas {
    this.position = position;
    this.drawAll();
    return this;
  }
  setDimension(dimension: Dimension): Canvas {
    this.dimension = dimension;
    this.drawAll();
    return this;
  }
  setCaption(caption: Caption): Canvas {
    this.caption = caption;
    this.drawAll();
    return this;
  }
  setCta(cta: CTA): Canvas {
    this.cta = cta;
    this.drawAll();
    return this;
  }
  setImage({ src, position, dimension, defaultLayers }): Canvas {
    this.image = new ImageMask({ src, position, dimension, defaultLayers });
    this.designPatternImage = new Image();
    this.designPatternImage.src = this.image.defaultLayers.design_pattern;
    this.strokeImage = new Image();
    this.strokeImage.src = this.image.defaultLayers.stroke;
    this.maskImage = new Image();
    this.maskImage.src = this.image.defaultLayers.mask;
    this.mainImage = new Image();
    this.mainImage.src = this.image.src;
    this.designPatternImage.onload = () => {
      this.drawAll();
    };
    this.strokeImage.onload = () => {
      this.drawAll();
    };
    this.maskImage.onload = () => {
      this.drawAll();
    };
    this.mainImage.onload = () => {
      this.drawAll();
    };
    return this;
  }
}
