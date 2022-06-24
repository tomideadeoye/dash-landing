import React from "react";

// COMPONENTS
import Features from "../Home/Features";
import Header from "../Home/Header";
import FeaturesRatings from "../Components/FeaturesRatings";
import DashMarketPlace from "./DashMarketPlace";
import ReceiveAndManage from "./ReceiveAndManage";
import Footer from "./Footer";

// STYLES
import styles from "../css/Home.module.css";
import HeroSection from "./HeroSection";

// All the functions on the home page are below. They can all be exported to intereact with other components in the app

export const Home = () => {
	return (
		<div className={styles.homeFrame}>
			<Header />
			<HeroSection />
			<Features />
			<img className={styles.divider} alt="" src="divider.png" />
			<DashMarketPlace />
			<ReceiveAndManage />
			<img className={styles.divider} alt="" src="divider.png" />
			<FeaturesRatings />
			<Footer />
		</div>
	);
};
