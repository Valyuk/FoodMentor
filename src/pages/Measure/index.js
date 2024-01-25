import { useState } from "react";
import FlexBox from "../../components/FlexBetween";
import Title from "../../components/Title";
import Text from "../../components/Text";
import { Button, Box, Typography } from "@mui/material";
import TextInput from "../../components/Input";
import { useNavigate } from "react-router-dom";

const Measure = () => {
  const navigate = useNavigate();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const isNumeric = (value) => {
    return /^\d+$/.test(value);
  };

  const handleHeightChange = (event) => {
    const inputValue = event.target.value;
    setHeight(inputValue);
    if (isNumeric(inputValue) && isNumeric(weight)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleWeightChange = (event) => {
    const inputValue = event.target.value;
    setWeight(inputValue);

    if (isNumeric(height) && isNumeric(inputValue)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  return (
    <>
      <FlexBox>
        <Title>Measure Yourself</Title>
        <Text>What are you height and body weight?</Text>
      </FlexBox>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          height: "812px",
        }}>
        <Box
          sx={{
            display: "flex",
            height: "32px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexShrink: "0",

            borderRadius: "10px",
            border: "1px solid var(--primary-100, #5FCB39)",
          }}>
          <Box
            sx={{
              display: "flex",
              height: "32px",
              padding: "0px 16.949px 0px 15px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              background: "rgba(95, 203, 57, 0.20)",
            }}>
            <Button
              sx={{
                display: "flex",
                width: "145px",
                height: "32px",
                flexDirection: "column",
                justifyContent: "center",
                flexShrink: "0",

                color: "var(--primary-100, #5FCB39)",
                textAlign: "center",

                fontFamily: "Inter",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "normal",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}>
              IMPERIAL
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "32px",
              padding: "0px 15.918px 0px 19.133px",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Button
              sx={{
                display: "flex",
                width: "148px",
                height: "32px",
                flexDirection: "column",
                justifyContent: "center",
                flexShrink: "0",

                color: "var(--primary-100, #5FCB39)",
                textAlign: "center",

                fontFamily: "Inter",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "normal",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}>
              METRIC
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: "10px",
          }}>
          <TextInput
            onChange={handleHeightChange}
            value={height}
            placeholder='Height(ft)'></TextInput>
          <TextInput
            onChange={handleWeightChange}
            value={weight}
            sx={{ mt: "10px" }}
            placeholder='Current Weight(ft)'></TextInput>
        </Box>
        <Box>
          <Button
            onClick={() => navigate("/behaviors")}
            disabled={isButtonDisabled}
            sx={{
              display: "flex",
              width: "360px",
              height: "50px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",

              marginTop: "159px",
              borderRadius: "12px",
              opacity: "0.3",
              background: "var(--primary-100, #5FCB39)",
            }}>
            <Typography
              sx={{
                color: "var(--General-White, #FFF)",
                textAlign: "center",

                fontFamily: "Inter",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "26px",
                letterSpacing: "0.2px",
              }}>
              Continue
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Measure;
