import React, { useEffect } from 'react';
import './components.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRecBook } from '../redux/actions/detailBookActions';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Books() {
	const dispatch = useDispatch();
	const books = useSelector((state) => state.detailBook.book);
	const loading = useSelector((state) => state.detailBook.loading);

	useEffect(() => {
		dispatch(getRecBook());
	}, [dispatch]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (!Array.isArray(books) || books.length === 0) {
		return <p>Loading...</p>;
	}

	const sortedBooks = books.sort((a, b) => new Date(b.buku_id) - new Date(a.buku_id));

	const recBooks = sortedBooks.slice(0, 5);

	return (
		<div id="card-books">
			{recBooks.map((book) => (
				<div
					key={book.buku_id}
					className="card card-compact bg-base-100"
					style={{ width: '152px' }}
				>
					<figure className="img-book">
						<Link to={`/detail-books/${book.buku_id}`}>
							<img
								src={book.gambar}
								alt={book.judul}
								style={{ width: '100%', height: '250px', objectFit: 'cover' }}
							/>
						</Link>
					</figure>
					<div className="card-body-0">
						<h2 className="card-title">{book.judul}</h2>
						<p>
							by <a href="">{book.penulis}</a>
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default Books;
