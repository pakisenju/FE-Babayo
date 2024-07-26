import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookByID } from '../redux/actions/detailBookActions';
import Navbar from '../components/Navbbar';
import Footer2 from '../components/Footer2';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function ReadBookPage() {
	const { buku_id } = useParams();
	const dispatch = useDispatch();
	const { book } = useSelector((state) => state.detailBook);

	useEffect(() => {
		if (buku_id) {
			dispatch(getBookByID(buku_id));
		}
	}, [dispatch, buku_id]);

	if (!book || book.buku_id !== parseInt(buku_id)) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Navbar />

			<div
				className="flex-col h-screen pt-20"
				id="read-content"
			>
				<div className="flex justify-between">
					<div className="flex-col font-semibold">
						<h1>{book.judul}</h1>
						<p>{book.tahun_terbit}</p>
					</div>
					<div className="flex-col text-right font-semibold">
						<h1>Waktu Membaca</h1>
						<p>00:00:00</p>
					</div>
				</div>
				<iframe
					src={book.iframe}
					className="w-full aspect-video py-6"
					title="Book IFrame"
				></iframe>
				<div className="flex justify-center">
					<Link
						to={`/detail-books/${book.buku_id}`}
						className="btn btn-secondary"
					>
						Selesai Membaca
					</Link>
				</div>

				<Footer2 />
			</div>
		</div>
	);
}

export default ReadBookPage;
