import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageForm from "./components/ImageForm/ImageForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import "./App.css";

const particlesParams = {
		particles: {
				number: {
					value: 80,
					density: {
						enable: true,
						value_area: 800
					}
				}
			}
};

class App extends Component {
	constructor () {
		super();
		this.state = {
			linkToImage: ''
		}
	}

	handleLinkInput = e => {
		this.setState({linkToImage: e.target.value});
	}

	render() {
		return (
			<div>
				<Particles params={particlesParams} className="particles"/>
				<Navigation />
				<Logo />
				<Rank />
				<ImageForm />
			</div>
		);
	}
}

export default App;
