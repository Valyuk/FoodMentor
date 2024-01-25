import FlexBox from "../../components/FlexBetween";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Main from "../../components/Main";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Item from "../../components/Item";

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
          <Grid
            onClick={() => navigate("/measure")}
            item
            sx={{ margin: "0 16px 15.64px 0px" }}>
            <Item></Item>
          </Grid>
          <Grid item onClick={() => navigate("/measure")}>
            <Item></Item>
          </Grid>
          <Grid
            onClick={() => navigate("/measure")}
            item
            sx={{ marginRight: "16px" }}>
            <Item></Item>
          </Grid>
          <Grid item onClick={() => navigate("/measure")}>
            <Item></Item>
          </Grid>
        </Grid>
      </Main>
    </>
  );
};

export default Behaviors;
