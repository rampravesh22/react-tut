import React from "react";

const Home = () => {
	return (
		<div className="bg-orange-900 text-fuchsia-50 py-2 flex justify-end">
			<ul className="flex justify-between mr-4 w-96">
				<li className="hover:bg-black px-3 py-1 rounded-md transition-all delay-75">
					<a href="">Home</a>
				</li>
				<li className="hover:bg-black px-3 py-1 rounded-md transition-all delay-75">
					<a href="">About</a>
				</li>
				<li className="hover:bg-black px-3 py-1 rounded-md transition-all delay-75">
					<a href="">Login</a>
				</li>
				<li className="hover:bg-black px-3 py-1 rounded-md transition-all delay-75">
					<a href="">Profile</a>
				</li>
			</ul>
		</div>
	);
};

export default Home;
