import { PhotoCamera } from "@mui/icons-material";
import {
	AppBar,
	Box,
	Button,
	Container,
	CssBaseline,
	Grid,
	Toolbar,
	Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
function App() {
	const [students, setStudents] = useState([]);
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get("http://127.0.0.1:8000/student/");
				setStudents(response.data);
			} catch (error) {}
		};
		getData();
	}, []);
	const bull = (
		<Box
			component="span"
			sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
		>
			•
		</Box>
	);
	return (
		<>
			<CssBaseline></CssBaseline>
			<AppBar position="relative">
				<Toolbar>
					<PhotoCamera></PhotoCamera>
					<Typography variant="h6">Photo Album</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div>
					<Container maxWidth="sm">
						<Typography
							variant="h2"
							align="center"
							color={"textPrimary"}
							gutterBottom
						>
							Photo Album
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="textSecondary"
							paragraph
						>
							Hello everyone this is a photo album and I'm trying to make
							this sentence ans long as possible.
						</Typography>
						<div>
							<Grid spacing={2} justifyContent="center" container>
								<Grid item>
									<Button variant="contained" color="primary">
										See my photos
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">
										secondary action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						{students.map((student) => {
							return (
								<Grid xs={12} sm={6} md={4} item key={student.id}>
									<StudentCard
										key={student.id}
										student={student}
									></StudentCard>
								</Grid>
							);
						})}
					</Grid>
				</Container>
			</main>
		</>
	);
}
export default App;
