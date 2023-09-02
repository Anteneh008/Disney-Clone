import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "../ImgSlider/ImgSlider";
import Viewers from "../Viewers/Viewers";
import Recommends from "../Recommends/Recommends";
import NewDisney from "../NewDisney/NewDisney";
import Originals from "../Originals/Originals";
import Trending from "../Trending/Trending";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../features/user/userSlice";
import db from "../../firebase";
import { setMovies } from "../../features/movie/movieSlice";

function Home(props) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    db.collection("movie").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
          // console.log(recommends)
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      );
    });
  }, [userName]);


  return (
    <div>
      <Container>
        <ImgSlider />
        <Viewers />
        <Recommends />
        <NewDisney />
        <Originals />
        <Trending />
      </Container>
    </div>
  );
}
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

// center center / cover: This part sets the background position and size. center center positions the image at the center of the element both horizontally and vertically. cover ensures that the image covers the entire background area, potentially cropping parts of the image to fit.

// fixed: This specifies that the background image should remain fixed in place while the content of the element scrolls, creating a parallax effect.

//The CSS code &:after is used to create a pseudo-element that is placed after the actual content of the selected element. In this case, it's being used to style an additional element that comes after the main element.

//inset: 0px; means that the element will have no spacing (0 pixels) from all four sides (top, right, bottom, left) within its containing element. In other words, it will be positioned flush against the edges of its container.
