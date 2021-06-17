import React, { useMemo } from "react";
import QueryString from "query-string";
import { HeroCard } from "../Heroes/HeroCard";
import { useForm } from "../../Hooks/useForm";
import { useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
	const location = useLocation();
	const { q = "" } = useMemo(() => QueryString.parse(location.search), [location]);
	const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

	const [state, handleInputChange] = useForm({ searcher: q });

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`?q=${searcher}`);
	};

	const heroes = (q === "") ? (
			<div className="alert alert-info">Search a Hero</div>
		) : (
			<div>
				{heroesFiltered.map((hero) => {
					return (
						<HeroCard
							key={hero.id}
							{...hero}
							animateClass="animate__animated animate__bounceInRight"
						/>
					);
				})}
			</div>
		);

	const { searcher } = state;

	return (
		<div>
			<h1>SearchScreen</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Search Form</h4>
					<hr />
					<form onSubmit={handleSubmit}>
						<input
							name="searcher"
							type="text"
							placeholder="Find your hero"
							className="form-control"
							autoComplete="off"
							onChange={handleInputChange}
							value={searcher}
						/>
						<button
							type="submit"
							className="btn m-1 btn-block btn-outline"
						>
							Search...
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4> Results: </h4>
					<hr />
					{heroes}
				</div>
			</div>
		</div>
	);
};
