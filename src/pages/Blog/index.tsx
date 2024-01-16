import Header from "../../components/Header";
import HeaderBlog from "./components/HeaderProfile";
import SearchForm from "./components/SearchForm";
import { CardsContainer, Container } from "./style";
import PostCard from "./components/PostCard";
import { Link } from "react-router-dom";
import { useProfileData } from "../../hooks/useProfileData";
import { useIssuesData } from "../../hooks/useIssuesData";
import { useEffect } from "react";

export default function Blog() {
  const { profileData } = useProfileData();
  const { issuesData, getPosts } = useIssuesData();
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <Header
        children={
          <HeaderBlog
            avatar_url={profileData?.avatar_url}
            bio={profileData?.bio}
            company={profileData?.company}
            login={profileData?.login}
            name={profileData?.name}
            followers={profileData?.followers}
          />
        }
      />
      <Container>
        <SearchForm amount_posts={issuesData.length} getPosts={getPosts} />
        <CardsContainer>
          {issuesData.map((issue) => (
            <Link key={issue.number} to={`/post/${issue.number}`}>
              <PostCard
                body={issue.body}
                title={issue.title}
                created_at={issue.created_at}
              />
            </Link>
          ))}
        </CardsContainer>
      </Container>
    </>
  );
}
