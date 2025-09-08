import React from "react";
import Navbar from "../components/navbar";
import AboutContainer from "../features/AboutContainer";
import CastContainer from "../features/CastContainer";
import ReviewContainer from "../features/ReviewsContainer";
import MediaContainer from "../features/MediaContainer";
import PopularMoviesContainer from "../features/PopularMoviesContainer";

export default function home() {
  return (
    <div>
      <AboutContainer id={Number(346698)} type={"movie"} />
      <CastContainer id={Number(346698)} type={"movie"} />
      <ReviewContainer id={Number(346698)} type={"movie"} />
      <MediaContainer id={Number(346698)} type={"movie"} />
      <PopularMoviesContainer />
    </div>
  );
}
