import useData from "./useData";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => useData<Genre>({ endpoint: "/genres" });

export default useGenre;
