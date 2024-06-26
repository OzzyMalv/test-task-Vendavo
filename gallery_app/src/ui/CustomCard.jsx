import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { saveRecentToLocalStorage } from "../utils/func";

const CustomCard = ({ item, id }) => {
  const handleClick = () => {
    // can be done with full data or just ids and then pulled
    saveRecentToLocalStorage(item.title);
  };

  return (
    <Card display="flex" sx={{ margin: "20px" }} variant={"outlined"}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ height: "180px" }}
      >
        {item.image && (
          <CardMedia component="img" sx={{ width: 151 }} image="" alt="img" />
        )}
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <Typography component="div" variant="h5" flex={1}>
            {item.title}
          </Typography>
          {id && (
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Album Id:{id}
            </Typography>
          )}
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <CardActions>
            {item.id && (
              <Button
                component={Link}
                to={`/albums/${item.id}`}
                size="small"
                variant="outlined"
                onClick={handleClick}
              >
                Open Album
              </Button>
            )}
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default CustomCard;
