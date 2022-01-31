import React from "react";

interface Props {
  name: string;
  size: number;
}

const Icon: React.FC<Props> = ({name, size}) => {
  const x = size ? `@${size}x` : "";

  return <img src={`https://openweathermap.org/img/wn/${name}${x}.png`} />;
};

export default Icon;
