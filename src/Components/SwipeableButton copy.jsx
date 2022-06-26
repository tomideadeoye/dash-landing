import React, { useState } from "react";
import "./SwipeButton.css";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { Box } from "@mui/material";
import Swipeable from "react-mui-swipeable";

export default function SwipeableButton() {
	const [inputValue, setInputValue] = useState("");
	const [posted, setPosted] = useState(false);

	const onChange = (e) => {
		setInputValue(e.target.value);
	};

	const onSwipe = () => {
		console.log("Swipe Right");
	};

	const swipeRightConfig = {
		color: "#CF6679",
		icon: "DeleteIcon",
		moveOutOfScreen: false,
	};

	const swipeStyle = {
		height: "100%",
		width: "100%",
		color: "#CF6679",
	};

	return (
		<div className="SwipeButtonContainer">
			{/* SWIPE BUTTON */}
			<Swipeable
				onSwipeRight={onSwipe}
				swipeRightConfig={swipeRightConfig}
				style={swipeStyle}
			>
				<div className="swipeButton">
					<span>Slide to Dash</span>
					<div className="materialArrowIcon">
						<ArrowForwardSharpIcon />
					</div>
				</div>
			</Swipeable>
			{/* INPUT SECTION */}
			<form className="sliderInputText">
				<input
					type="text"
					value={inputValue}
					placeholder="Enter your phone number"
					onChange={onChange}
				/>
			</form>
		</div>
	);
}
