import { Card, Stack, Typography } from "@mui/material";


const ProblemData = () => {
  return (
    <Stack>
      <Typography variant="h4">Medium</Typography>
      <Typography variant="h3">Product of Array Except Self</Typography>
      <Typography variant="subtitle1">Rating</Typography>
    </Stack>
  )
}

export const ProblemCard = () => {

  return (
    <Card sx={{
      width: '100%',
      padding: '24px'
    }}
    >
      <ProblemData />
    </Card>
  );
};

export const ProblemList = () => {

  return (
    <div>
      <ProblemCard />
    </div>
  );
};
