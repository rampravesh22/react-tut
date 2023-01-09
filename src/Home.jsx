import React, { useEffect, useState } from "react";

const Home = () => {
	const [card, setCard] = useState([]);
	const [page, setPage] = useState(1);
	useEffect(() => {
		const getCardData = async () => {
			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/posts?_limit=8_&page=${page}`
				);
				const data = await response.json();
				console.log(data);
				setCard((preState) => [...preState, ...data]);
			} catch (error) {
				console.log(error);
			}
		};
		getCardData();
	}, [page]);

	const handleInfiniteScroll = async () => {
		try {
			if (
				window.innerHeight + document.documentElement.scrollTop + 1 >=
				document.documentElement.scrollHeight
			) {
				setPage((preState) => {
					return preState + 1;
				});
			}
		} catch (error) {}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleInfiniteScroll);
		return () => {
			window.removeEventListener("scroll", handleInfiniteScroll);
		};
	}, []);

	return (
		<div className="container">
			{card.map((c, index) => {
				return (
					<div key={c.id} className="card">
						<h1>{index + 1}</h1>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
