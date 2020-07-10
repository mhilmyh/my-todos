import ButtonFAB from "../components/button/ButtonFAB";
import Head from "next/head";
import PackageProvider, { PopupContext } from "../utils/package";

export default (props) => {
	return (
		<React.Fragment>
			<Head>
				<title>Hilmy Todo App</title>
			</Head>
			<PackageProvider>
				<div className="bg-blue-100 w-full min-h-screen">
					{props.children}
					<ButtonFAB></ButtonFAB>
				</div>
			</PackageProvider>
		</React.Fragment>
	);
};
