import TripLoader from "components/Projects/TripLoader";
import { useState } from "react";

const IntroAnimationPage = () => {
	const [loading, setLoading] = useState(false);
	return <TripLoader setLoading={setLoading} />;
};
export default IntroAnimationPage;
