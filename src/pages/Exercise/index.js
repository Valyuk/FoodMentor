import { ActiveGirl } from "../../assets/fourthPage/ActiveGirl";
import { Box } from "@mui/material";
import FlexBetween from "../../components/general/FlexBetween";
import Title from "../../components/general/Title";
import Text from "../../components/general/Text";
import Main from "../../components/general/Main";
import MainTitle from "../../components/firstPage/MainTitle";
import Active from "../../components/fourthPage/Active";
import ActiveText from "../../components/fourthPage/ActiveText";

const Exercise = () => {
  return (
    <>
      <FlexBetween>
        <Title>Physical exercise</Title>
        <Text>
          <Box>Physical exercise means a lot for a woman who</Box>
          <Box>wants to lose kilos and works at the office</Box>
        </Text>
      </FlexBetween>
      <Main>
        <MainTitle>How active are you during the day?</MainTitle>
        <Box sx={{ display: "flex" }}>
          <ActiveGirl
            sx={{
              display: "flex",
              width: "173px",
              height: "363px",
              padding: "34.377px 0px 52.823px 0.844px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "15px",
            }}>
            <Active>
              <ActiveText>Hardly at all</ActiveText>
            </Active>
            <Active>
              <ActiveText>Fitness 1-2 times a week</ActiveText>
            </Active>
            <Active>
              <ActiveText>Fitness 3-5 times a week</ActiveText>
            </Active>
            <Active>
              <ActiveText>Fitness 5-7 times a week</ActiveText>
            </Active>
          </Box>
        </Box>
      </Main>
    </>
  );
};

export default Exercise;
