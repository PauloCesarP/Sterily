import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "./index.css";

function App() {
	const [cpf, setCpf] = useState("");
	const [track, setTrack] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleSearch = async () => {
		try {
			setIsLoading(true);

			// dev
			// const response = await axios.get(
			// 	`http://localhost:3000/api/track-by-cpf/${cpf}`,
			// );

			//prod
			const response = await axios.get(`/api/track-by-cpf/${cpf}`);

			setTrack(response.data);
			setIsLoading(false);
		} catch (error) {
			setTrack([]);

			toast.error("CPF não encontrado");
			console.error(error);
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-1 items-center justify-start flex-col font-['Montserrat'] text-sm min-h-[100vh]">
			<div className="container min-w-[100%] flex items-center justify-center mb-[25px] bg-[#264365]">
				<span className="text-[17px] pt-[6px] pb-[5px] text-[#fff] leading-[26px] font-[400]">
					{" "}
					LIMPEZA INTELIGENTE{" "}
				</span>
			</div>
			<div className="container flex items-center justify-center mb-[25px]">
				<a href="https://www.sterilybrasil.com">
					<span className="text-[17px] p-[10px] text-[#111111]">Início</span>
				</a>

				<a href="https://www.sterilybrasil.com/collections/linha-sterily">
					<span className="text-[17px] p-[10px] text-[#111111]">Comprar</span>
				</a>

				<a href="https://www.sterilybrasil.com">
					<img
						className="ml-[10px] mr-[10px]"
						src="https://www.sterilybrasil.com/cdn/shop/files/Copia_de_Purewash_150x.png?v=1632764515"
						alt="logo sterily"
					/>
				</a>

				<a href="https://www.sterilybrasil.com/pages/sobre">
					<span className="text-[17px] p-[10px] text-[#111111]">Sobre</span>
				</a>

				<a href="https://www.sterilybrasil.com/pages/suporte">
					<span className="text-[17px] p-[10px] text-[#111111]">Suporte</span>
				</a>
			</div>
			<div className="container">
				<h1 className="font-bold text-center font-['Montserrat'] text-lg">
					Rastreamento
				</h1>
				<p className="text-center font-bold mb-10">
					Preencher com o seu CPF no campo abaixo
				</p>

				<div className="flex gap-6 items-center p-4">
					<div className="flex-1">
						{/* <label
							htmlFor="first_name"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							CPF
						</label> */}
						<input
							value={cpf}
							onChange={(e) => setCpf(e.target.value)}
							type="text"
							id="first_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="CPF"
							required
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleSearch();
								}
							}}
						/>
					</div>
					<button
						type="button"
						onClick={handleSearch}
						className="flex py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
					>
						{isLoading && (
							<svg
								className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								/>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								/>
								<title>Buscar</title>
							</svg>
						)}
						Buscar
					</button>
				</div>

				{/* <div className="flex flex-col space-y-4">
					<div
						key={123}
						className="bg-gray-100 p-4 border border-gray-300 rounded-lg shadow-sm"
					>
						<p className="font-bold">11/06/2024 12:41:00</p>
						<p>Descrição do rastreamento</p>
					</div>
				</div> */}

				{/* <div>
					<pre>{JSON.stringify(track, null, 2)}</pre>
				</div> */}

				{/* <div
					className="flex items-center justify-center"
					style={{ display: isLoading ? "flex" : "none" }}
				>
					<div className="w-10">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
							<radialGradient
								id="a11"
								cx=".66"
								fx=".66"
								cy=".3125"
								fy=".3125"
								gradientTransform="scale(1.5)"
							>
								<stop offset="0" stop-color="#2E41FF" />
								<stop offset=".3" stop-color="#2E41FF" stop-opacity=".9" />
								<stop offset=".6" stop-color="#2E41FF" stop-opacity=".6" />
								<stop offset=".8" stop-color="#2E41FF" stop-opacity=".3" />
								<stop offset="1" stop-color="#2E41FF" stop-opacity="0" />
							</radialGradient>
							<circle
								transform-origin="center"
								fill="none"
								stroke="url(#a11)"
								stroke-width="15"
								stroke-linecap="round"
								stroke-dasharray="200 1000"
								stroke-dashoffset="0"
								cx="100"
								cy="100"
								r="70"
							>
								<animateTransform
									type="rotate"
									attributeName="transform"
									calcMode="spline"
									dur="2"
									values="360;0"
									keyTimes="0;1"
									keySplines="0 0 1 1"
									repeatCount="indefinite"
								/>
							</circle>
							<circle
								transform-origin="center"
								fill="none"
								opacity=".2"
								stroke="#2E41FF"
								stroke-width="15"
								stroke-linecap="round"
								cx="100"
								cy="100"
								r="70"
							/>
							<title>Loading</title>
						</svg>
					</div>
				</div> */}

				<section className="relative flex flex-col justify-center overflow-hidden mt-20 mb-20">
					<div className="w-full mx-auto px-4 md:px-6">
						<div className="flex flex-col justify-center divide-y divide-slate-200">
							<div className="w-full max-w-10xl mx-auto">
								<div className=" space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
									{track.length > 0 &&
										// biome-ignore lint/suspicious/noExplicitAny: <explanation>
										track.map((item: any) => {
											return (
												<div
													key={1212}
													className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
												>
													<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
														<svg
															className="fill-current"
															xmlns="http://www.w3.org/2000/svg"
															width="12"
															height="10"
														>
															<path
																fill-rule="nonzero"
																d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
															/>
															<title>etapa rastreamento</title>
														</svg>
													</div>

													<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
														<div className="flex items-center justify-between space-x-2 mb-1">
															<div className="font-bold text-slate-900">
																{`${item.scanNetworkProvince} ${item.scanNetworkCity} ${item.scanNetworkArea !== "BAIRRO INEXISTENTE" ? item.scanNetworkArea : ""}`}
															</div>
															<time className="text-xs font-medium text-indigo-500">
																{item.scanTime}
															</time>
														</div>
														<div className="text-slate-500">
															{item.desc
																.replace("Departed", "Partiu")
																.replace("Shipped for", "Enviado para")
																.replace("Arrival", "Chegada")
																.replace("Your", "Seu")
																.replace("J&T Courier", "J&T Courier ")
																.replace("J&T courier", "J&T Courier ")
																.replace("Delivering", " Entregando")
																.replace(
																	"Recceived！Recceived by",
																	"Recebido！Recebido por",
																)
																.replace(
																	"，In case of doubt, please contact：08000550050，If there is any excption or complaint, please contact the network：08000550050",
																	"，Em caso de dúvida, entre em contato：08000550050，Se houver alguma exceção ou reclamação, entre em contato com a rede：08000550050",
																)
																.replace("up。", "Enviou。")
																.replace(
																	"If there is any excption or complaint, please contact the network: 08000550050",
																	"Caso haja alguma exceção ou reclamação, entre em contato com a rede: 08000550050",
																)}
														</div>
													</div>
												</div>
											);
										})}

									{/* <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
										<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
											<svg
												className="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="10"
											>
												<path
													fill-rule="nonzero"
													d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
												/>
												<title>etapa rastreamento</title>
											</svg>
										</div>

										<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
											<div className="flex items-center justify-between space-x-2 mb-1">
												<div className="font-bold text-slate-900">
													Order Shipped
												</div>
												<time className="text-xs font-medium text-indigo-500">
													09/06/2023
												</time>
											</div>
											<div className="text-slate-500">
												Pretium lectus quam id leo. Urna et pharetra aliquam
												vestibulum morbi blandit cursus risus.
											</div>
										</div>
									</div>

									<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
										<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
											<svg
												className="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="10"
											>
												<path
													fill-rule="nonzero"
													d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
												/>
												<title>etapa rastreamento</title>
											</svg>
										</div>

										<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
											<div className="flex items-center justify-between space-x-2 mb-1">
												<div className="font-bold text-slate-900">
													In Transit
												</div>
												<time className="text-xs font-medium text-indigo-500">
													10/06/2023
												</time>
											</div>
											<div className="text-slate-500">
												Pretium lectus quam id leo. Urna et pharetra aliquam
												vestibulum morbi blandit cursus risus.
											</div>
										</div>
									</div>

									<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
										<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
											<svg
												className="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="10"
											>
												<path
													fill-rule="nonzero"
													d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
												/>
												<title>etapa rastreamento</title>
											</svg>
										</div>

										<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
											<div className="flex items-center justify-between space-x-2 mb-1">
												<div className="font-bold text-slate-900">
													Out of Delivery
												</div>
												<time className="text-xs font-medium text-indigo-500">
													12/06/2023
												</time>
											</div>
											<div className="text-slate-500">
												Pretium lectus quam id leo. Urna et pharetra aliquam
												vestibulum morbi blandit cursus risus.
											</div>
										</div>
									</div>

									<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
										<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
											<svg
												className="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="10"
											>
												<path
													fill-rule="nonzero"
													d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
												/>
												<title>etapa rastreamento</title>
											</svg>
										</div>

										<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
											<div className="flex items-center justify-between space-x-2 mb-1">
												<div className="font-bold text-slate-900">
													Out of Delivery
												</div>
												<time className="text-xs font-medium text-indigo-500">
													12/06/2023
												</time>
											</div>
											<div className="text-slate-500">
												Pretium lectus quam id leo. Urna et pharetra aliquam
												vestibulum morbi blandit cursus risus.
											</div>
										</div>
									</div>

									<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
										<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
											<svg
												className="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="10"
											>
												<path
													fill-rule="nonzero"
													d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
												/>
												<title>etapa rastreamento</title>
											</svg>
										</div>

										<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
											<div className="flex items-center justify-between space-x-2 mb-1">
												<div className="font-bold text-slate-900">
													Out of Delivery
												</div>
												<time className="text-xs font-medium text-indigo-500">
													12/06/2023
												</time>
											</div>
											<div className="text-slate-500">
												Pretium lectus quam id leo. Urna et pharetra aliquam
												vestibulum morbi blandit cursus risus.
											</div>
										</div>
									</div>

									<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
										<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
											<svg
												className="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="12"
											>
												<path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
												<title>etapa rastreamento</title>
											</svg>
										</div>

										<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
											<div className="flex items-center justify-between space-x-2 mb-1">
												<div className="font-bold text-slate-900">
													Delivered
												</div>
												<time className="text-xs font-medium text-amber-500">
													Exp. 12/08/2023
												</time>
											</div>
											<div className="text-slate-500">
												Pretium lectus quam id leo. Urna et pharetra aliquam
												vestibulum morbi blandit cursus risus.
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
