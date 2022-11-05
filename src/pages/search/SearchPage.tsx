import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Space } from "antd";
import { getAvailableGenre, getGenreMusic } from "../../api/api";
import styled from "styled-components";

const StyledButton = styled(Button)`
  width: 100px;
  height: 120px;
  border-radius: 5px;
`;

export default function SearchPage() {
  const { data } = useQuery(["music", "genre"], async () => {
    const response = await getAvailableGenre();
    const genres = response.data.genres;
    return genres;
  });

  const {data: data1} = useQuery(["music", "genre2"], () => getGenreMusic());

  return (
    <Space size={[8, 16]} wrap>
      {data?.map((el, index) => (
        <StyledButton key={index}>{el}</StyledButton>
      ))}
    </Space>
  );
}
