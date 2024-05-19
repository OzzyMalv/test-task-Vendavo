import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const CustomCard = ({ item, id }) => {
  console.log("card");

  return (
    <Card display="flex" sx={{ margin: "20px" }} variant={"outlined"}>
      <Box display="flex" flexDirection="column">
        {item.image && (
          <CardMedia component="img" sx={{ width: 151 }} image="" alt="img" />
        )}
        <CardContent sx={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
          <Typography component="div" variant="h5" flex={1}>
            {item.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Card Id:{id}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <CardActions>
            <Button size="small" variant="outlined">
              Open Album
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default CustomCard;
