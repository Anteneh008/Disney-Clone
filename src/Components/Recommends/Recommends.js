import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../features/movie/movieSlice";

function Recommends() {
  const movies = useSelector(selectRecommend);
  const navigate = useNavigate();
  
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {/* Use the Link component with the 'to' attribute */}
              <Link to={`/detail/${movie.id}`} onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                navigate(`/detail/${movie.id}`); // Navigate programmatically
              }}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Recommends;

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 1;
    transition: opacity 500ms ease-in-out os;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`;
