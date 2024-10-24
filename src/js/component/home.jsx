import React from "react";
import Navbar from "./navbar.jsx";
import Hero from "./hero.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (<>
		<Navbar />
		<Hero />
		<div className="container text-center">
			<div className="row">
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
			</div>
		</div>
		<Footer />
	</>
	);
}
export default Home;
