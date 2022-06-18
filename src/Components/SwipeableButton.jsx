import React, { Component, useState } from "react";
import "./SwipeableButton.css";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";

const slider = React.createRef();
const container = React.createRef();
const isTouchDevice = "ontouchstart" in document.documentElement;

export default class SwipeableButton extends Component {
	state = {};

	componentDidMount() {
		if (isTouchDevice) {
			document.addEventListener("touchmove", this.onDrag);
			document.addEventListener("touchend", this.stopDrag);
		} else {
			document.addEventListener("mousemove", this.onDrag);
			document.addEventListener("mouseup", this.stopDrag);
		}
		this.containerWidth = container.current.clientWidth - 50;
	}

	onDrag = (e) => {
		if (this.unmounted || this.state.unlocked) return;
		if (this.isDragging) {
			if (isTouchDevice) {
				this.sliderLeft = Math.min(
					Math.max(0, e.touches[0].clientX - this.startX),
					this.containerWidth
				);
			} else {
				this.sliderLeft = Math.min(
					Math.max(0, e.clientX - this.startX),
					this.containerWidth
				);
			}
			this.updateSliderStyle();
		}
	};

	updateSliderStyle = () => {
		if (this.unmounted || this.state.unlocked) return;
		slider.current.style.left = this.sliderLeft + 50 + "px";
	};

	stopDrag = () => {
		if (this.unmounted || this.state.unlocked) return;
		if (this.isDragging) {
			this.isDragging = false;
			if (this.sliderLeft >= this.containerWidth * 0.4) {
				// this.sliderLeft = 9;
				slider.current.style.left = this.sliderLeft - 185 + "px";
				// this.sliderLeft = this.containerWidth + 200;
				if (this.props.onSuccess) {
					this.props.onSuccess();
					this.onSuccess();
				}
			} else {
				this.sliderLeft = 0;
				if (this.props.onFailure) {
					this.props.onFailure();
				}
			}
			this.updateSliderStyle();
		}
	};

	startDrag = (e) => {
		if (this.unmounted || this.state.unlocked) return;
		this.isDragging = true;
		if (isTouchDevice) {
			this.startX = e.touches[0].clientX;
		} else {
			this.startX = e.clientX;
		}
	};
	onChange = (e) => {
		this.setState({ inputValue: e.target.value });
	};
	onSuccess = () => {
		container.current.style.width = container.current.clientWidth + "px";
		this.setState({
			unlocked: true,
		});
		// WHEN THE DRAG IS SUCCESSFUL, WE NEED TO  DO SOMETHING AND RESET THE INPUT VALUE
		alert(this.state.inputValue);
	};

	reset = () => {
		if (this.unmounted) return;
		this.setState({ unlocked: false }, () => {
			this.sliderLeft = 0;
			this.updateSliderStyle();
		});
	};

	componentWillUnmount() {
		this.unmounted = true;
	}

	render() {
		return (
			<div className="ReactSwipeButton">
				<div
					className={
						"rsbContainer " +
						(this.state.unlocked ? "rsbContainerUnlocked" : "")
					}
					ref={container}
				>
					<div
						className={
							"rsbcSlider " + (this.state.unlocked ? "rsbcSliderUnlocked" : "")
						}
						ref={slider}
						onMouseDown={this.startDrag}
						onTouchStart={this.startDrag}
					>
						{this.state.unlocked ? (
							<span>Thank You</span>
						) : (
							<div>
								<span>Slide to Dash</span>
								<div className="materialArrowIcon">
									<ArrowForwardSharpIcon style={{ fill: "#F1962C" }} />
								</div>
							</div>
						)}
					</div>
					<div className="sliderInputText">
						<form>
							<input
								onChange={this.onChange}
								type="text"
								value={this.state.inputValue}
								placeholder="Enter your phone number"
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
