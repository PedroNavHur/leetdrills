import { Button, Card, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from "./Link";


const ProblemData = () => {
  return (
    <Stack>
      <Typography variant="h4">Medium</Typography>
      <Link href="/about" variant="h3" underline="none" color="secondary">Product of Array Except Self</Link>
      <Typography variant="subtitle1">Rating</Typography>
    </Stack>
  )
}

const ProblemTags = () => {
  return (
    <Grid2 container>
      <Grid2>
        <Button variant="outlined">Array</Button>
      </Grid2>
    </Grid2>
  )
}

export const ProblemCard = () => {

  return (
    <Card sx={{
      width: '90vw',
      padding: '18px'
    }}
    >
      <Stack direction="row" justifyContent="space-between">
        <ProblemData />
        <ProblemTags />
      </Stack>
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
