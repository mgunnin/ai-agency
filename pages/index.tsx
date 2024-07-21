//import ReactGA from "react-ga4"
import Meta from "../components/seo/meta"
import Ubuntu from "../components/ubuntu"

const TRACKING_ID: string | undefined = process.env.NEXT_PUBLIC_TRACKING_ID
//ReactGA.initialize(TRACKING_ID)

function VerticalLabs(): JSX.Element {
  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  )
}

export default VerticalLabs