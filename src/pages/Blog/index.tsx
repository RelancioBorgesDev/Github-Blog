import Header from "../../components/Header";
import HeaderBlog from "./components/HeaderProfile";
import SearchForm from "./components/SearchForm";
import { CardsContainer, Container } from "./style";
import PostCard from "./components/PostCard";
import { Link } from "react-router-dom";
import { useProfileData } from "../../hooks/useProfileData";

export default function Blog() {
  const id = Math.random();
  const { profileData } = useProfileData();

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
        <SearchForm />
        <CardsContainer>
          <Link to={`/post/${id}`}>
            <PostCard />
          </Link>
        </CardsContainer>
      </Container>
    </>
  );
}
