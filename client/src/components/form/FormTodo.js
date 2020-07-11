import Spinner from "../loader/Spinner";
import axios from "axios";
import { PackageContext } from "../../utils/package";
export default () => {
	const ctx = React.useContext(PackageContext);
	const [title, setTitle] = React.useState("");
	const [note, setNote] = React.useState("");
	const [deadline, setDeadline] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const handlerClick = (e) => {
		e.preventDefault();
		setLoading((loading) => !loading);
		const data = {
			title: title,
			note: note,
			deadline: new Date(deadline),
		};
		axios
			.post("http://54.169.149.237:8000/api/todo", data, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then(({ data }) => ctx.addTodo(data))
			.catch((err) => console.error(err))
			.finally(setLoading((loading) => !loading));
	};
	return (
		<div className="flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 max-w-lg">
			<form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
				<div className="flex flex-wrap -mx-3 mb-6">
					<h2 className="px-4 pt-3 pb-2 font-bold text-gray-700 text-lg">
						Buat Catatan Baru
					</h2>
					<div className="w-full md:w-full px-3 mb-2 mt-2">
						<input
							className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
							placeholder="Judul catatan"
							name="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						></input>
					</div>
					<div className="w-full md:w-full px-3 mb-2 mt-2">
						<textarea
							className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
							name="note"
							value={note}
							onChange={(e) => setNote(e.target.value)}
							placeholder="Deskripsi"
							required
						></textarea>
					</div>
					<div className="w-full md:w-full px-3 mb-2 mt-2">
						<input
							className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
							placeholder="Tanggal deadline"
							name="deadline"
							value={deadline}
							onChange={(e) => setDeadline(e.target.value)}
							required
						></input>
					</div>
					<div className="w-full md:w-full flex items-start md:w-full px-3">
						<div className="flex items-start w-auto text-gray-700 px-2 mr-auto">
							<svg
								fill="none"
								className="w-10 h-10 text-gray-600 mr-1"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<p className="text-xs md:text-sm pt-px">
								Gunakan format YYYY/MM/DD untuk tanggal (contoh: 2020/01/12)
							</p>
						</div>
						<div>
							{!loading ? (
								<button
									onClick={(e) => handlerClick(e)}
									className="container bg-blue-500 rounded-lg px-8 py-2 my-2 text-white font-bold"
								>
									Simpan
								</button>
							) : (
								<div className="container">
									<Spinner></Spinner>
								</div>
							)}
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
