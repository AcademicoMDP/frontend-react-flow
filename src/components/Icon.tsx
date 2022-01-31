import React from "react";

import style from "./Icon.module.css";

interface Props {
  name: string;
  size: number | undefined;
}

const Icon: React.FC<Props> = ({name, size}) => {
  const x = size ? `@${size}x` : "";

  return (
    <img
      alt={name}
      className={style.img}
      src={`https://openweathermap.org/img/wn/${name}${x}.png`}
    />
  );
};

export default Icon;
