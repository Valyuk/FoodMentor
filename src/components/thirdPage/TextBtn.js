import { Box } from "@mui/material";
import { styled } from "@mui/system";

const TextBtn = styled(Box)({
  display: "flex",
  textAlign: "start",
  width: "93px",
  flexShrink: "0",
  color: "var(--General-Black, #2D3436)",
  marginLeft: "10px",
  textTransform: "none",

  fontFamily: "Inter",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "18px",
  letterSpacing: "0.3px",
});

export default TextBtn;
