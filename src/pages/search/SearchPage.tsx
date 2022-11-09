import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Space } from "antd";
import { getAvailableGenre, getGenreMusic } from "../../api/api";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)`
  width: 100px;
  height: 120px;
  border-radius: 5px;
`;

export default function SearchPage() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  const { data } = useQuery(["music", "genre"], async () => {
    const response = await getAvailableGenre(token);
    const genres = response.data.genres;
    return genres;
  });

  return (
    <Space size={[8, 16]} wrap>
      {data?.map((el, index) => (
        <StyledButton key={index} onClick={() => navigate(`./${el}`)}>{el}</StyledButton>
      ))}
    </Space>
  );
}
