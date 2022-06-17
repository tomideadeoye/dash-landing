import Features from "./Components/features";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import DashMarketPlace from "./Components/DashMarketPlace";
import ReceiveAndManage from "./Components/ReceiveAndManage";
import styles from "./css/Home.module.css";

export const Home = () => {
	return (
		<div className="home">
			<Header />
			<HeroSection />
			<Features />
			<img className={styles.divider} alt="" src="divider.png" />
			<DashMarketPlace />
			<ReceiveAndManage />
			<img className={styles.divider} alt="" src="divider.png" />
		</div>
	);
};
