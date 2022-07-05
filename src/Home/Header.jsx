import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useRef, useState } from "react";
import styles from "../css/Home.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

export const navItems = [
	{
		id: "Product",
		link: "/products",
		popup: ProductPopUp,
	},
	{
		id: "Careers",
		link: "/products",
		popup: ProductPopUp,
	},
	{
		id: "Blog",
		link: "/products",
		popup: ProductPopUp,
	},
	{
		id: "Help",
		link: "/Help",
		popup: ProductPopUp,
	},
];


// STYLES FOR HEADER COMPONENT
const useStyles = makeStyles((theme) => ({
	// mainContainer: {
	// 	[theme.breakpoints.down("sm")]: {
	// 		padding: "0 1rem",
	// 	},
	// },
	downloadLanguageContainer: {
		margin: "0 3vw 0 3vw",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		"& > div": { margin: "0 0.2vw" },
	},
	globeIcon: {
		fontSize: "3.225vw",
		padding: "0.4vw",
	},
	popUpGlobeIcon: {
		fontSize: "2.8vw",
		padding: "0.4vw",
		marginRight: "0.2vw",
		fill: "#f1962c",
	},
	headerDownloadButton: {
		width: " fit-content",
		height: " fit-content",
		padding: " 0.8vw 3.3vw",
		border: " 0.0625vw solid #fff",
		borderRadius: " 1.0625vw",
		fontSize: " 1.2vw",
		color: " #f1962c",
		fontWeight: " bold",
		textTransform: " capitalize",
	},

	lineDivider: {
		borderRight: "0.0625vw solid #f4f6ff",
		width: "1vw",
		height: "3.6875vw",
	},
}));

export default function Header() {
	const classes = useStyles();
	return (
		<div className={styles.headerSection}>
			{/* LOGO */}
			<Link to="/" sx={{ width: "fit-content" }}>
				<img className={styles.logo} alt="" src="dashlogo.svg" />
			</Link>

			{/* MAPS NAVITEMS FROM navItems */}
			<div className={styles.navBox}>
				<nav className={styles.navItems}>
					{navItems.map((item, key) => {
						return <MUINav key={key} item={item.id} popup={item.popup} />;
					})}
				</nav>

				<Box className={classes.downloadLanguageContainer}>
					{/* LINE DIVIDER */}
					<div className={classes.lineDivider} />
					{/* LANGUAGE SELECTION */}
					<MUINav
						item={<LanguageIcon className={classes.globeIcon} id="Language" />}
						popup={LanguagePopUp}
					/>
					{/* DOWNLOAD BUTTON */}
					<Box className={classes.headerDownloadButton}>Download</Box>
				</Box>
			</div>
		</div>
	);
}
const MUINav = ({ item, popup }) => {
	const [open, setOpen] = useState(false);
	const anchorRef = useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === "Escape") {
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = useRef(open);

	useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<Stack direction="row" spacing={2}>
			<div>
				<Box
					ref={anchorRef}
					id="composition-button"
					aria-controls={open ? "composition-menu" : undefined}
					aria-expanded={open ? "true" : undefined}
					aria-haspopup="true"
					onClick={handleToggle}
					className={styles.navItem}
				>
					{item}
				</Box>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					placement="bottom-start"
					transition
					disablePortal
				>
					{({ TransitionProps, placement }) => (
						<Grow
							// style={{ background: "blue" }}
							{...TransitionProps}
							style={{
								background: "none",
								marginTop: "1vw",
								transformOrigin:
									placement === "bottom-start" ? "left top" : "left bottom",
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id="composition-menu"
										aria-labelledby="composition-button"
										onKeyDown={handleListKeyDown}
									>
										{popup()}
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</Stack>
	);
};

function LanguagePopUp() {
	const classes = useStyles();
	return (
		<div className={styles.containerCover}>
			<div className={styles.popUpContainer}>
				<div className={styles.popUpContainerItem}>
					<span>
						<LanguageIcon className={classes.popUpGlobeIcon} />
					</span>
					<p>Français</p>
				</div>
				<div className={styles.popUpContainerItem}>
					<span>
						<LanguageIcon className={classes.popUpGlobeIcon} />
					</span>
					<p>Español</p>
				</div>
				<div className={styles.popUpContainerItem}>
					<span>
						<LanguageIcon className={classes.popUpGlobeIcon} />
					</span>
					<p>Deutsch</p>
				</div>
			</div>
		</div>
	);
}

function ProductPopUp() {
	const content = {
		Dash: {
			"Market Place": {
				name: "Market Place",
				link: "https://dukka.com/",
				icon: "marketplace01-1.svg",
				color: "#F4D893",
			},
			"Receive Money": {
				name: "Receive Money",
				link: "https://dukka.com/",
				icon: "recieve-cash01-1.svg",
				color: "#B56EA4",
			},
			"Send Money": {
				name: "Send Money",
				link: "https://dukka.com/",
				icon: "give-money01-1.svg",
				color: "#EE7E61",
			},
			"Finance Mngt.": {
				name: "Finance Mngt.",
				link: "https://dukka.com/",
				icon: "account-management01-1.svg",
				color: "#755DF5",
			},
		},

		Possibilities: {
			Dukka: {
				name: "Dukka",
				link: "https://dukka.com/",
				icon: "group-56.svg",
				shape: "rectangle",
			},
			"Swipe to Dash": {
				name: "Swipe to Dash",
				link: "https://dukka.com/",
				shape: "rectangle",
				icon: "vector16.svg",
			},
			"Secure Pay": {
				name: "Secure Pay",
				link: "https://dukka.com/",
				shape: "rectangle",
				icon: "vector17.svg",
			},
		},
	};

	return (
		<Box
			sx={{ display: "flex", flexDirection: "row" }}
			className={styles.containerCover}
			style={{ left: "26vw" }}
		>
			{Object.keys(content).map((key, value) => {
				return (
					<Box
						key={key}
						sx={{ display: "flex", flexDirection: "column" }}
						className={styles.popUpContainer}
					>
						<h3 className={styles.popuptitle}>{key}</h3>
						{Object.keys(content[key]).map((_key) => {
							return (
								<div className={styles.popUpContainerItem} key={_key}>
									<img
										className={styles.popupIcon}
										alt=""
										src={content[key][_key].icon}
										style={{
											borderColor: content[key][_key].color,
											borderRadius: content[key][_key].shape ? "20%" : "100%",
										}}
									/>
									<a href={content[key][_key].link}>
										<p>{content[key][_key].name}</p>
									</a>
								</div>
							);
						})}
					</Box>
				);
			})}
		</Box>
	);
}
