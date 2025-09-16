import React from "react";

//include images into your bundle
import rigoImage from "../img/rigo-baby.jpg";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">holaaaa</h1>
				<img src={rigoImage} />
			<input id="input" placeholder="Tiempo en segundos" type="number"></input><br/>
			<div className="mt-3">
				<div id="1" className="btn btn-success">
					hello
				</div>
				<div id="2" className="btn btn-primary mx-3">
					niggers
				</div>
				<div id="3" className="btn btn-danger">
					niggers pero en rojo
				</div>
			</div>
		</div>
	);
};

export default Home;