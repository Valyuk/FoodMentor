import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { Girl1 } from "../../assets/firstPage/Girl1";
import { Girl2 } from "../../assets/firstPage/Girl2";
import { Girl3 } from "../../assets/firstPage/Girl3";
import { Girl4 } from "../../assets/firstPage/Girl4";
import FlexBetween from "../../components/general/FlexBetween";
import Title from "../../components/general/Title";
import Text from "../../components/general/Text";
import Item from "../../components/firstPage/Item";
import Main from "../../components/general/Main";
import MainTitle from "../../components/firstPage/MainTitle";

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
      <FlexBetween>
        <Title>The Goal</Title>
        <Text>
          <Box>Focus on the health benefits you need</Box>
          <Box>Balanced nutrition will let you achieve them</Box>
        </Text>
      </FlexBetween>
      <Main>
        <MainTitle>What are your goals?</MainTitle>
        <Grid container sx={{ maxWidth: "360px", marginTop: "15px" }}>
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
