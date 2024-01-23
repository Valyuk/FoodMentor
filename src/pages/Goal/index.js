import FlexBox from "../../components/FlexBetween";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Item from "../../components/Item";
import { Box, Grid } from "@mui/material";
import Main from "../../components/Main";
import MainTitle from "../../components/MainTitle";

const Goal = () => {
  return (
    <Box>
      <FlexBox>
        <Title>The Goal</Title>
        <Text>
          <Box>Focus on the health benefits you need</Box>
          <Box>Balanced nutrition will let you achieve them</Box>
        </Text>
      </FlexBox>
      <Main>
        <MainTitle>What are your goals?</MainTitle>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
};

export default Goal;
