import axios from "axios";
import { useEffect, useState } from "react";

function App() {
	const [count, setCount] = useState(1);
	useEffect(() => {
		console.log("useEffect called", count);
	}, []);
	return (
		<>
			<div
				style={{
					margin: "4rem",
					fontSize: "4rem",
				}}
			>
				{count}
			</div>
			<button onClick={() => setCount(count + 1)}>Increase</button>
		</>
	);
}

export default App;
