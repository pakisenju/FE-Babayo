// DiscussPage.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPaperPlane,
	faThumbsUp,
	faThumbsDown,
	faReply,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbbar';
import Footer2 from '../components/Footer2';
import Discuss from '../components/Discuss';
import { Link, useParams } from 'react-router-dom';
import { getComments } from '../redux/actions/detailCommentActions';

function DiscussPage() {
	const { bacaan_id } = useParams();
	const dispatch = useDispatch();
	const { comments, loading, error } = useSelector(
		(state) => state.detailComment
	);

	useEffect(() => {
		dispatch(getComments(bacaan_id));
	}, [dispatch, bacaan_id]);

	return (
		<div>
			<Navbar />

			<div
				className="flex-col h-screen pt-20"
				id="discuss-content"
			>
				<h1 className="font-semibold text-3xl text-center">
					Rendahnya Minat Baca Berpengaruh terhadap Kualitas Bangsa
				</h1>

				<Discuss
					comments={comments}
					loading={loading}
					error={error}
				/>

				<form action="">
					<div
						className="flex justify-between"
						style={{ gap: '1em' }}
					>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full min-w-xs"
						/>
						<button>
							<FontAwesomeIcon
								icon={faPaperPlane}
								size="xl"
							/>
						</button>
					</div>
				</form>

				<Footer2 />
			</div>
		</div>
	);
}

export default DiscussPage;
