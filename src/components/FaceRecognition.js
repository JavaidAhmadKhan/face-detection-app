import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="flex items-center m-6 justify-center ">
      <img
        id="inputimage"
        width={500}
        height="auto"
        src={imageUrl}
        alt="face-recognition"
      />
    </div>
  );
};

export default FaceRecognition;
