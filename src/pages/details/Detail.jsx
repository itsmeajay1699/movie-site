import React from "react";
import { useParams } from "react-router-dom";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import DetailPageBanner from "../../components/detailPageBanner/DetailPageBanner";
import useFetch from "../../api/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { getMovieCredits, getMovieDetail } from "../../store/movieDetailSlice";
import "./detail.scss";
import CastCard from "../../components/castCard/CastCard";
import SimpleSlider from "../../components/reactSlider/ReactSlider";
import defaultImage from "../../assets/avatar.png";
import { getTrailerKey } from "../../store/trailerSlice";
import ReactPlayer from "react-player";
import toast, { Toaster } from "react-hot-toast";
const Detail = () => {
  const { id } = useParams();
  const popularUrl = useSelector((state) => state.popular.popularUrl);
  const trailerId = useSelector((state) => state.trailer.trailerId);
  const dispatch = useDispatch();
  const { apiData: movieData } = useFetch(
    `/${popularUrl}/${id}&language=en-US`
  );
  dispatch(getMovieDetail(movieData));
  const { apiData: movieCredits } = useFetch(`/${popularUrl}/${id}/credits`);
  dispatch(getMovieCredits(movieCredits?.cast));

  const url = useSelector((state) => state.home.url.poster);

  const movieCredit = useSelector((state) => state?.movieDetail?.movieCredits);

  return (
    <>
      <div className="detail-wrapper">
        <DetailPageBanner movieDetail={movieData} />
        <ContentWrapper>
          <h2 className="billed-cast">Top Billed Cast</h2>
          <SimpleSlider>
            {movieCredit?.map((cast) => (
              <CastCard
                src={
                  cast.profile_path === null
                    ? defaultImage
                    : `${url}${cast.profile_path}`
                }
                name={cast.name}
                know={cast.known_for_department}
                key={cast.id}
              />
            ))}
          </SimpleSlider>
        </ContentWrapper>
        {trailerId && (
          <div
            className="trailer-container"
            onClick={() => dispatch(getTrailerKey(""))}
          >
            <div className="trailer-box">
              <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=${trailerId}`}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Detail;
