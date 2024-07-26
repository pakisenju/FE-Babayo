import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../redux/actions/detailBookActions';
import { deleteBook } from '../redux/actions/bookActions';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function BookCollections({ currentPage, searchQuery }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const { book, loading } = useSelector((state) => state.detailBook);
	const userRole = localStorage.getItem('role') || '';
	const [books, setBooks] = useState([]);

	useEffect(() => {
		dispatch(getBook(currentPage, searchQuery));
	}, [currentPage, searchQuery, dispatch]);

	useEffect(() => {
		setBooks(book);
	}, [book]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (!Array.isArray(books) || books.length === 0) {
		return <p>No books available.</p>;
	}

	const itemsPerPage = 10;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentBooks = books.slice(startIndex, endIndex);

	const confirmDelete = (buku_id) => {
		const isConfirmed = window.confirm(
			'Apakah Anda yakin ingin menghapus buku ini?'
		);
		if (isConfirmed) {
			dispatch(deleteBook(buku_id));
			history.push('/books');
		}
	};

	return (
		<div id="cardBooks">
			{currentBooks.map((bookItem) => (
				<div
					key={bookItem.buku_id}
					className="card card-compact bg-base-100"
					style={{ width: '152px' }}
				>
					<figure className="img-book">
						<Link to={`/detail-books/${bookItem.buku_id}`}>
							<img
								src={bookItem.gambar}
								alt={bookItem.judul}
								style={{ width: '100%', height: '250px', objectFit: 'cover' }}
							/>
						</Link>
					</figure>
					<div className="card-body-0">
						<h2 className="card-title text-base">{bookItem.judul}</h2>
						<p>by {bookItem.penulis}</p>
						{userRole === 'admin' && (
							<Link
								className="btn btn-sm btn-outline btn-success w-full"
								to={`/update-book/${bookItem.buku_id}`}
							>
								<FontAwesomeIcon icon={faPenToSquare} /> Edit
							</Link>
						)}
						{userRole === 'admin' && (
							<button
								className="btn btn-sm btn-outline btn-error w-full"
								onClick={() => confirmDelete(bookItem.buku_id)}
							>
								<FontAwesomeIcon icon={faTrash} /> Hapus
							</button>
						)}
					</div>
				</div>
			))}
		</div>
	);
}

export default BookCollections;
