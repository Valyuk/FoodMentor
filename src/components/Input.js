import { Input } from "@mui/material";
import { styled } from "@mui/system";

const TextInput = styled(Input)({
  width: "360px",
  height: "64px",
  flexShrink: "0",
  paddingLeft: "15px",
  paddingTop: "20px",
  paddingBottom: "20px",

  borderRadius: "10px",
  border: "1px solid var(--Separator-Light, #E1E1E1)",
  background: "var(--Background-Light, #FFF)",
});

export default TextInput;
