import React, { useState } from "react";
import "./SwipeButton.css";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { useSwipeable } from "react-swipeable";
import { InputAdornment, TextField } from "@mui/material";
import validator from "validator";

export default function SwipeableButton() {
	const [inputValue, setInputValue] = useState("");
	const [posted, setPosted] = useState(false);
	const [swiping, setSwiping] = useState(false);
	const [mobile, setmobile] = useState("");
	const [isError, setIsError] = useState(false);

	const phoneValidator = (phone) => {
		const regex = /^\d{10}$/;
		console.log(regex.test(phone));
	};


	validator.isMobilePhone(mobile, "en-US");

	const onChange = (e) => {
		setInputValue(e.target.value);
	};

	const onSubmit = () => {
		if (inputValue.length === 0) {
			alert("Please enter a valid phone number");
			return;
		}
		setPosted(true);
		setSwiping(true);
		// console.log("Do what you want here");
	};

	const handlers = useSwipeable({
		onSwipedRight: () => onSubmit(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});
	phoneValidator(mobile);

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
					<TextField
						type="tel"
						error={isError}
						value={mobile}
						label="Enter Phone Number"
						onChange={(e) => {
							setmobile(e.target.value);
							if (e.target.value.length > 10 || mobile.includes("-")) {
								setIsError(true);
							}
						}}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">+234</InputAdornment>
							),
						}}
					/>
					{/* <input
						type="number"
						value={inputValue}
						placeholder="Enter your phone number"
						onChange={onChange}
					/> */}
				</form>
			)}
		</div>
	);
}
