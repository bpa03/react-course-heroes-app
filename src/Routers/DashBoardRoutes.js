import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../Components/DC/DcScreen'
import { HeroScreen } from '../Components/Heroes/HeroScreen'
import { MarvelScreen } from '../Components/Marvel/MarvelScreen'
import { SearchScreen } from '../Components/Search/SearchScreen'
import { Navbar } from '../Components/UI/Navbar'

export const DashBoardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-5">
				<Switch>
					<Route exact path="/marvel" component={ MarvelScreen }/>
					<Route exact path="/heroe/:heroId" component={ HeroScreen }/>
					<Route exact path="/dc" component={ DcScreen }/>
					<Route exact path="/search" component={ SearchScreen } />

					<Redirect to="/marvel"/>
				</Switch>
			</div>
		</>
	)
}
