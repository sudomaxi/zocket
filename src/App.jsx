import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "./models/Canvas.ts";
import { CTA } from "./models/CTA.ts";
import { Caption } from "./models/Caption.ts";

const TemplateEditor = () => {
  const [canvas, setCanvas] = useState(null);
  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current === null) return;
    setCanvas(
      new Canvas(canvasRef.current, {
        caption: new Caption({
          text: "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
          position: { x: 50, y: 50 },
          max_characters_per_line: 31,
          font_size: 44,
          alignment: "left",
          text_color: "#FFFFFF",
        }),
        cta: new CTA({
          text: "Shop Now",
          position: { x: 190, y: 320 },
          text_color: "#FFFFFF",
          background_color: "#000000",
        }),
        image: {
          src: "https://via.placeholder.com/1080x1080",
          position: { x: 56, y: 442 },
          dimension: { width: 900, height: 600 },
          defaultLayers: {
            mask: "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png",
            stroke:
              "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png",
            design_pattern:
              "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png",
          },
        },
      })
    );
  }, [canvasRef.current]);

  const handleBackgroundChange = (event) => {
    setCanvas(canvas.setBackground(event.target.value));
  };

  const handleFileSelection = (event) => {
    setCanvas((prev) =>
      canvas.setImage({
        ...prev.image,
        src: URL.createObjectURL(event.target.files[0]),
      })
    );
  };

  const handleCaptionTextChange = (e) => {
    let prevCaption = canvas.caption;
    prevCaption.text = e.target.value;
    let newCanvas = canvas.setCaption(prevCaption);
    setCanvas(newCanvas);
    console.log(canvas.caption.text);
  };

  const handleCTAChange = (e) => {
    console.log(e.target.value);
    let prevCTA = canvas.cta;
    prevCTA.text = e.target.value;
    let newCanvas = canvas.setCta(prevCTA);
    setCanvas(newCanvas);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col justify-center ml-10">
        <canvas
          ref={canvasRef}
          height="1080"
          width="1080"
          style={{ height: 400, width: 400 }}
        />
      </div>
      <div className="ad-customization flex-1 flex flex-col p-4 border border-gray-300 ">
        <h2 className="text-lg font-semibold mb-2">Ad customization</h2>
        <p className="text-sm text-gray-600 mb-4">
          Customize your ad and get the templates accordingly
        </p>
        <div className="change-creative mb-4">
          <label htmlFor="creative-image" className="block mb-2">
            Change the ad creative
          </label>
          <label
            htmlFor="fileInput"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Pick File
          </label>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileSelection}
          />
        </div>
        <div className="edit-contents mb-4">
          <h3 className="text-lg font-semibold mb-2">Edit Caption</h3>
          <textarea
            defaultValue={canvas?.caption.text ?? ""}
            onChange={handleCaptionTextChange}
            className="w-full  resize-y border border-gray-300 px-2 py-1"
          ></textarea>
          <h3 className="text-lg font-semibold mb-2">Edit Button</h3>
          <input
            defaultValue={canvas?.cta.text ?? ""}
            onChange={handleCTAChange}
            className="w-full resize-y border border-gray-300 px-2 py-1"
          ></input>
          <div className="color-picker mt-2">
            <h4 className="text-md font-semibold mb-2">Choose your color</h4>
            <input
              type="color"
              style={{ backgroundColor: canvas?.background }}
              defaultValue={canvas?.background ?? "#EA4C89"}
              onChange={handleBackgroundChange}
              className="w-8 h-8 rounded-full border-none cursor-pointer"
            ></input>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save
        </button>
      </div>
    </div>
  );
};

export default TemplateEditor;
