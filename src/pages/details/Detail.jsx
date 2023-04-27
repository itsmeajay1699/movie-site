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
import { setMedia, setMediaData } from "../../store/mediaTypeSlice";
import ReactPlayer from "react-player";

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

  const movieCredit = useSelector((state) => state.movieDetail.movieCredits);

  const media = useSelector((state) => state.media.media);

  // fetch poster and backdrop images

  const { apiData: movieImages } = useFetch(`/${popularUrl}/${id}/images`);
  dispatch(setMediaData(movieImages));
  const mediaData = useSelector((state) => state.media.mediaData);

  console.log(media);

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

          <div className="media">
            <h2>Media</h2>
            <div
              onClick={() => dispatch(setMedia("poster"))}
              className={`${media === "poster" ? "underline" : ""} type`}
            >
              Posters
            </div>
            <div
              onClick={() => dispatch(setMedia("backdrops"))}
              className={`${media === "backdrops" ? "underline" : ""} type`}
            >
              Backdrops
            </div>
          </div>
          <div className="media-wrapper">
            {media === "poster"
              ? mediaData?.backdrops?.map((images) => (
                  <CastCard
                    width="250px"
                    pad="0 0 0 20px"
                    src={
                      images.profile_path === null
                        ? defaultImage
                        : `${url}${images.file_path}`
                    }
                    key={images.id}
                  />
                ))
              : mediaData?.posters?.map((images) => (
                  <CastCard
                    width="250px"
                    pad="0 0 0 20px"
                    src={
                      images.profile_path === null
                        ? defaultImage
                        : `${url}${images.file_path}`
                    }
                  ></CastCard>
                ))}
          </div>
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
