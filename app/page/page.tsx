import { Grid, Typography } from "@mui/material";

export default function Page () {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Typography variant="body1" color="secondary">Welcome to this page</Typography>
			</Grid>
		</Grid>
	)
}