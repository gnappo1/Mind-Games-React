import React from 'react';
import {
  FacebookShareCount,
  GooglePlusShareCount,
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  WhatsappIcon,
} from 'react-share';

const shareUrl = 'https://mp-games.herokuapp.com';
const title = "Cool quizzes of any kind, y'all might want to check this out!";

const Social = () =>
  <div className="Demo__container">
    <div className="Demo__some-network">
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="Demo__some-network__share-button">
        <FacebookIcon
          size={42}
          round />
      </FacebookShareButton>

      <FacebookShareCount
        url={shareUrl}
        className="Demo__some-network__share-count">
        {count => count}
      </FacebookShareCount>
    </div>

    <div className="Demo__some-network">
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className="Demo__some-network__share-button">
        <TwitterIcon
          size={42}
          round />
      </TwitterShareButton>

      <div className="Demo__some-network__share-count">
        &nbsp;
      </div>
    </div>

    <div className="Demo__some-network">
      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=":: "
        className="Demo__some-network__share-button">
        <WhatsappIcon size={42} round />
      </WhatsappShareButton>

      <div className="Demo__some-network__share-count">
        &nbsp;
      </div>
    </div>

    <div className="Demo__some-network">
      <GooglePlusShareButton
        url={shareUrl}
        className="Demo__some-network__share-button">
        <GooglePlusIcon
          size={42}
          round />
      </GooglePlusShareButton>

      <GooglePlusShareCount
        url={shareUrl}
        className="Demo__some-network__share-count">
        {count => count}
      </GooglePlusShareCount>
    </div>
  </div>

export default Social;
