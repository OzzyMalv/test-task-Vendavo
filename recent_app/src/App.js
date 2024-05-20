import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const CustomCard = React.lazy(() => import("remoteGallery/CustomCard"));

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedIds = localStorage.getItem("recent");
    const recentlyViewed = JSON.parse(storedIds);
    setData(recentlyViewed?.length ? recentlyViewed : []);
  }, []);

  return (
    <div>
      <Box padding={2}>
        <Typography variant="h4">
          {data.length ? "Recently view :" : "Open some albums"}
        </Typography>
      </Box>
      <Box>
        {data.map((title) => (
          <CustomCard key={title} item={{ title: title }} />
        ))}
      </Box>
    </div>
  );
};

export default App;
