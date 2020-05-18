import React from "react";
export class JumboTron extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1 className="display-3">A Warm Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
					odit vero aliquid similique quaerat nam nobis illo
					aspernatur vitae fugiat numquam repellat.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</p>
			</div>
		);
	}
}
