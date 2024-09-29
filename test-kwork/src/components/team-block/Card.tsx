import React, { FC, useState } from "react";

type CardData = {
  img: string;
  name: string;
  job: string;
  describe: string;
};

type CardProps = {
  data: CardData;
};

export const Card: FC<CardProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group cursor-pointer [perspective:1000px] size-96"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div
        className={`relative w-full h-full transform transition-transform duration-1000 ease-in-out [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateX(180deg)]" : ""
          }`}
      >
        {/* Задняя сторона */}

        <div
          className={`w-full h-full absolute bg-white flex flex-col rounded-xl text-black flex items-center justify-center text-2xl backface-hidden [transform:rotateX(180deg)] [backface-visible:hidden] transition-opacity duration-500 ${isFlipped ? "opacity-1 delay-500" : "opacity-0"
            }`}
        >
          <p className="font-semibold">Обо мне</p>
          <p className="font-medium">
            {data.describe}
          </p>
        </div>

        {/* Передняя сторона */}
        <div
          className={`w-full h-full absolute bg-white px-14 py-8 rounded-xl flex flex-col items-center justify-center text-2xl font-bold backface-hidden transition-opacity duration-500 ${isFlipped ? "opacity-0" : "opacity-1 delay-500"
            }`}
        >
          <img
            src={data.img}
            alt={data.name || "avatar"}
            className="rounded-full object-cover max-w-[223px] max-h-[223px]"
          />
          <h1 className="text-black text-3xl">{data.name}</h1>
          <p className="text-[#5B5B5B] text-2xl">{data.job}</p>
        </div>
      </div>
    </div>
  );
};
