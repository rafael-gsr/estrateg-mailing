import { PropsWithChildren } from "react";
import SideBarMenu from "../../Organisms/SideBarMenu";

import "./Base.styles.scss";
import { ThemeProvider } from "@emotion/react";
import muiTheme from "../../../styles/Theme";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SnackbarProvider } from "../../../contexts/SnackBarContext";

const BaseTemplate = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider theme={muiTheme}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<SnackbarProvider>
					<section className="base_template">
						<SideBarMenu />

						<div className="base_template__content">{children}</div>
					</section>
				</SnackbarProvider>
			</LocalizationProvider>
		</ThemeProvider>
	);
};

export default BaseTemplate;
