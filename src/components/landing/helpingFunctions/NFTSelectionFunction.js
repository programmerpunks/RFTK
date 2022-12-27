export default function get_NFTs_Filtered(NFTcategory, LandingData) {
    let filtered_NFTs = {};
    for (let index = 0; index < LandingData.length; index++) {
        if (LandingData[index].title === NFTcategory) {
            LandingData[index].id = index;
          filtered_NFTs =LandingData[index];
        }
      }
      return filtered_NFTs;
  }
  