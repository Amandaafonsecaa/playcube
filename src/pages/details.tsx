import React from "react";
import { useParams } from "react-router-dom";
import AboutContainer from "../features/AboutContainer";
import CastContainer from "../features/CastContainer"
import ReviewContainer from "../features/ReviewsContainer"; 

export default function Details(){

    return(
        <div>
            <AboutContainer 
            id={Number(550)}
            type={"movie"} />
            <CastContainer
            id={Number(550)}
            type={"movie"} 
            />
            <ReviewContainer
            id={Number(550)}
            type={"movie"} 
            />
        </div>
    )

}