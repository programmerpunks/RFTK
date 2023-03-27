const nikeNFTCart = require("../../videos/landing/nike-nft.mp4");
const nikeNFTBg = require("../../videos/landing/nike-nft-bg.mp4");
const thumbnailImage = require("../../images/landing/landing-video-thumbnail.png");

export const landingSection = {
  title: "CRYPTOKICKS IRL",
  description: "Cryptokicks iRL Mint has Ended",
};

const LandingData = [
  {
    title: "RTFKT Cryptokicks iRL",
    quantity: "1/190000",
    backgroundVideo: nikeNFTBg,
    cartVideo: nikeNFTCart,
    thumbnail: thumbnailImage,
    type: "FORGEABLE",
  },
  {
    title: "RTFKT X NIKE Trillium",
    quantity: "1/190000",
    backgroundVideo: nikeNFTBg,
    cartVideo: nikeNFTCart,
    thumbnail: thumbnailImage,
    type: "FORGEABLE",
  },
  {
    title: "RTFKT Animus Egg",
    quantity: "1/190000",
    backgroundVideo: nikeNFTBg,
    cartVideo: nikeNFTCart,
    thumbnail: thumbnailImage,
    type: "FORGEABLE",
  },
];

export default LandingData;

