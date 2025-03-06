import { useState } from "react";

export const CatImage = ({ url, id }: { url: string; id: number }) => {
  const [key] = useState(Date.now() + Math.random());

  return <img src={url} className="logo" alt="cat" key={key} id={String(id)} />;
};

export default CatImage;
