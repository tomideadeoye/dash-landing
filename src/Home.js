import styles from "./css/Home.module.css";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import SwipeableButton from "./Components/SwipeableButton";

// All the functions on the home page are below. They can all be exported to intereact with other components in the app

export const Home = () => {
	return (
		<div className={styles.homeFrame}>
			{" "}
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

function Header() {
	return (
		<div className={styles.headerSection}>
			<div className={styles.navBox}>
				<img className={styles.logo} alt="" src="group-1.svg" />
				<nav className={styles.navItems}>
					<li className={styles.navItem}>Products </li>
					<li className={styles.navItem}>Careers</li>
					<li className={styles.navItem}>Blog</li>
					<li className={styles.navItem}>Help</li>
				</nav>
				<div className={styles.lineDivider} />
				<img className={styles.icon} alt="globe icon" src="biglobe.svg" />
				<Button
					className={styles.button}
					sx={{ width: 152 }}
					variant="outline"
					color="info"
				>
					Download
				</Button>
			</div>
		</div>
	);
}

function HeroSection() {
	const onSuccess = () => {
		console.log("Yay! Swipe Success");
	};
	return (
		<div className={styles.heroSection}>
			<Box
				sx={{
					display: "flex",
				}}
			>
				<div className={styles.heroSectionTexts}>
					<p className={styles.heroTitle}>pay & be paid</p>
					<p className={styles.heroCash}>
						cash <p className={styles.heroTitle}>with</p>
					</p>
					<img className={styles.groupIcon1} alt="" src="group-1.svg" />
					<div className={styles.heroText}>Just Slide to “dash” anyone</div>

					{/* SLIDE TO DASH BUTTON ON THE HERO SECTION */}

					<Box
						sx={{
							display: "flex",
						}}
						className={styles.slideContact}
					>
						<SwipeableButton
							onSuccess={onSuccess}
							color="#14243b"
							text="Slide to dash"
						/>
					</Box>

					<Box
						sx={{
							display: "flex",
						}}
						className={styles.platformIcon}
					>
						<p>
							Google Play
							<img alt="" src="vector.svg" />
						</p>
						<p>
							App Store
							<img alt="" src="vector1.svg" />
						</p>
					</Box>

					{/* SLIDE TO DASH BUTTON - GOOGLE/APPLE ICONS */}
				</div>
				<img
					className={styles.appImage}
					alt="dash appimage"
					src="slideimage-raw01-3@2x.png"
				/>
			</Box>
		</div>
	);
}

function Features() {
	let featureData = {
		Send: {
			featureIcon: "give-money01-1.svg",
			featureTitle: "Send Money",
			content:
				"dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sedquia non numquam.",
		},
		ReceiveMoney: {
			featureIcon: "recieve-cash01-1.svg",
			featureTitle: "Receive Money",
			content:
				"dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sedquia non numquam.",
		},
		MarketPlace: {
			featureIcon: "marketplace01-1.svg",
			featureTitle: "Market Place",
			content:
				"dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed	quia non numquam.",
		},
		FinanceManagement: {
			featureIcon: "account-management01-1.svg",
			featureTitle: "Finance Management",
			content:
				"dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed	quia non numquam.",
		},
	};
	const Feature = ({ featureContent, featureTitle, featureIcon }) => {
		return (
			<div className={styles.featureBox}>
				<div className={styles.iconBox}>
					<img alt="" src={featureIcon} />
				</div>

				<div className={styles.featureTextBox}>
					<h1>{featureTitle}</h1>
					<p>{featureContent}</p>
				</div>
			</div>
		);
	};

	return (
		<div className={styles.features}>
			<h1 className={styles.featureTitle}>What you get</h1>
			<Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				{/* loop through the featureData object and render a Feature component for each key/value pair  */}
				{Object.keys(featureData).map((key) => {
					return (
						<Grid item lg={6} sm={12} md={6} className={styles.featureBox}>
							<Feature
								featureIcon={featureData[key].featureIcon}
								featureTitle={featureData[key].featureTitle}
								featureContent={featureData[key].content}
							/>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}

function DashMarketPlace() {
	const onSuccess = () => {
		console.log("Yay! Swipe Success");
	};
	const content = {
		marketPlace:
			"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae  dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas    sit, aspernatur aut odit",
	};
	return (
		<>
			<div className={styles.sectionBox}>
				<div className={styles.textsBox}>
					<h1 className={styles.sectionTitle}>Dash Market Place</h1>
					<p className={styles.sectionText}>{content.marketPlace}</p>
					<SwipeableButton
						onSuccess={onSuccess}
						color="#14243b"
						text="Slide to dash"
					/>
				</div>
				<img
					className={styles.sectionImage}
					alt=""
					src="slideimage-raw01-4@2x.png"
				/>
			</div>
			<div className={styles.sendMoney}>
				<div className={styles.sendMoneyBox}>
					<img alt="" src="frame-6.svg" className={styles.sendMoneyImage} />
					<div className={styles.textsBox}>
						<h1>Send money</h1>
						<p>{content.marketPlace}</p>
						<SwipeableButton
							onSuccess={onSuccess}
							color="#14243b"
							text="Slide to dash"
						/>
					</div>
				</div>
				<div className={styles.SendMoneyVideoBox}>
					<img className={styles.vid01011Icon} alt="" src="vid0101-1@2x.png" />
					<div className={styles.onboardingVideo}>
						<img alt="" src="playbutton.svg" />
						Onboarding video
					</div>
				</div>
			</div>
		</>
	);
}

function ReceiveAndManage() {
	const onSuccess = () => {
		console.log("Yay! Swipe Success");
	};
	const content = {
		receiveMoney:
			"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam eaque ipsa,  quae ab illo inventore veritatis et quasi architecto beatae vitae  dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas    sit, aspernatur aut odit",
	};

	return (
		<>
			<div className={styles.receiveAndManageMoneyBox}>
				<div className={styles.textsBox}>
					<h1 className={styles.light}>Recieve money</h1>
					<p className={styles.light}>{content.receiveMoney}</p>
					<SwipeableButton
						onSuccess={onSuccess}
						color="#14243b"
						text="Slide to dash"
					/>
				</div>
				<img className={styles.sectionImage} alt="" src="image-2@2x.png" />
			</div>
			<div className={styles.receiveAndManageMoneyBox}>
				<img className={styles.sectionImage} alt="" src="image-3@2x.png" />
				<div className={styles.textsBox}>
					<h1 className={styles.light}>Financial management</h1>
					<p className={styles.light}>{content.receiveMoney}</p>
					<SwipeableButton
						onSuccess={onSuccess}
						color="#14243b"
						text="Slide to dash"
					/>
				</div>
			</div>
		</>
	);
}
