import { FC, useState } from "react";

const FileDropzone: FC = () => {
  const [files, setFiles] = useState<File | null | undefined>(null);

  return (
    <>
      <div className="relative bg-white xl:bg-[#FCFCFC] rounded-3xl row-span-3 py-2 xl:w-full xl:h-auto w-[46%] h-[45%] mx-auto">
        <input
          type="file"
          onChange={(e) => setFiles(e.target.files?.[0])}
          className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
        />
        <div className="flex h-full items-center justify-center p-10 absolute top-0 right-0 left-0 m-auto">
          {files ? (
            <>
              <div className="text-sm">{files.name}</div>
              <button type="button"
                className="ml-2 text-sm py-1 px-2 rounded-full bg-red-400 text-gray-100"
                onClick={() => setFiles(null)}
              >
                X
              </button>
            </>
          ) : (
            <>
              <div className="absolute xl:w-full text-center top-3 text-xs xl:text-base font-medium text-[#A0A2AF]">Add product image</div>
              <div className="flex items-center justify-center xl:w-full h-full">
                <div className="w-8 h-8 xl:w-12 xl:h-12 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 55 55">
                    <path
                      d="M5993.275,748.25h18.618V729.637a4.416,4.416,0,0,1,4.415-4.416h.1a4.416,4.416,0,0,1,4.415,4.416V748.25h18.618a4.416,4.416,0,0,1,4.416,4.415h0a4.416,4.416,0,0,1-4.416,4.416h-18.618v18.725a4.415,4.415,0,0,1-4.415,4.415h-.1a4.415,4.415,0,0,1-4.415-4.415V757.081h-18.618a4.416,4.416,0,0,1-4.416-4.416h0A4.416,4.416,0,0,1,5993.275,748.25Z"
                      transform="translate(-5988.859 -725.221)"
                      fill="#00b1b2"
                    />
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="h-full text-sm text-[#7E8096] text-center mt-2">
        You can upload images by dragging and dropping them into the area above or by clicking the + button.
      </div>
    </>
  );
};

export default FileDropzone;
