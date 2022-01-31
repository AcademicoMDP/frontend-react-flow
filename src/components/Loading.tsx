import React from "react";

import style from "./Loading.module.css";

const Loading: React.FC = () => {
  return <div className={style.loader}>Cargando...</div>;
};

export default Loading;
