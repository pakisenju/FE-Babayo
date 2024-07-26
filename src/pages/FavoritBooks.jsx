import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbbar';
import Footer2 from '../components/Footer2';
import FavoritBookCollections from '../components/FavoritBookCollections';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getFavoriteBooks } from '../redux/actions/bookActions';

function FavoritBooks() {
	const dispatch = useDispatch();
	const { favoriteBooks, loading, error } = useSelector((state) => state.book);
	const currentUserID = 3;

	useEffect(() => {
		dispatch(getFavoriteBooks(currentUserID));
	}, [dispatch, currentUserID]);

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
									<summary>Favorit</summary>
									<ul>
										<li>
											<Link to="/favorite-books">Buku</Link>
										</li>
										<li>
											<Link to="/favorite-dailys">Bacaan</Link>
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
							<input
								type="text"
								placeholder="Cari Buku"
								className="input input-bordered w-full"
								style={{ color: 'black' }}
							/>

							<FavoritBookCollections
								favoriteBooks={favoriteBooks}
								loading={loading}
								error={error}
							/>

							<Footer2 />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FavoritBooks;
