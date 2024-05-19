import axios from "axios";

export const getAlbums = async (query) => {
  return await axios.get("https://jsonplaceholder.typicode.com/albums/");
};
