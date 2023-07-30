import moment from "moment";
import { iconPath } from "../utilities/constants/";
import {
  GistWrapper,
  GistHeader,
  GistHeaderLeft,
  GistHeaderRight,
  Avatar,
  HeaderIconWrapper,
  GistHeading,
  GistContent,
  TimeWrapper,
  AvatarContainer,
  ContentDescription,
  GistFile,
} from "../styles/gist.style";

const FileIcon = `${iconPath}/file-icon.svg`;
const ForkIcon = `${iconPath}/fork-icon.svg`;
const CommentIcon = `${iconPath}/comment-icon.svg`;
const StarIcon = `${iconPath}/star-icon.svg`;
const CodingFIleIcon = `${iconPath}/coding-file-icon.svg`;

const Gist = ({ gist, index }) => {
  const filesLength = Object.entries(gist?.files).length;
  const files = [];

  Object.entries(gist?.files).forEach((item, i) => {
    files.push(item[1]?.filename);
  });

  return (
    <GistWrapper key={index}>
      <GistHeader>
        <GistHeaderLeft>
          <AvatarContainer>
            <Avatar src={gist?.owner?.avatar_url} alt="" />
            <GistHeading>{gist?.owner?.login}</GistHeading>
          </AvatarContainer>

          <TimeWrapper>
            Created at: {moment(gist?.created_at).format("MM-DD-YYYY")}
            <span style={{ marginLeft: 20 }}>Updated at:</span>{" "}
            {moment(gist?.updated_at).format("MM-DD-YYYY")}
          </TimeWrapper>
        </GistHeaderLeft>

        <GistHeaderRight>
          <HeaderIconWrapper>
            <img
              src={FileIcon}
              alt=""
              width="20"
              height="20"
              style={{ marginRight: 6 }}
            />
            <GistHeading>{filesLength ? filesLength : ""} Files</GistHeading>
          </HeaderIconWrapper>

          <HeaderIconWrapper>
            <img
              src={ForkIcon}
              alt=""
              width="16"
              height="16"
              style={{ marginRight: 6 }}
            />
            <GistHeading>Forks</GistHeading>
          </HeaderIconWrapper>

          <HeaderIconWrapper>
            <img
              src={CommentIcon}
              alt=""
              width="16"
              height="16"
              style={{ marginRight: 6 }}
            />
            <GistHeading>Comments</GistHeading>
          </HeaderIconWrapper>

          <HeaderIconWrapper>
            <img
              src={StarIcon}
              alt=""
              width="16"
              height="16"
              style={{ marginRight: 6 }}
            />
            <GistHeading>Stars</GistHeading>
          </HeaderIconWrapper>
        </GistHeaderRight>
      </GistHeader>

      <GistContent>
        <ContentDescription>{gist?.description}</ContentDescription>

        <HeaderIconWrapper>
          {files?.map((file, index) => (
            <>
              <img
                src={CodingFIleIcon}
                alt=""
                width="20"
                height="20"
                style={{ margin: "0px 6px 0px 12px" }}
              />
              <GistFile key={index}>{file}</GistFile>
            </>
          ))}
        </HeaderIconWrapper>
      </GistContent>
    </GistWrapper>
  );
};

export default Gist;
