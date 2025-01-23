import React, { useEffect, useState } from "react";

export default function PokemonImage({ url, name }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setImageUrl(data.sprites.front_default);
      } catch (error) {
        setError(true);
      }
    };

    fetchImage();
  }, [url]);

  return <img src={imageUrl} className="w-52 h-52 mx-auto" loading="lazy" />;
}
