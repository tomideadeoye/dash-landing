import Features from "./Components/features";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import styles from "./css/Home.module.css";

import CssBaseline from "@mui/material/CssBaseline";

export const Home = () => {
	return (
		<div className="home">
			<CssBaseline /> <Header />
			<HeroSection />
			<Features />
			<img className={styles.divider} alt="" src="divider.png" />
		</div>
	);
};
