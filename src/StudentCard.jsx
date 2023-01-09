import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";
import React from "react";
const StudentCard = ({ student }) => {
	const bull = (
		<Box
			component="span"
			sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
		>
			•
		</Box>
	);
	return (
		<Card sx={{}} variant="outlined">
			<CardContent>
				<Typography variant="h5" component="div">
					<span style={{ fontWeight: "bold" }}>Name:</span> {student.name}
				</Typography>

				<Typography variant="body2">
					<span style={{ fontWeight: "bold" }}>Age:</span> {student.age}
				</Typography>
				<Typography variant="body2">
					<span style={{ fontWeight: "bold" }}>Roll:</span> {student.roll}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" variant="contained">
					More
				</Button>
			</CardActions>
		</Card>
	);
};

export default StudentCard;
