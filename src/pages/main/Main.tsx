import React from "react";
import styled from "styled-components";
import LeftMenu from "../menu/LeftMenu";

const MainContainer = styled.div`
  display: flex;
`;

export default function Main() {
  //   const { data } = await axios.get(
  //     `https://api.spotify.com/v1/artists/${params.id}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${params.token}`,
  //       },
  //     }
  //   );
  return (
    <MainContainer>
      <LeftMenu />
      <div>Main</div>
    </MainContainer>
  );
}
