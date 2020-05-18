//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { JumboTron } from "./component/jumbotron";
import { NavBar } from "./component/navbar";
import { Card1 } from "./component/card";
import { Footer } from "./component/footer";

//render your react application
/*
const arrayContenido = [
	"Some quick example text to build on the card title and make up the bulk of the card's content.",
	"Some quick example text to build on the card title and make up the bulk of the card's content.",
	"Some quick example text to build on the card title and make up the bulk of the card's content.",
	"Some quick example text to build on the card title and make up the bulk of the card's content."
];

const arrayCards = arrayContenido.map(texto => Card1(texto));
Card1.propTypes = {
	texto: PropTypes.string
};
const cardCards = <div className="row text-center">{arrayCards}</div>;
*/
/*
const cardsPrueba1 = (
	<div className="row text-center">
		<Card1 />
		<Card1 />
		<Card1 />
		<Card1 />
	</div>
);
*/
ReactDOM.render(
	<div>
		<NavBar />
		<div className="container">
			<JumboTron />
			<Card1 />
		</div>
		<Footer />
	</div>,
	document.querySelector("#app")
);
