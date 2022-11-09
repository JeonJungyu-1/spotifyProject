import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getGenreMusic } from "../../api/api";
import { Button, Space } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)`
  width: 100px;
  height: 120px;
  border-radius: 5px;
`;

export default function SearchDetailPage() {
  const params = useParams();
  const token = window.localStorage.getItem("token");
  const { data } = useQuery(["music", "genre2"], () =>
    getGenreMusic(token, params.genre)
  );

  console.log(data?.data?.tracks?.items);

  return (
    <Space size={[8, 16]} wrap>
      {data?.data?.tracks?.items?.map((el, index) => (
        <>
        <StyledButton key={index}>
          {el.name}
        </StyledButton>
        <img src={el.album.images[1].url}></img>
        </>
      ))}
    </Space>
  );
}
