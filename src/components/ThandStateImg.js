import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../elements/TbIndex";
import { history } from "../redux/configureStore";

const ThandStateImg = (props) => {
  const { display, all, id} = props;
  const styles = { display: display };
  console.log(all)
  return (
    <React.Fragment>
      <BackgroundState src={all.lvImg}>
        {all.closed ? <Grid
        width="100%"
        padding="16px 20px"
        flex="flex"
        justify="flex-end"
        is_align="flex-end"
        direction="column"
      >
        <Text color="#fff" size="1.2rem" margin="0 0 10px 0" padding="0 16px 0 0">
          총{" "}
          <span
            style={{
              color: "#fff",
              padding: "0 3px",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.45) 50%, transparent 50%)",
            }}
          >
            {all.hitCount}
          </span>{" "}
          맞음!!
        </Text>
        <Text color="#fff" size="1.2rem" margin="0 0 10px 0" padding="0 16px 0 0">
          펑💥
        </Text>
      </Grid>:
      <Grid
          width="100%"
          padding="16px 20px"
          flex="flex"
          justify="flex-end"
          is_align="flex-end"
          direction="column"
        >
          <Text color="#fff" size="1.2rem" margin="0 0 10px 0" padding="0 16px 0 0">
            현재{" "}
            <span
              style={{
                color: "#fff",
                padding: "0 3px",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.45) 50%, transparent 50%)",
              }}
            >
              {all.hitCount}
            </span>{" "}
            맞음!!
          </Text>
          <Button
            {...styles}
            width="176px"
            height="43px"
            color="#fff"
            radius="12px"
            bg="#333"
            size="1.2rem"
            text="생드백 때리러가기 =>"
            _onClick={() => {
              history.push(`/TbHitDetail/${id}`,all)
            }}
          />
        </Grid>
        }
      </BackgroundState>
    </React.Fragment>
  );
};

const BackgroundState = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default ThandStateImg;
