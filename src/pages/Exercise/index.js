import FlexBox from "../../components/FlexBetween";
import Title from "../../components/Title";
import Text from "../../components/Text";
import { Box } from "@mui/system";
import Main from "../../components/Main";
import MainTitle from "../../components/MainTitle";

const Exercise = () => {
  return (
    <>
      <FlexBox>
        <Title>Physical exercise</Title>
        <Text>
          <Box>Physical exercise means a lot for a woman who</Box>
          <Box>wants to lose kilos and works at the office</Box>
        </Text>
      </FlexBox>
      <Main>
        <MainTitle>How active are you during the day?</MainTitle>
      </Main>
    </>
  );
};

export default Exercise;
