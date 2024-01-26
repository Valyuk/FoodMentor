import { useNavigate } from "react-router-dom";
import { Grid, Box, Button, Typography } from "@mui/material";
import { Moon } from "../../assets/thirdPage/Moon";
import { Donut } from "../../assets/thirdPage/Donut";
import { Soda } from "../../assets/thirdPage/Soda";
import { Salt } from "../../assets/thirdPage/Salt";
import { Pizza } from "../../assets/thirdPage/Pizza";
import { Cross } from "../../assets/thirdPage/Cross";
import Btn from "../../components/thirdPage/Btn";
import TextBtn from "../../components/thirdPage/TextBtn";
import FlexBetween from "../../components/general/FlexBetween";
import Title from "../../components/general/Title";
import Text from "../../components/general/Text";
import Main from "../../components/general/Main";

const Behaviors = () => {
  const navigate = useNavigate();
  return (
    <>
      <FlexBetween>
        <Title>Destructive behaviors</Title>
        <Text>We all have them! Which are yours?</Text>
      </FlexBetween>
      <Main>
        <Grid container sx={{ maxWidth: "360px" }}>
          <Grid item sx={{ margin: "0 15px 15px 0px" }}>
            <Btn disabled>
              <Moon />
              <TextBtn>I don't rest enough</TextBtn>
            </Btn>
          </Grid>
          <Grid item>
            <Btn disabled>
              <Donut />
              <TextBtn>I have a sweet tooth</TextBtn>
            </Btn>
          </Grid>
          <Grid item sx={{ marginRight: "15px" }}>
            <Btn disabled>
              <Soda />
              <TextBtn>I have too much soda</TextBtn>
            </Btn>
          </Grid>
          <Grid item>
            <Btn disabled>
              <Salt />
              <TextBtn>I eat many salty foods</TextBtn>
            </Btn>
          </Grid>
          <Grid item sx={{ margin: "15px 15px 0px 0px" }}>
            <Btn disabled>
              <Pizza />
              <TextBtn>I enjoy midnight snacks</TextBtn>
            </Btn>
          </Grid>
          <Grid item sx={{ marginTop: "15px" }}>
            <Btn disabled>
              <Cross />
              <TextBtn>None of the above</TextBtn>
            </Btn>
          </Grid>
        </Grid>
        <Box>
          <Button
            onClick={() => navigate("/exercise")}
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
