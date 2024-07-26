import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer2 from '../components/Footer2';
import DailyCollections from '../components/DailyCollections';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Navbar from '../components/Navbbar';
import { getDaily } from '../redux/actions/detailDailyActions';

function DailysPage() {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		dispatch(getDaily(currentPage));
	}, [currentPage, dispatch]);

	return (
		<div>
			<Navbar />

			<div className="flex h-screen">
				<div
					className="drawer lg:drawer-open"
					style={{ paddingTop: '4rem', width: '20rem' }}
				>
					<input
						id="my-drawer-2"
						type="checkbox"
						className="drawer-toggle"
					/>
					<div className="drawer-side">
						<label
							htmlFor="my-drawer-2"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<ul
							className="menu p-4 w-64 min-h-full bg-accent text-base-content"
							id="sidebar-menu"
							style={{ position: 'fixed' }}
						>
							<li>
								<details open>
									<summary>Bacaan Harian</summary>
									<ul>
										<li>
											<a>Semua</a>
										</li>
										<li>
											<a>Artikel</a>
										</li>
										<li>
											<a>Cerpen</a>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</div>
				</div>

				<div
					className="flex w-full"
					style={{ paddingTop: '5rem' }}
				>
					<div className="hero bg-base-100">
						<div className="hero-content w-full flex-col px-10 lg:flex-col align-center">
							<div
								className="flex w-full"
								style={{ gap: '24px' }}
							>
								<input
									type="text"
									placeholder="Cari Bacaan"
									className="input input-bordered w-full"
									style={{ color: 'black' }}
								/>
								<Link
									to="create-daily"
									className="btn btn-secondary"
								>
									Buat Topik Baru
								</Link>
							</div>
							<DailyCollections currentPage={currentPage} />

							<div className="join">
								<button
									className="join-item btn btn-secondary"
									onClick={() => handlePageChange(currentPage - 1)}
									disabled={currentPage === 1}
								>
									«
								</button>
								<button className="join-item btn btn-secondary">
									Page {currentPage}
								</button>
								<button
									className="join-item btn btn-secondary"
									onClick={() => handlePageChange(currentPage + 1)}
								>
									»
								</button>
							</div>

							<Footer2 />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DailysPage;
