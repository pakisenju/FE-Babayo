import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteFavoriteDaily } from '../redux/actions/dailyActions';

function FavoritDailyCollections({ favoriteDailys }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const confirmDelete = (fav_bacaan_harian_id) => {
		const isConfirmed = window.confirm(
			'Apakah Anda yakin ingin menghapus bacaan ini?'
		);
		if (isConfirmed) {
			dispatch(deleteFavoriteDaily(fav_bacaan_harian_id));
			history.push('/favorite-dailys');
		}
	};

	return (
		<div>
			<div id="dailyTables">
				<div className="">
					<table className="table">
						<thead>
							<tr>
								<th>Judul</th>
								<th>Aksi</th>
							</tr>
						</thead>

						<tbody>
							{favoriteDailys.map((dailyItem) => (
								<tr key={dailyItem.fav_bacaan_harian_id}>
									<td>{dailyItem.favoritedBacaanHarian?.judul}</td>
									<td
										className="flex"
										style={{ gap: '1em' }}
									>
										<button
											className="btn btn-outline btn-error"
											onClick={() =>
												confirmDelete(dailyItem.fav_bacaan_harian_id)
											}
										>
											<FontAwesomeIcon icon={faTrash} />
										</button>
										<Link
											className="btn btn-outline btn-success"
											to={`/read-daily/${dailyItem.bacaan_id}`}
										>Buka</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default FavoritDailyCollections;
