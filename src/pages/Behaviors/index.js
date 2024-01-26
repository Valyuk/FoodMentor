import FlexBox from "../../components/FlexBetween";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Main from "../../components/Main";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Button, Typography } from "@mui/material";
import Btn from "../../components/Btn";
import TextBtn from "../../components/TextBtn";
import { Moon } from "../../assets/Moon";
import { Donut } from "../../assets/Donut";
import { Soda } from "../../assets/Soda";
import { Salt } from "../../assets/Salt";
import { Pizza } from "../../assets/Pizza";
import { Cross } from "../../assets/Cross";

const Behaviors = () => {
  const navigate = useNavigate();
  return (
    <>
      <FlexBox>
        <Title>Destructive behaviors</Title>
        <Text>We all have them! Which are yours?</Text>
      </FlexBox>
      <Main>
        <Grid container sx={{ maxWidth: "360px" }}>
          <Grid item sx={{ margin: "0 15px 15px 0px" }}>
            <Btn onClick={() => navigate("/exercise")}>
              <Moon />
              <TextBtn>I don't rest enough</TextBtn>
            </Btn>
          </Grid>
          <Grid item>
            <Btn onClick={() => navigate("/exercise")}>
              <Donut />
              <TextBtn>I have a sweet tooth</TextBtn>
            </Btn>
          </Grid>
          <Grid item sx={{ marginRight: "15px" }}>
            <Btn onClick={() => navigate("/exercise")}>
              <Soda />
              <TextBtn>I have too much soda</TextBtn>
            </Btn>
          </Grid>
          <Grid item>
            <Btn onClick={() => navigate("/exercise")}>
              <Salt />
              <TextBtn>I eat many salty foods</TextBtn>
            </Btn>
          </Grid>
          <Grid item sx={{ margin: "15px 15px 0px 0px" }}>
            <Btn onClick={() => navigate("/exercise")}>
              <Pizza />
              <TextBtn>I enjoy midnight snacks</TextBtn>
            </Btn>
          </Grid>
          <Grid item sx={{ marginTop: "15px" }}>
            <Btn onClick={() => navigate("/exercise")}>
              <Cross />
              <TextBtn>None of the above</TextBtn>
            </Btn>
          </Grid>
        </Grid>
        <Box>
          <Button
            disabled
            sx={{
              display: "flex",
              width: "360px",
              height: "50px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",

              marginTop: "129px",
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
      </Main>
    </>
  );
};

export default Behaviors;
