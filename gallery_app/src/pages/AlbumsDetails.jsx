import { useLocation, useMatch, useParams } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";

const AlbumsDetails = () => {
  const { albumId } = useParams();

  console.log("data");
  return <div></div>;
};

export default AlbumsDetails;
