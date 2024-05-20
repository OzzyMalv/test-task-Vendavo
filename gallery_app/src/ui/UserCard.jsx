import { Box, Button, Card, CardContent, Typography } from "@mui/material";

const UserCard = ({ info }) => {
  const { name, username, email, phone, website } = info;
  return (
    <Card display="flex" variant={"outlined"}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <CardContent
          sx={{
            display: "flex",
            gap: "8px",
            flexDirection: "column",
          }}
        >
          <Typography component="div" variant="h5" flex={1}>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Username: {username}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Email: {email}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Phone: {phone}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Website: {website}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default UserCard;
