import { useAxios } from "../hooks/useAxios";
import CustomCard from "../ui/CustomCard";
import { Box, TextField } from "@mui/material";
import { useDebouncedChange } from "../hooks/useDebouncedChange";
import axios from "axios";
import { FixedSizeList } from "react-window";

const Albums = () => {
  const { data, isPending, setData, setIsPending } = useAxios(
    "https://jsonplaceholder.typicode.com/albums/",
  );

  const onSearch = async (title) => {
    const searchTerm = title ? `?title=${title}` : "";
    setIsPending(true);
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/albums${searchTerm}`,
    );
    setIsPending(false);
    setData(data);
  };

  const { handleKeyPress, handleOnChange } = useDebouncedChange(
    onSearch,
    isPending,
  );

  const row = ({ index, style }) => {
    return (
      <div style={style}>
        <CustomCard
          key={data[index].id}
          item={data[index]}
          id={data[index].id}
        />
      </div>
    );
  };

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
          disabled={isPending}
        />
      </Box>

      <div>
        {!!data?.length && (
          <FixedSizeList
            height={window.innerHeight - 136}
            width={"100%"}
            itemCount={data?.length || 0}
            itemSize={230}
          >
            {row}
          </FixedSizeList>
        )}
      </div>
    </div>
  );
};

export default Albums;
