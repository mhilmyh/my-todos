import Router from "next/router";
import { useEffect } from "react";

export default () => {
	useEffect(() => {
		Router.replace("/todo");
	}, []);
	return (
		<div>
			<h4>Tidak ada apa-apa di sini.</h4>
			<p>Reload aja..</p>
		</div>
	);
};
