class CanvasEditor {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;
  background: string;
  captionText: string;
  ctaText: string;
  
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.background = "#0369A1";
    this.captionText = "";
    this.ctaText = "";
  }

  initialize() {
    this.canvas.width = 1080;
    this.canvas.height = 1080;
    this.context!.fillStyle = this.background;
    this.context?.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  setBackground(color: string) {
    this.background = color;
    this.context!.fillStyle = this.background;
    this.context!.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  setCaptionText(text: string ) {
    this.captionText = text;
  }

  setCtaText(text: string) {
    this.ctaText = text;
  }
}

export default CanvasEditor;
