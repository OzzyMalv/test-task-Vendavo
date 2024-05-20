import { useParams } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";
import { Box, Typography } from "@mui/material";
import UserCard from "../ui/UserCard";

const AlbumsDetails = () => {
  const { albumId } = useParams();

  const { data } = useAxios(
    `https://jsonplaceholder.typicode.com/albums/${albumId}`,
  );

  const getUserId = data?.userId;

  const { data: userData } = useAxios(
    `https://jsonplaceholder.typicode.com/users/${getUserId}`,
    !!getUserId,
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      padding={3}
    >
      <Typography variant="h4">{data?.title}</Typography>
      <Typography variant="subtitle1" paddingY={2}>
        Created by:
      </Typography>
      <Box>{userData && <UserCard info={userData} />}</Box>
    </Box>
  );
};

export default AlbumsDetails;
