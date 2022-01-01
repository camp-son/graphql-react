import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIE = gql`
query getMovie($id: Int!) {
  movie(id: $id) {
    title
    medium_cover_image
    language
    rating
    description_intro
  }
  suggestions(id: $id) {
    id
    medium_cover_image
  }
}
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;
const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;
const MovieDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;
const SubTitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: 28px;
`;
const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;
const Movies = styled.div`
  position: relative;
  top: 0;
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;
`

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: {
      id: Number(id)
    }
  });

  return (
      <Container>
        <MovieDetail>
          <Column>
            <Title>{ loading ? 'Loading...' : data?.movie?.title }</Title>
            {!loading && (
              <>
                <SubTitle>{ data?.movie?.language } { data?.movie?.rating } </SubTitle>
                <Description>{ data?.movie?.description_intro }</Description>
              </>
            )}
          </Column>
          <Poster bg={ data?.movie?.medium_cover_image } />
        </MovieDetail>
        <Movies>
          {data?.suggestions?.map((s) => (
            <Movie id={s.id} bg={s.medium_cover_image} />
          ))}
        </Movies>
      </Container>
  )
}

export default Detail;
