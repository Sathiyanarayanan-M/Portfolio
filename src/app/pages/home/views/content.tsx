import * as Mui from "@mui/material";

export const Content = () => {
  return (
    <Mui.Box>
      {[...Array(100)].map(() => (
        <Mui.Typography variant="h1">Welcome to the home page</Mui.Typography>
      ))}
    </Mui.Box>
  );
};
