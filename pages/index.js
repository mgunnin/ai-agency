import ReactGA from "react-ga"
import Meta from "../components/seo/Meta"
import Ubuntu from "../components/ubuntu"

const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID
ReactGA.initialize(TRACKING_ID)

function VerticalLabs() {
  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  )
}

export default VerticalLabs
