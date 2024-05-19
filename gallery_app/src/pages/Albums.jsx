import { useAxios } from "../hooks/useAxios";
import CustomCard from "../ui/CustomCard";
import { Box, TextField } from "@mui/material";
import { useDebouncedChange } from "../hooks/useDebouncedChange";
import axios from "axios";

const Albums = () => {
  const { data, isPending, setData } = useAxios(
    "https://jsonplaceholder.typicode.com/albums/",
  );

  const onSearch = async (title) => {
    const searchTerm = title ? `?title=${title}` : "";
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/albums${searchTerm}`,
    );
    setData(data);
  };

  const { handleKeyPress, handleOnChange } = useDebouncedChange(
    onSearch,
    false,
  );

  return (
    <div>
      <Box display="flex" justifyContent="flex-end" padding={2.5}>
        <TextField
          id="search-albums"
          label="Search Albums"
          variant="outlined"
          size="small"
          onKeyUp={handleKeyPress}
          onChange={handleOnChange}
        />
      </Box>

      <div>
        {data?.map((item) => {
          return <CustomCard key={item.id} item={item} id={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Albums;
