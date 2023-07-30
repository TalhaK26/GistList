import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Octicon from "react-octicon";
import { setGistList } from "../redux/gistSlice";
// services
import { getGistForUser } from "../services/gistService";

const Search = () => {
  const [username, setUsername] = useState("");
  const gists = useSelector(({ gist }) => gist.gistList);
  const dispatch = useDispatch();

  // Get gist by username from the server
  // by press Enter button
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && username) {
      getGistByUser();
    }
  };

  // API Call to get all gists from the server
  const getGistByUser = async () => {
    getGistForUser(username)
      .then((res) => {
        // Set gist data in Redux for stop duplicate calls
        if (res.status === 200) dispatch(setGistList(res?.data));
      })
      .catch((err) => console.log(err))
      .finally();
  };

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />

        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search Gists for the username"
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search;
