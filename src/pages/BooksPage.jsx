import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBook } from '../redux/actions/detailBookActions';
import Navbar from '../components/Navbbar';
import BookCollections from '../components/BookCollections';
import Footer2 from '../components/Footer2';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function BooksPage() {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState('');
	const [userRole, setUserRole] = useState('');

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handleSearchChange = (event) => {
		const query = event.target.value;
		setSearchQuery(query);

		dispatch(getBook(currentPage, query));
	};

	useEffect(() => {
		const fetchedUserRole = localStorage.getItem('role') || '';

		setUserRole(fetchedUserRole);
		dispatch(getBook(currentPage));
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
									<summary>Koleksi Buku</summary>
									<ul>
										<li>
											<a>Semua</a>
										</li>
										<li>
											<a>Fiksi</a>
										</li>
										<li>
											<a>Pendidikan</a>
										</li>
										<li>
											<a>Sejarah</a>
										</li>
										<li>
											<a>Teknologi</a>
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
									placeholder="Cari Buku"
									className="input input-bordered w-full"
									style={{ color: 'black' }}
									value={searchQuery}
									onChange={handleSearchChange}
								/>
								{userRole === 'admin' && (
									<Link
										to="create-book"
										className="btn btn-secondary"
									>
										Tambah Buku Baru
									</Link>
								)}
							</div>

							<BookCollections currentPage={currentPage} />

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

export default BooksPage;
