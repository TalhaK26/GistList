import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { setGistList } from "../redux/gistSlice";
// services
import { getPublicGists } from "../services/gistService";

function Header() {
  const dispatch = useDispatch();

  // API Call to get all gists from the server
  const getList = async () => {
    getPublicGists()
      .then((res) => {
        // Set gist data in Redux for stop duplicate calls
        if (res?.status === 200) dispatch(setGistList(res?.data));
      })
      .catch((err) => console.log(err))
      .finally();
  };

  return (
    <Wrapper>
      <Octicon name="mark-github" mega />

      {/* Search Bar */}
      <Search />

      {/* To get all data from the server */}
      <AllText onClick={getList}>All gists</AllText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
`;

const AllText = styled.h4`
  margin: 0;
  cursor: pointer;
`;

export default Header;
