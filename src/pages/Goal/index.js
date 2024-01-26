import FlexBox from "../../components/FlexBetween";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Item from "../../components/Item";
import { Box, Grid, Typography } from "@mui/material";
import Main from "../../components/Main";
import MainTitle from "../../components/MainTitle";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Girl1 } from "../../assets/Girl1";
import { Girl2 } from "../../assets/Girl2";
import { Girl3 } from "../../assets/Girl3";
import { Girl4 } from "../../assets/Girl4";

const StyledTypography = styled(Typography)({
  width: "83.394px",
  color: "var(--General-Black, #2D3436)",
  textAlign: "start",
  fontFamily: "Inter",
  fontSize: "16.679px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "22.933px",
  letterSpacing: "0.208px",
  textTransform: "none",
});

const Goal = () => {
  const navigate = useNavigate();
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
        <Grid container sx={{ maxWidth: "360px" }}>
          <Grid
            onClick={() => navigate("/measure")}
            item
            sx={{ margin: "0 16px 15.64px 0px" }}>
            <Item>
              <StyledTypography>Lose Weight</StyledTypography>
              <Girl1 />
            </Item>
          </Grid>
          <Grid item onClick={() => navigate("/measure")}>
            <Item>
              <StyledTypography>Gain Muscle</StyledTypography>
              <Girl2 />
            </Item>
          </Grid>
          <Grid
            onClick={() => navigate("/measure")}
            item
            sx={{ marginRight: "16px" }}>
            <Item>
              <StyledTypography>Develop healthy habits</StyledTypography>
              <Girl3 />
            </Item>
          </Grid>
          <Grid item onClick={() => navigate("/measure")}>
            <Item>
              <StyledTypography>Develop healthy habits</StyledTypography>
              <Girl4 />
            </Item>
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
};

export default Goal;
