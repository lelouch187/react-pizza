import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
  <ContentLoader className='pizza-block'
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="138" cy="124" r="125" /> 
    <rect x="0" y="259" rx="10" ry="10" width="280" height="25" /> 
    <rect x="1" y="298" rx="13" ry="13" width="280" height="83" /> 
    <rect x="1" y="412" rx="6" ry="6" width="92" height="27" /> 
    <rect x="125" y="404" rx="22" ry="22" width="153" height="43" />
  </ContentLoader>
)

export default Skeleton