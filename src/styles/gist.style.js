import styled from "styled-components";

export const GistWrapper = styled.div`
  border-bottom: 1px solid #dbdbdb;
  width: 600px;
  padding: 16px 0;
  padding: 15px 10px 30px 0;
`;

export const GistHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const GistHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const GistHeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding-top: 8px;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  border-radius: 100%;
`;

export const HeaderIconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #176fd9;
  font-size: 14px;
  font-weight: 600;
`;

export const GistHeading = styled.h5`
  font-size: 14px;
  font-weight: 600;
  color: #176fd9;
  font-family: system-ui;
  margin: 0;
`;

export const GistFile = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #176fd9;
  font-family: system-ui;
  margin: 0;
`;

export const GistContent = styled.div`
  //   font-size: 14px;
  //   font-weight: 600;
  //   color: #176fd9;
  //   font-family: system-ui;
`;

export const TimeWrapper = styled.div`
  font-size: 12px;
  font-weight: 700;
  font-family: system-ui;
  margin-top: 6px;
  color: #898989;
`;

export const ContentDescription = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-family: system-ui;
  margin: 20px 0;
  color: #898989;
`;
