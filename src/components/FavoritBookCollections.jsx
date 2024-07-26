import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { deleteFavoriteBook } from '../redux/actions/bookActions';

function FavoritBookCollections({ favoriteBooks }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const confirmDelete = (fav_buku_id) => {
		const isConfirmed = window.confirm(
			'Apakah Anda yakin ingin menghapus buku ini?'
		);
		if (isConfirmed) {
			dispatch(deleteFavoriteBook(fav_buku_id));
			history.push('/favorite-books');
		}
	};

	return (
		<div>
			<div id="cardBooks">
				{favoriteBooks.map((bookItem) => (
					<div
						key={bookItem.fav_buku_id}
						className="card card-compact bg-base-100"
						style={{ width: '152px' }}
					>
						<figure className="img-book">
							<Link to={`/detail-books/${bookItem.koleksiBuku?.buku_id}`}>
								<img
									src={bookItem.koleksiBuku?.gambar}
									alt={bookItem.koleksiBuku?.judul}
									style={{ width: '100%', height: '187px', objectFit: 'cover' }}
								/>
							</Link>
						</figure>
						<div className="card-body-0">
							<h2 className="card-title text-base">
								{bookItem.koleksiBuku?.judul}
							</h2>
							<p>
								by <a href="">{bookItem.koleksiBuku?.penulis}</a>
							</p>
							<button
								className="btn btn-outline btn-error w-full"
								onClick={() => confirmDelete(bookItem.fav_buku_id)}
							>
								<FontAwesomeIcon icon={faTrash} />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default FavoritBookCollections;
