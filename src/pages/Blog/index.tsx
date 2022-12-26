import React from "react";
import Header from "../../components/Header";
import Card from "./components/Card";
import HeaderBlog from "./components/HeaderBlog";
import SearchForm from "./components/SearchForm";
import { CardsContainer, Container } from "./style";

export default function Blog() {
  return (
    <>
      <Header children={<HeaderBlog />}/>
      <Container>
        <SearchForm />
        <CardsContainer>
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </Container>
    </>
  );
}
