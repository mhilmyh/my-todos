import { PackageContext } from "../../utils/package";

export default () => {
	const ctx = React.useContext(PackageContext);
	return (
		<div className="fixed bottom-0 right-0">
			<div className="container m-10">
				<button
					onClick={ctx.updatePopup}
					className={
						"w-16 h-16 rounded-full active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none z-10 " +
						(ctx.popup
							? "bg-red-500 hover:bg-red-600"
							: "bg-blue-500 hover:bg-blue-600")
					}
				>
					<svg
						viewBox="0 0 20 20"
						enableBackground="new 0 0 20 20"
						className="w-6 h-6 inline-block svg-icon text-white"
						stroke="currentColor"
					>
						{ctx.popup ? (
							<path
								fill="#FFFFFF"
								d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
							></path>
						) : (
							<path
								fill="#FFFFFF"
								d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
							/>
						)}
					</svg>
				</button>
			</div>
		</div>
	);
};
