import React, { useState } from "react";
import "./SwipeButton.css";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { Box } from "@mui/material";

const isTouchDevice = "ontouchstart" in document.documentElement;

export default function SwipeableButton() {
	const [inputValue, setInputValue] = useState("");
	const [posted, setPosted] = useState(false);

	const onDrag = (e) => {
		console.log("onDrag");
		if (posted) return;

		// if (isDragging) {
		console.log("isDragging");
		// 	if (isTouchDevice) {
		// 		sliderLeft = Math.min(
		// 			Math.max(0, e.touches[0].clientX - startX),
		// 			containerWidth
		// 		);
		// 	} else {
		// 		sliderLeft = Math.min(Math.max(0, e.clientX - startX), containerWidth);
		// 	}
		// 	updateSliderStyle();
		// }
	};
	const ondragend = () => {
		// if (this.unmounted || this.state.unlocked) return;
		// console.log(this.props.onSuccess(this.props.id));
		// if (this.isDragging) {
		// 	this.isDragging = false;
		// 	if (this.sliderLeft >= this.containerWidth * 0.4) {
		// 		// this.sliderLeft = 9;
		// 		slider.current.style.left = this.sliderLeft - 185 + "vw";
		// 		// this.sliderLeft = this.containerWidth + 200;
		// 		if (this.props.onSuccess) {
		// 			this.props.onSuccess();
		// 			this.onSuccess();
		// 		}
		// 	} else {
		// 		this.sliderLeft = 0;
		// 		if (this.props.onFailure) {
		// 			this.props.onFailure();
		// 		}
		// 	}
		// 	this.updateSliderStyle();
		// }
	};

	const onChange = (e) => {
		setInputValue(e.target.value);
	};

	// if (isTouchDevice) {
	// 	document.addEventListener("touchmove", onDrag);
	// 	document.addEventListener("touchend", stopDrag);
	// } else {
	// 	document.addEventListener("mousemove", onDrag);
	// 	document.addEventListener("mouseup", stopDrag);
	// }
	return (
		<div className="SwipeButtonContainer">
			<div
				className="swipeButton"
				draggable="true"
				onDrag={onDrag}
				onDragEnd={ondragend}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						height: "100%",
					}}
				>
					<span>Slide to Dash</span>
					<div className="materialArrowIcon">
						<ArrowForwardSharpIcon />
					</div>
				</Box>
			</div>
			<div className="sliderInputText">
				<form>
					<input
						type="text"
						value={inputValue}
						placeholder="Enter your phone number"
						onChange={onChange}
					/>
				</form>
			</div>
		</div>
	);
}
