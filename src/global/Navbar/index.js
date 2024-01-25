import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Back } from "../../assets/back";
import { Logo } from "../../assets/logo";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 0px 9px 0px",
        margin: "0 165px",
        flexShrink: "0",
      }}>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <Back />
        <Logo />
        <Typography
          onClick={() => navigate("/")}
          variant='h1'
          sx={{
            color: "#374234",
            fontSize: "18px",
            fontWeight: "600",
            fontFamily: "Inter",
            letterSpacing: "-0.45px",
            paddingLeft: "10px",
            cursor: "pointer",
          }}>
          Food Mentor
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
