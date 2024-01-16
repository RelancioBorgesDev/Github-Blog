import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import { ProfileData } from "../../contexts/ProfileDataContext";
import { useIssuesData } from "../../hooks/useIssuesData";
import { useProfileData } from "../../hooks/useProfileData";
import HeaderPost from "./components/HeaderPost";
import { Container, TextContainer } from "./style";
import { IPost } from "../../contexts/IssuesDataContext";
import { useParams } from "react-router-dom";
import { api } from "../../api/axios";

export default function Post({
  avatar_url,
  login,
  company,
  name,
  bio,
  followers,
}: ProfileData) {
  const [postData, setPostData] = useState<IPost>({} as IPost);
  const { id } = useParams();
  console.log(id);
  const getPostDetails = useCallback(async () => {
    try {
      const response = await api.get(
        `/repos/RelancioBorgesDev/IssuesExample_GithubBlog/issues/${id}`
      );

      setPostData(response.data);
    } finally {
    }
  }, [postData]);

  useEffect(() => {
    getPostDetails();
  }, []);
  return (
    <Container>
      <Header children={<HeaderPost postData={postData} />} />
      <TextContainer>
        <p>{postData.body}</p>
      </TextContainer>
    </Container>
  );
}
