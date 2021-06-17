import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";

export const HeroScreen = ({ history }) => {
	const { heroId } = useParams();
	const hero = getHeroesById(heroId);

	if (!hero) {
		return <Redirect to="/" />;
	}

	const handleReturn = () => {
		console.log(history.length);
		if(history.length <= 2) {
			history.push('/');	
		} else {
			history.goBack();
		}
	};

	const {
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters,
	} = hero;

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img
					src={`../assets/heroes/${heroId}.jpg`}
					alt={superhero}
					className="img-thumbnail animate__animated animate__fadeInLeft"
				/>
			</div>
			<div className="col-8 animate__animated animate__fadeIn">
				<h3 className="text-center">{superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter ego: </b> {alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher: </b> {publisher}
					</li>
					<li className="list-group-item">
						<b>First Appearence: </b> {first_appearance}
					</li>
					<li style={{ listStyle: "none" }}></li>
				</ul>
				<h5 className="mt-3 text-center">Characters</h5>
				<p className="text-center">{characters}</p>

				<button
					className="btn btn-outline-info btn-block"
					onClick={handleReturn}
				>
					Return
				</button>
			</div>
		</div>
	);
};
