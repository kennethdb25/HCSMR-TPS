import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
const useStyles = makeStyles(() => ({
	loginContainer: {
		backgroundImage: "url(/images/main-background.jpg)",
		backgroundPosition: "center",
		backgroundSize: "cover",
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",

		[theme.breakpoints.up("md")]: {
			paddingLeft: "100px",
			justifyContent: "start",
		},
		[theme.breakpoints.down("md")]: {
			paddingLeft: "0px",
			justifyContent: "center",
		},
	},
	loginCard: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		padding: "20px",
		background: "white",
		border: "1px lightgray solid",
		borderRadius: "10px",

		[theme.breakpoints.up("md")]: {
			width: "400px",
		},
		[theme.breakpoints.down("md")]: {
			width: "80%",
		},
	},
	Form: {
		width: "100%",
	},
}));

export default useStyles;
