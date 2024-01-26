import { styled } from "@mui/system";
import { Button } from "@mui/material";

const Btn = styled(Button)({
  display: "flex",
  width: "172px",
  height: "60px",
  padding: "12px 24px 12px 15px",
  alignItems: "center",
  gap: "10px",
  flexShrink: "0",

  borderRadius: "15px",
  border: "1px solid var(--Separator-Light, #E1E1E1)",
  background: "var(--Background-Light, #FFF);})",
});

export default Btn;
