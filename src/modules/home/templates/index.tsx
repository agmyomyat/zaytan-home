import { createStyles } from "@mantine/core";
import { HeroSectionOne, HeroSectionThree, HeroSectionTwo } from "../components/hero";
import { Pricing } from "../components/pricing";
import tw from "twin.macro";

export default function Home() {
	const { classes } = useStyles();
	return (
		<>
			<HeroSectionOne />
			<div className="w-full bg-gradient-to-br from-orange-200 to-orange-100 overflow-hidden">
				<div className="xl:mx-52 mx-5 my-28">
					<HeroSectionTwo />
				</div>
			</div>
			<div className="py-20">
				<HeroSectionThree />
			</div>
			<div className={classes.pricingBgContainer}>
				<div className="m-5">
					<Pricing />
				</div>
			</div>
		</>
	);
}
const useStyles = createStyles(() => ({
	sectionTwoBgContainer: tw`w-full  bg-gray-50 overflow-hidden`,
	pricingBgContainer: tw`w-full bg-gradient-to-br from-orange-200 to-orange-100 overflow-hidden`,
}));
