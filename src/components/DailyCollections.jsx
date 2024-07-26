import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDaily } from '../redux/actions/detailDailyActions';
import { Link } from 'react-router-dom';
import './components.css';

function DailyCollections({ currentPage, searchQuery }) {
	const dispatch = useDispatch();
	const { daily, loading } = useSelector((state) => state.detailDaily);
	const [dailys, setDailys] = useState([]);
	const username = useSelector((state) => state.auth.user?.username);

	useEffect(() => {
		dispatch(getDaily(currentPage, searchQuery));
	}, [currentPage, searchQuery, dispatch]);

	useEffect(() => {
		setDailys(daily);
	}, [daily]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (!Array.isArray(dailys) || dailys.length === 0) {
		return <p>No Dailys available.</p>;
	}

	const itemsPerPage = 10;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentDailys = dailys.slice(startIndex, endIndex);

	return (
		<div id="dailyCards">
			{currentDailys.map((dailyItem) => (
				<Link to={`/read-daily/${dailyItem.bacaan_id}`}>
					<div
						className="card w-full bg-base-100 shadow-md"
						key={dailyItem.bacaan_id}
					>
						<div className="card-body">
							<h2 className="card-title">{dailyItem.judul}</h2>
							<p>{dailyItem.deskripsi}</p>
							<div className="flex justify-between pt-3">
								<div className="flex align-center">
									<div className="avatar">
										<div className="w-8 rounded">
											<img
												src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
												alt="Tailwind-CSS-Avatar-component"
											/>
										</div>
									</div>
									<label
										htmlFor=""
										className="label text-xs"
									>
										{username}
									</label>
								</div>

								<label
									htmlFor=""
									className="label text-xs"
								>
									{dailyItem.waktuFormatted}
								</label>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default DailyCollections;
