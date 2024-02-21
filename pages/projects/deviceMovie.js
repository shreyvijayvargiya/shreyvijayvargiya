import TripLoader from "components/Home/TripLoader";
import { useState } from "react";

const Page = () => {
	const [loading, setLoading] = useState(true);
	return <TripLoader setLoading={setLoading} />;
};
export default Page;
