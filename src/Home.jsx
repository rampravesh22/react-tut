import React from "react";

const Home = () => {
	return (
		<header class="bg-gray-900 text-white py-4 px-6">
			<nav class="flex items-center justify-between flex-wrap">
				<h1 class="text-2xl font-bold flex-shrink-0">Your Website Name</h1>
				<div class="flex md:hidden">
					<button
						type="button"
						class="text-white hover:text-gray-300 focus:outline-none"
					>
						<svg
							class="w-6 h-6"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 6H20M4 12H20M4 18H20"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
				<ul class="space-x-4 mt-4 sm:mt-0 hidden md:flex">
					<li>
						<a href="#" class="text-white hover:text-gray-300">
							Home
						</a>
					</li>
					<li>
						<a href="#" class="text-white hover:text-gray-300">
							About
						</a>
					</li>
					<li>
						<a href="#" class="text-white hover:text-gray-300">
							Services
						</a>
					</li>
					<li>
						<a href="#" class="text-white hover:text-gray-300">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Home;
