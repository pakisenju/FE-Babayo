// Discuss.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faThumbsUp,
	faThumbsDown,
	faReply,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Discuss({ comments, loading, error }) {
	if (loading) {
		return <p>Loading comments...</p>;
	}

	if (error) {
		return <p>Error fetching comments: {error}</p>;
	}

	return (
		<div id="dailyCards">
			{comments.map((comment) => (
				<div
					key={comment.bacaan_id}
					className="card w-full bg-base-100 shadow-md"
				>
					<div className="card-body">
						<div className="flex justify-between pt-3">
							<div className="flex align-center">
								<div className="avatar flex align-center">
									<div className="w-16 rounded">
										<img
											src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
											alt="Tailwind-CSS-Avatar-component"
										/>
									</div>
								</div>

								<div className="flex-col">
									<label
										htmlFor=""
										className="label text-md font-semibold"
									>
										Willy
									</label>
									<label
										htmlFor=""
										className=" label text-xs"
									>
										{comment.waktuFormatted}
									</label>
								</div>
							</div>
						</div>

						<p>{comment.isi}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default Discuss;
