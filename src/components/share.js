import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

const ShareButtonList = ({ title, url }) => {
  return (
    <>
      <FacebookShareButton
        url={url}
        quote={title}
        style={{ boxShadow: "none" }}
      >
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} style={{ boxShadow: "none" }}>
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
    </>
  );
};

export default ShareButtonList;
