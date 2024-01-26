import { Box } from "@mui/material";
import { styled } from "@mui/system";

const MainTitle = styled(Box)({
  display: "flex",
  justifyContent: "center",
  color: "var(--General-Black, #2D3436)",
  textAlign: "center",

  fontFamily: "Inter",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "24px",
  letterSpacing: "0.2px",
});

export default MainTitle;
