import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <>
      <div>
        <h2 className="text-center text-xl text-white pt-3">
          This Magic Brain will detect faces in your pictures. Give it a try!
        </h2>
        <div className="flex justify-center items-center pt-3">
          <input
            className="rounded-l-md p-4 w-[55%] md:w-[40%] xl:w-[40%] outline-none"
            type="text"
            onChange={onInputChange}
          />
          <button
            onClick={onButtonSubmit}
            className="rounded-r-md w-[35%] md:w-[20%] xl:w-[20%] p-4  text-white bg-purple-600"
          >
            Detect
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageLinkForm;
