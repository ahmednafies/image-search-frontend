import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import cn from "classnames";
import { useErrorHandler } from "react-error-boundary";
import { useMediaQuery } from "react-responsive";
import cat from "./nyan.mp4";

const constraints = {
  video: { facingMode: "environment" },
};

export const VideoPreview = ({ className, setImage, label }) => {
  const player = useRef(null);
  const canvas = useRef(null);
  const [canvasWidthHeight, setCanvasWidthHeight] = useState({});
  const handleError = useErrorHandler();
  // const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const isMobile = true;

  useEffect(() => {
    let interval;
    if (canvas.current) {
      const context = canvas.current.getContext("2d");
      interval = setInterval(() => {
        const width = player.current.videoWidth;
        const height = player.current.videoHeight;
        setCanvasWidthHeight({ width, height });
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(player.current, 0, 0, width, height);
        setImage(canvas.current.toDataURL());
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [canvas, handleError, setImage]);

  useLayoutEffect(() => {
    async function getUserMedia() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        player.current.srcObject = stream;
      } catch (error) {
        handleError(error);
      }
    }

    if (player.current && isMobile) {
      getUserMedia();
    }
  }, [player, handleError, isMobile]);

  return (
    <>
      <canvas
        className="absolute hidden"
        ref={canvas}
        width={canvasWidthHeight?.width}
        height={canvasWidthHeight?.height}
      ></canvas>
      <div className="flex flex-col">
        <div className="relative self-center">
          <video
            muted
            style={{ maxWidth: "auto", height: "400px" }}
            loop={!isMobile ? true : false}
            className={cn(className)}
            src={!isMobile ? cat : undefined}
            ref={player}
            id="player"
            autoPlay
          ></video>
          {label ? (
            <p className="bg-white bottom-2 rounded-md left-2 py-1 px-2 absolute">
              {label}
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
};
