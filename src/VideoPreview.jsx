import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import cn from "classnames";
import { useErrorHandler } from "react-error-boundary";
import { useMediaQuery } from "react-responsive";
import cat from "./nyan.mp4";

const constraints = {
  video: { facingMode: "environment" },
};

export const VideoPreview = ({ foo, className }) => {
  const player = useRef(null);
  const canvas = useRef(null);
  const [imageData /*setImageData*/] = useState("");
  const handleError = useErrorHandler();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  useEffect(() => {
    let interval;
    if (canvas.current) {
      const context = canvas.current.getContext("2d");
      interval = setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          player.current,
          0,
          0,
          canvas.current.width,
          canvas.current.height
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [canvas, handleError]);

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

  // const onClick = () => {
  //   setImageData(canvas.current.toDataURL());
  // };

  return (
    <>
      <canvas className="absolute opacity-25" ref={canvas}></canvas>
      <video
        muted
        loop={!isMobile ? true : false}
        className={cn(className, "w-full h-full max-w-2xl")}
        src={!isMobile ? cat : undefined}
        ref={player}
        id="player"
        autoPlay
      ></video>
      <div>{imageData}</div>
    </>
  );
};
