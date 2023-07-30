import React, { useEffect } from "react";
import styled from "styled-components";
import Gist from "../components/Gist";
import { useSelector, useDispatch } from "react-redux";
import { setGistList } from "../redux/gistSlice";
// services
import { getPublicGists } from "../services/gistService";

const GistList = () => {
  const dispatch = useDispatch();
  const gists = useSelector(({ gist }) => gist.gistList);

  useEffect(() => {
    // Get list from the server if data not exist in Redux storage
    if (!gists) getList();
  }, []);

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

  console.log("gists list ===>", gists);
  if (!gists) return <p>No Data!</p>;
  return (
    <Wrapper>
      {gists?.map((item, index) => (
        <Gist key={index} gist={item} index={index} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 68px;
`;

export default GistList;
