import React, { useState } from "react";
import "./SwipeButton.css";
import { useSwipeable } from "react-swipeable";
import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

// STYLES FOR HEADER COMPONENT
const useStyles = makeStyles((theme) => ({
	downloadLanguageContainer: {
		margin: "0 3vw 0 3vw",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		"& > div": { margin: "0 0.2vw" },
	},
	sliderInputText: {
		fontSize: "0.8125vw",
		color: "#14243b",
		width: "50%",
		height: "100%",
		backgroundColor: "#f4f6ff",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "left",
	},
	sliderText: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		fontSize: "1vw",
		width: "100%",
		height: "100%",
		color: "#14243b",
		border: "none",
		padding: ".5vw",
		outline: "none",
		"&::placeholder": {
			fontSize: ".9vw",
			fontWeight: "light",
			color: "#14243B",
			opacity: "1",
			textAlign: "center",
		},
	},
	slidearrow: {
		width: "fit-content",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		"& img": {
			margin: "0 0.25vw",
			width: "2vw",
			fill: "#f1962c",
			animation: "MoveLeftRight 1s linear infinite",
			position: "relative",
			right: "1vw",
		},
	},
}));

export default function SwipeableButton() {
	const classes = useStyles();
	const [posted, setPosted] = useState(false);
	const [swiping, setSwiping] = useState(false);
	const [mobile, setmobile] = useState("");

	const phoneValidator = (phone) => {
		if (phone.length < 12) {
			const _phone = phone.replace(/[^0-9.]/g, "");
			setmobile(_phone);
		}
	};

	const onSubmit = () => {
		if (mobile.length > 10) {
			setPosted(true);
			setSwiping(true);
			// console.log("Do what you want here");
			setmobile("");
		} else {
			alert("Please enter a valid phone number");
		}
	};

	const handlers = useSwipeable({
		onSwipedRight: () => onSubmit(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<div className="SwipeButtonContainer">
			{/* SWIPE BUTTON */}
			<div
				onClick={onSubmit}
				className={swiping ? "swipeButton swipedAnimation" : "swipeButton"}
				{...handlers}
			>
				{!posted ? (
					<>
						<span>Slide to Dash</span>
						<div className={classes.slidearrow}>
							<Box component="img" src="slidearrow.svg" />
						</div>
					</>
				) : (
					<>
						<span>Thank you for Dashing</span>
					</>
				)}
			</div>

			{/* INPUT SECTION */}

			{!posted && (
				<form className={classes.sliderInputText}>
					<TextField
						className={classes.sliderText}
						variant="standard"
						type="tel"
						value={mobile}
						// label="Enter Phone Number"
						placeholder="Enter your phone number"
						onChange={(e) => {
							phoneValidator(e.target.value);
						}}
						InputProps={{
							classes: {
								input: classes.sliderText,
								// adornedStart: classes.texts,
							},
							disableUnderline: true,
							// startAdornment: (
							// 	<InputAdornment position="start">+234</InputAdornment>
							// ),
						}}
					/>
				</form>
			)}
		</div>
	);
}
