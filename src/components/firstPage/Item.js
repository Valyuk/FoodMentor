import { Button } from "@mui/material";
import { styled } from "@mui/system";

const Item = styled(Button)({
  width: "172px",
  height: "172px",
  spacing: "1",
  textAlign: "center",
  flexShrink: "0",
  padding: 0,

  borderRadius: "20.848px",
  border: "1.042px solid var(--Separator-Light, #E1E1E1)",
  background:
    "var(--Background-Gradient-Light, linear-gradient(214deg, #F1F1F1 12.33%, #FFF 69.93%))",
});

export default Item;
