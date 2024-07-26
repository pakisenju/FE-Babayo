import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookByID } from '../redux/actions/detailBookActions';
import { addFavoriteBook } from '../redux/actions/bookActions';
import './pages.css';
import Navbar from '../components/Navbbar';
import Footer2 from '../components/Footer2';
import {
	Link,
	NavLink,
	useParams,
} from 'react-router-dom/cjs/react-router-dom.min';

function DetailBooksPage() {
	const { buku_id } = useParams();
	const dispatch = useDispatch();
	const { book, loading, error } = useSelector((state) => state.detailBook);
	const userId = localStorage.getItem('userId');

	useEffect(() => {
		if (buku_id) {
			dispatch(getBookByID(buku_id));
		}
	}, [dispatch, buku_id]);

	const handleAddFavoriteBook = () => {
		if (!userId) {
			console.error('User not logged in');
			return;
		}
		dispatch(addFavoriteBook(buku_id, userId));
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!book || book.buku_id !== parseInt(buku_id)) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Navbar />
			<div className="flex-col h-screen pt-20">
				<div className="hero-content justify-start">
					<Link
						to="/books"
						className="btn btn-secondary"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</Link>
				</div>
				<div
					className="hero bg-base-100"
					id="detail-books"
				>
					<div
						className="hero-content flex-col lg:flex-row"
						style={{ gap: '48px' }}
					>
						<div className="flex-col">
							<img
								src={book.gambar}
								className="card card-compact w-72"
								alt={book.judul}
								style={{ width: '100%', height: '300px' }}
							/>
							<NavLink
								to={`/read-book/${book.buku_id}`}
								className="btn btn-secondary w-full my-2"
							>
								Baca Buku
							</NavLink>
							<button
								className="btn btn-primary w-full my-2"
								onClick={() => handleAddFavoriteBook(userId)} // Perubahan di sini
								disabled={loading}
							>
								{loading ? 'Menambahkan...' : 'Tambah Favorit'}
							</button>

							{error && <p style={{ color: 'red' }}>{error}</p>}
						</div>
						<div className="flex-col w-full">
							<h1 className="text-3xl font-bold">{book.judul}</h1>
							<table className="my-3">
								<tbody>
									<tr>
										<td className="w-32">Bahasa</td>
										<td className="w-4">:</td>
										<td>{book.bahasa}</td>
									</tr>
									<tr>
										<td className="w-32">Penulis</td>
										<td className="w-4">:</td>
										<td>{book.penulis}</td>
									</tr>
									<tr>
										<td className="w-32">Tahun Terbit</td>
										<td className="w-4">:</td>
										<td>{book.tahun_terbit}</td>
									</tr>
									<tr>
										<td className="w-32">Kategori</td>
										<td className="w-4">:</td>
										<td>{book.kategori}</td>
									</tr>
								</tbody>
							</table>

							<h1 className="text-3xl font-bold">Sinopsis</h1>
							<p className="my-3 text-justify">{book.sinopsis}</p>
						</div>
					</div>
				</div>
				<Footer2 />
			</div>
		</div>
	);
}

export default DetailBooksPage;
