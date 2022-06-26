import React, { useState } from "react";
import "./SwipeButton.css";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { useSwipeable } from "react-swipeable";

export default function SwipeableButton() {
	const [inputValue, setInputValue] = useState("");
	const [posted, setPosted] = useState(false);
	const [swiping, setSwiping] = useState(false);

	const onChange = (e) => {
		setInputValue(e.target.value);
	};

	const onSubmit = () => {
		setPosted(true);
		setSwiping(true);
		console.log("Do what you want here");
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
				className={swiping ? "swipeButton swipedAnimation" : "swipeButton"}
				{...handlers}
			>
				{!posted ? (
					<>
						<span>Slide to Dash</span>
						<div className="materialArrowIcon">
							<ArrowForwardSharpIcon />
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
				<form className="sliderInputText">
					<input
						type="text"
						value={inputValue}
						placeholder="Enter your phone number"
						onChange={onChange}
					/>
				</form>
			)}
		</div>
	);
}
