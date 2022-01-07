import React from "react";
import styled from "styled-components";

import { ReactComponent as Bomb } from "../static/images/bomb.svg";
import { ReactComponent as Comment } from "../static/icons/comment.svg";
import { ReactComponent as ENFJ } from "../static/icons/mbti icons/Property 1=mbti_ENFJ.svg";
import { ReactComponent as INFP } from "../static/icons/mbti icons/Property 1=mbti_INFP.svg";
import { ReactComponent as ENFP } from "../static/icons/mbti icons/Property 1=mbti_ENFP.svg";
import { ReactComponent as ENTJ } from "../static/icons/mbti icons/Property 1=mbti_ENTJ.svg";
import { ReactComponent as ESFP } from "../static/icons/mbti icons/Property 1=mbti_ESFP.svg";
import { ReactComponent as ESTJ } from "../static/icons/mbti icons/Property 1=mbti_ESTJ.svg";
import { ReactComponent as ESTP } from "../static/icons/mbti icons/Property 1=mbti_ESTP.svg";
import { ReactComponent as ESFJ } from "../static/icons/mbti icons/Property 1=mbti_ESFJ.svg";
import { ReactComponent as ENTP } from "../static/icons/mbti icons/Property 1=mbti_ENTP.svg";
import { ReactComponent as INFJ } from "../static/icons/mbti icons/Property 1=mbti_INFJ.svg";
import { ReactComponent as INTJ } from "../static/icons/mbti icons/Property 1=mbti_INTJ.svg";
import { ReactComponent as INTP } from "../static/icons/mbti icons/Property 1=mbti_INTP.svg";
import { ReactComponent as ISFJ } from "../static/icons/mbti icons/Property 1=mbti_ISFJ.svg";
import { ReactComponent as ISFP } from "../static/icons/mbti icons/Property 1=mbti_ISFP.svg";
import { ReactComponent as ISTJ } from "../static/icons/mbti icons/Property 1=mbti_ISTJ.svg";
import { ReactComponent as ISTP } from "../static/icons/mbti icons/Property 1=mbti_ISTP.svg";
import { ReactComponent as NoMbti } from "../static/icons/mbti icons/Property 1=Variant17.svg";
import { ReactComponent as LevelOne } from "../static/icons/lv icons/LV. 1.svg";
import { ReactComponent as LevelTwo } from "../static/icons/lv icons/LV. 2.svg";
import { ReactComponent as LevelThree } from "../static/icons/lv icons/LV. 3.svg";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as cardActions } from "../redux/modules/card";
import { Grid } from "../elements/TbIndex";
import TbText from "../elements/TbText";

const TbCardAll = (props) => {
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.card.search_list);

  React.useEffect(() => {
    dispatch(cardActions.getCardListDB());
  }, []);

  return (
    <>
      {cardList.map((c) => {
        return (
          <ListBox
            onClick={() => {
              history.push(`/TbTwoDetail/${c.postId}`);
            }}
          >
            <CardWrap>
              <CardTop>
                <TbText bold>{c.category}</TbText>
              </CardTop>
              <Grid
                width="66px"
                height="63px"
                position="absolute"
                top="5px"
                right="10px"
              >
              {c.closed ? <Bomb /> : <></>}
              </Grid>
              <CardMiddle>
                <CardContent>
                  <CardContentTop>
                    <TbText bold size="20px">
                      {c.title}
                    </TbText>
                  </CardContentTop>
                  <CardContentBottom>
                    <div dangerouslySetInnerHTML={{ __html: c.content }}></div>
                  </CardContentBottom>
                </CardContent>
              </CardMiddle>
              <CardBottom>
                <CardBottomNameArea>
                  <TbText margin="0px 15px 0px 0px;">{c.nickname}님</TbText>
                </CardBottomNameArea>
                <CardBottomLvArea>
                  <CardMbti>
                    <TbText color="white" size="13px">
                      {c.mbti === "ENFJ" ? (
                        <ENFJ />
                      ) : c.mbti === "INFP" ? (
                        <INFP />
                      ) : c.mbti === "ENFP" ? (
                        <ENFP />
                      ) : c.mbti === "ENTJ" ? (
                        <ENTJ />
                      ) : c.mbti === "ESFP" ? (
                        <ESFP />
                      ) : c.mbti === "ESTJ" ? (
                        <ESTJ />
                      ) : c.mbti === "ESTP" ? (
                        <ESTP />
                      ) : c.mbti === "INFJ" ? (
                        <INFJ />
                      ) : c.mbti === "INTJ" ? (
                        <INTJ />
                      ) : c.mbti === "INTP" ? (
                        <INTP />
                      ) : c.mbti === "ISFJ" ? (
                        <ISFJ />
                      ) : c.mbti === "ISFP" ? (
                        <ISFP />
                      ) : c.mbti === "ISTJ" ? (
                        <ISTJ />
                      ) : c.mbti === "ISTP" ? (
                        <ISTP />
                      ) : c.mbti === "맞춰보셈" ? (
                        <NoMbti />
                      ) : c.mbti === "ESFJ" ? (
                        <ESFJ />
                      ) : c.mbti === "ENTP" ? (
                        <ENTP />
                      ) : null}
                    </TbText>
                  </CardMbti>
                  <CardLv>
                    <TbText color="white" size="13px">
                      {c.level === 1 ? (
                        <LevelOne />
                      ) : c.level === 2 ? (
                        <LevelTwo />
                      ) : c.level === 3 ? (
                        <LevelThree />
                      ) : null}
                    </TbText>
                  </CardLv>
                </CardBottomLvArea>
                <CardBottomCommentArea>
                  <Comment width="20" height="20"></Comment>
                  <TbText margin="0px 0px 0px 5px">{c.commentCount}</TbText>
                </CardBottomCommentArea>
                <CardBottomTimeArea>
                  <TbText
                    color="#F7C8C8"
                    bold="600"
                    size="12px"
                    family="NotoSansCJK"
                  >
                    {c.createdAt}
                  </TbText>
                </CardBottomTimeArea>
              </CardBottom>
            </CardWrap>
          </ListBox>
        );
      })}
    </>
  );
};

const ListBox = styled.div`
  width: 100%;
  height: auto;
`;

const CardWrap = styled.div`
  width: 85%;
  height: 230px;
  background-color: #eeeeee;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  margin-bottom: 40px;
  position: relative;
`;

const CardTop = styled.div`
  width: 100%;
  height: 20%;
  background-color: #eeeeee;
  padding: 15px 0px 0px 20px;
  position: absolute;
`;

const CardMiddle = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 46px;
  background-color: #fff;
  border-bottom: 2px solid #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContent = styled.div`
  width: 90%;
  height: 80%;
  background-color: #fff;
`;

const CardContentTop = styled.div`
  width: 100%;
  height: 30%;
  background-color: #fff;
  text-align: middle;
`;

const CardContentBottom = styled.div`
  width: 100%;
  height: 70%;
  background-color: #fff;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardBottom = styled.div`
  width: 100%;
  height: 20%;
  background-color: #fff;
  padding: 10px 15px 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CardBottomNameArea = styled.div`
  width: 25%;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBottomLvArea = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CardBottomCommentArea = styled.div`
  width: 25%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CardBottomTimeArea = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  margin-left: 10px;
`;

const CardMbti = styled.div`
  width: 40px;
  height: 18px;
  line-height: 18px;
  background-color: #ff5454;
  text-align: center;
  border-radius: 25px;
  margin: 0px 15px 0px 0px;
`;

const CardLv = styled.div`
  width: 40px;
  height: 18px;
  line-height: 18px;
  background-color: #333333;
  text-align: center;
  border-radius: 25px;
`;

export default TbCardAll;
