import React, { useState } from "react";
import "./SwipeButton.css";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { Box } from "@mui/material";
import { useSwipeable } from "react-swipeable";

export default function SwipeableButton() {
	const [inputValue, setInputValue] = useState("");
	const [posted, setPosted] = useState(false);

	const onChange = (e) => {
		setInputValue(e.target.value);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => console.log("swiped"),
		onSwipedRight: () => console.log("swiped"),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<div className="SwipeButtonContainer">
			{/* SWIPE BUTTON */}
			<div className="swipeButton" {...handlers}>
				<span>Slide to Dash</span>
				<div className="materialArrowIcon">
					<ArrowForwardSharpIcon />
				</div>
			</div>

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
