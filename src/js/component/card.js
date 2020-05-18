import React from "react";
import PropTypes from "prop-types";

export class Card1 extends React.Component {
	constructor() {
		super();
	}

	render() {
		const cards = [
			{
				id: 1,
				title: "Card Title",
				text:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
			},
			{
				id: 2,
				title: "Card Title",
				text:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
			},
			{
				id: 3,
				title: "Card Title",
				text:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
			},
			{
				id: 4,
				title: "Card Title",
				text:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
			}
		];
		return (
			<div className="cardrow card-deck">
				{cards.map(card => {
					return (
						<div className="card" key={card.id}>
							<img
								className="card-img-top"
								src="http://placehold.it/500x325"
							/>
							<div className="card-body text-center">
								<h4 className="card-title">Card Title</h4>
								<p className="card-text">{card.text}</p>
							</div>
							<div className="card-footer text-center">
								<a href="#" className="btn btn-primary">
									Find Out More!
								</a>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
