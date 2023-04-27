import React from "react";
import { useParams } from "react-router-dom";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import DetailPageBanner from "../../components/detailPageBanner/DetailPageBanner";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="detail-wrapper">
      <DetailPageBanner />
      <ContentWrapper>
        <h2>this is detail page</h2>
      </ContentWrapper>
    </div>
  );
};

export default Detail;
